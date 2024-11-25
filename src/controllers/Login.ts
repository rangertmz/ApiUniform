import { connection } from "../config/config";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { revokedTokens } from "../config/config";

dotenv.config();


export const verifyLogin = async (req: Request, res: Response) => {
  const { nombre, contraseña } = req.body;
  if (!nombre || !contraseña) {
    return res.status(400).send("Usuario y contraseña requeridos");
  }

  try {
    // Verificar si el nombre de usuario existe
    connection.query(
      "SELECT * FROM usuarios WHERE nombre = ?",
      [nombre],
      async (err, results: any) => {
        if (err) {
          console.log(err);
          return res.status(500).json({message:"Error en el servidor"});
        }
        if (results.length === 0) {
          return res.status(400).json({message:"Usuario no encontrado"});
        }
        const user = results[0];
        // Verificar si la contraseña es correcta
        const validPassword = await bcrypt.compare(contraseña, user.contraseña);
        if (!validPassword) {
          return res.status(400).json({message:"Contraseña incorrecta"});
        }
        // Crear el token JWT
        const token = jwt.sign(
          { id: user.id, nombre: user.nombre },
          process.env.JWT_SECRET!,
          { expiresIn: "1h" }
        );
        res.json({ message: "Usuario válido", token });
      }
    );
  } catch (err) {
    console.log(err);
    res.status(500).json({message:"Error en el servidor"});
  }
};


export const logout = (req: Request, res: Response) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(400).send('No token present');
  }

  revokedTokens.push(token);
  res.send('Logged out successfully');
};



const saltRounds = 10;

export const updatePassword = async (req: Request, res: Response) => {
  const { id, nuevaContraseña } = req.body;

  try {
    // Encriptar la nueva contraseña
    const hashedPassword = await bcrypt.hash(nuevaContraseña, saltRounds);

    // Actualizar la contraseña en la base de datos
    connection.query("UPDATE usuarios SET contraseña = ? WHERE id = ?", [hashedPassword, id], (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).send("Error en el servidor");
      }
      res.send("Contraseña actualizada correctamente");
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Error en el servidor");
  }
};

export const registerUser = async (req: Request, res: Response) => {
  const { nombre, contraseña } = req.body;

  if (!nombre || !contraseña) {
    return res.status(400).send("Nombre y contraseña requeridos");
  }
  try {
    // Verificar si el nombre de usuario ya existe
    connection.query("SELECT * FROM usuarios WHERE nombre = ?", [nombre], async (err, results:any) => {
      if (err) {
        console.log(err);
        return res.status(500).json({message:"Error en el servidor"});
      }
      if (results.length > 0) {
        return res.status(400).json({message:"Nombre de usuario ya existe"});
      }
      // Crear el usuario en la base de datos
      const hashPassword = await bcrypt.hash(contraseña, saltRounds);
      connection.query("INSERT INTO usuarios (nombre, contraseña) VALUES (?, ?)", [nombre, hashPassword], (err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).json({message:"Error en el servidor"});
        }
        res.json({message:"Usuario creado correctamente"});
      });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({message:"Error en el servidor"});
  }
};

