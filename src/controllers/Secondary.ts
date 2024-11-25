import { connection } from "../config/config";
import { Request, Response } from "express";

export const getSecondary = async (req: Request, res: Response) => {
  const query = ` SELECT talla, genero, SUM(total) as totalUniformes, MAX(ultima_entrada) as ultimaEntrada FROM secundaria GROUP BY talla `
  try {
    connection.query(query, (err, results) => {
      if (err) throw console.log(err);
      res.send({tallas:results});
    });
  } catch (err) {
    res.send(err);
    console.log(err);
  }
};

export const createSecondary = async (req: Request, res: Response) => {
    const { user, proveedor, coste, coste_total, total, talla, genero, fecha_registro, ultima_entrada, anotacion } = req.body;
    const query = "INSERT INTO secundaria (user, proveedor, coste, coste_total, total, talla, genero, fecha_registro, ultima_entrada, anotacion) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?,?)";
  
    try {
      connection.query(query, [user, proveedor, coste, coste_total, total, talla, genero, fecha_registro, ultima_entrada, anotacion], (err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).send(err);
        }
        res.send("Registro creado " + results);
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  };

  export const getLastSecondary = async (req: Request, res: Response) => {
    const query = "SELECT SUM(total) as totalUniformes, MAX(ultima_entrada) as ultimaEntrada FROM secundaria"
    try {
      connection.query(query, (err, results:any) => {
        if (err) { 
          console.log(err); 
          return res.status(500).json({ message: "Error en el servidor", error: err }); 
        } 
        const { totalUniformes, ultimaEntrada } = results[0]; 
        res.json({ totalUniformes, ultimaEntrada})
      });
    } catch (err) {
      res.json({message:err});
      console.log(err);
    }
  };