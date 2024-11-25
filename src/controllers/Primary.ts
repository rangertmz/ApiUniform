import { connection } from "../config/config";
import { Request, Response } from "express";

export const getPrimary = async (req: Request, res: Response) => {
  const query = ` SELECT talla, genero, SUM(total) as totalUniformes, MAX(ultima_entrada) as ultimaEntrada FROM primaria GROUP BY talla `;
  try {
    connection.query(query, (err, results) => {
      if (err) throw console.log(err);
      res.json({ tallas: results });
    });
  } catch (err) {
    res.json({ message: err });
    console.log(err);
  }
};

export const createPrimary = async (req: Request, res: Response) => {
  const {
    user,
    proveedor,
    coste,
    coste_total,
    total,
    talla,
    genero,
    fecha_registro,
    ultima_entrada,
    anotacion,
  } = req.body;
  const query =
    "INSERT INTO primaria (user, proveedor, coste, coste_total, total, talla, genero, fecha_registro, ultima_entrada, anotacion) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

  try {
    connection.query(
      query,
      [
        user,
        proveedor,
        coste,
        coste_total,
        total,
        talla,
        genero,
        fecha_registro,
        ultima_entrada,
        anotacion,
      ],
      (err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).json({ message: err });
        }
        res.send("Registro creado " + results);
      }
    );
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};

export const getLastPrimary = async (req: Request, res: Response) => {
  const query =
    "SELECT SUM(total) as totalUniformes, MAX(ultima_entrada) as ultimaEntrada FROM primaria";
  try {
    connection.query(query, (err, results: any) => {
      if (err) {
        console.log(err);
        return res
          .status(500)
          .json({ message: "Error en el servidor", error: err });
      }
      const { totalUniformes, ultimaEntrada } = results[0];
      res.json({ totalUniformes, ultimaEntrada });
    });
  } catch (err) {
    res.json({ message: err });
    console.log(err);
  }
};

export const getAllUniforms = async (req: Request, res: Response) => {
  const queries = {
    Primary:
      "SELECT 'Primary' as level, proveedor, fecha_registro, user, coste, coste_total, talla, genero, anotacion, total as totalUniformes, ultima_entrada as ultimaEntrada FROM primaria ORDER BY ultima_entrada DESC",
    Secondary:
      "SELECT 'Secondary' as level, proveedor, fecha_registro, user, coste, coste_total, talla, genero, anotacion, total as totalUniformes, ultima_entrada as ultimaEntrada FROM secundaria ORDER BY ultima_entrada DESC",
    Preparatory:
      "SELECT 'Preparatory' as level, proveedor, fecha_registro, user, coste, coste_total, talla, genero, anotacion, total as totalUniformes, ultima_entrada as ultimaEntrada FROM preparatoria ORDER BY ultima_entrada DESC",
    Teachers:
      "SELECT 'Teachers' as level, user, proveedor, fecha_registro, coste, coste_total, talla, genero, anotacion, total as totalUniformes, ultima_entrada as ultimaEntrada FROM maestros ORDER BY ultima_entrada DESC",
    University:
      "SELECT 'University' as level, proveedor, fecha_registro, user, coste, coste_total, talla, genero, anotacion, total as totalUniformes, ultima_entrada as ultimaEntrada FROM universidad ORDER BY ultima_entrada DESC",
    Sports:
      "SELECT 'Sports' as level, proveedor, fecha_registro, user, coste, coste_total, talla, genero, anotacion, total as totalUniformes, ultima_entrada as ultimaEntrada FROM deportes ORDER BY ultima_entrada DESC",
  };

  try {
    const results: any[] = [];

    // Iterar sobre las consultas y ejecutarlas
    for (const [level, query] of Object.entries(queries)) {
      
      const result = await new Promise<any[]>((resolve, reject) => {
        connection.query(query, (err, result: any) => {
          if (err) {
            console.error(`Error executing query for level ${level}:`, err);
            return reject(err);
          }
          if (!result) {
            console.warn(`No valid result found for level ${level}`);
            return resolve([]);
          }
          
          resolve(result);
        });
      });

      results.push(...result);
    }

    // Ordenar todos los registros por fecha descendente (más reciente primero)
    results.sort(
      (a, b) =>
        new Date(b.ultimaEntrada).getTime() -
        new Date(a.ultimaEntrada).getTime()
    );

    
    res.json(results);
  } catch (err) {
    console.error("Error fetching records: ", err);
    res.status(500).json({ message: "Error fetching records" });
  }
};
