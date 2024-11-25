-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS `uniformes`;

-- Usar la base de datos creada
USE `uniformes`;

-- Crear la tabla usuarios
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `contraseña` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Crear la tabla primaria
CREATE TABLE `primaria` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(255) NOT NULL,
  `proveedor` varchar(255) NOT NULL,
  `coste` int(11) NOT NULL,
  `coste_total` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `talla` varchar(255) NOT NULL,
  `genero` varchar(255) NOT NULL,
  `fecha_registro` date NOT NULL,
  `ultima_entrada` date NOT NULL,
  `anotacion` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Crear la tabla secundaria
CREATE TABLE `secundaria` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(255) NOT NULL,
  `proveedor` varchar(255) NOT NULL,
  `coste` int(11) NOT NULL,
  `coste_total` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `talla` varchar(255) NOT NULL,
  `genero` varchar(255) NOT NULL,
  `fecha_registro` date NOT NULL,
  `ultima_entrada` date NOT NULL,
  `anotacion` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Crear la tabla preparatoria
CREATE TABLE `preparatoria` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(255) NOT NULL,
  `proveedor` varchar(255) NOT NULL,
  `coste` int(11) NOT NULL,
  `coste_total` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `talla` varchar(255) NOT NULL,
  `genero` varchar(255) NOT NULL,
  `fecha_registro` date NOT NULL,
  `ultima_entrada` date NOT NULL,
  `anotacion` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Crear la tabla universidad
CREATE TABLE `universidad` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(255) NOT NULL,
  `proveedor` varchar(255) NOT NULL,
  `coste` int(11) NOT NULL,
  `coste_total` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `talla` varchar(255) NOT NULL,
  `genero` varchar(255) NOT NULL,
  `fecha_registro` date NOT NULL,
  `ultima_entrada` date NOT NULL,
  `anotacion` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Crear la tabla deportes
CREATE TABLE `deportes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(255) NOT NULL,
  `proveedor` varchar(255) NOT NULL,
  `coste` int(11) NOT NULL,
  `coste_total` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `talla` varchar(255) NOT NULL,
  `genero` varchar(255) NOT NULL,
  `fecha_registro` date NOT NULL,
  `ultima_entrada` date NOT NULL,
  `anotacion` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Crear la tabla maestros
CREATE TABLE `maestros` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(255) NOT NULL,
  `proveedor` varchar(255) NOT NULL,
  `coste` int(11) NOT NULL,
  `coste_total` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `talla` varchar(255) NOT NULL,
  `genero` varchar(255) NOT NULL,
  `fecha_registro` date NOT NULL,
  `ultima_entrada` date NOT NULL,
  `anotacion` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
