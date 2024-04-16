-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-04-2024 a las 23:46:11
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
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `usu_id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `contraseña` varchar(255) NOT NULL,
  `usu_foto` varchar(255) DEFAULT NULL,
  `correo` varchar(255) NOT NULL,
  `estilo` tinyint(4) DEFAULT 0,
  `nombre_usuario` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`usu_id`, `nombre`, `contraseña`, `usu_foto`, `correo`, `estilo`, `nombre_usuario`) VALUES
(1, 'Deivi Perdomo', 'deivi', NULL, 'deivi@gmail.com', 0, 'deivipppp'),
(2, 'awervaerv', '8cd01f476df0d8c3e4620336e98dea8e', 'sdc', 'awecaervaerv', 0, 'aervaerv'),
(3, 'sdcav', 'e3ad16a259aca18d103d090dcbef851c', NULL, 'awervarv', 0, 'aewcvarv');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`usu_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `usu_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
