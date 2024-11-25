import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { revokedTokens } from "../config/config";

dotenv.config();


export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).send("No token present");
  }
  if (revokedTokens.includes(token)) {
    return res.status(401).send("Token has been revoked");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      id: number;
    };
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).send("Invalid token");
  }
};
