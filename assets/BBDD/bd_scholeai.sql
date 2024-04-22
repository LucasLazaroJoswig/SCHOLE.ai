-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-04-2024 a las 01:15:27
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bd_scholeai`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `conversaciones`
--

CREATE TABLE conversaciones (
  conv_id int(11) NOT NULL,
  conv_usu_id int(10) NOT NULL,
  conv_id_herramienta varchar(10) NOT NULL,
  conv_archivo varchar(40),
  conv_contenido text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `herramientas`
--

CREATE TABLE herramientas (
  herr_id varchar(10) NOT NULL,
  herr_nombre varchar(35) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE usuarios (
  usu_id int(11) NOT NULL,
  usu_alias varchar(30) NOT NULL,
  usu_nombre varchar(30),
  usu_email varchar(50) NOT NULL,
  usu_password varchar(40) NOT NULL,
  eleccion_tema int(2) DEFAULT 0,
  foto_perfil varchar(35)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `conversaciones`
--
ALTER TABLE conversaciones
  ADD PRIMARY KEY (conv_id),
  ADD KEY r_usu_id (conv_usu_id),
  ADD KEY r_herr_id (conv_id_herramienta);

--
-- Indices de la tabla `herramientas`
--
ALTER TABLE herramientas
  ADD PRIMARY KEY (herr_id);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE usuarios
  ADD PRIMARY KEY (usu_id);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `conversaciones`
--
ALTER TABLE conversaciones
  MODIFY conv_id int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE usuarios
  MODIFY usu_id int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `conversaciones`
--
ALTER TABLE conversaciones
  ADD CONSTRAINT r_herr_id FOREIGN KEY (conv_id_herramienta) REFERENCES herramientas (herr_id),
  ADD CONSTRAINT r_usu_id FOREIGN KEY (conv_usu_id) REFERENCES usuarios (usu_id);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
