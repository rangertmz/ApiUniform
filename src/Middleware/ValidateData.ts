import { Request, Response, NextFunction } from 'express';

export const validateAllData = (req: Request, res: Response, next: NextFunction) => {
  const { user, proveedor, coste, coste_total, total, talla, genero, fecha_registro, ultima_entrada } = req.body;

  if (!user || !proveedor || !coste || !coste_total || !total || !talla || !genero || !fecha_registro || !ultima_entrada) {
    return res.status(400).send('Todos los campos son requeridos');
  }

  if (typeof coste !== 'number' || typeof coste_total !== 'number' || typeof total !== 'number') {
    return res.status(400).send('Coste, coste_total y total deben ser números');
  }

  next();
};
