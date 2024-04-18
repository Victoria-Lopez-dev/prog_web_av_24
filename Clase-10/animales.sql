-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 18-04-2024 a las 16:57:05
-- Versión del servidor: 10.4.19-MariaDB
-- Versión de PHP: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `refugio`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `animales`
--

CREATE TABLE `animales` (
  `id` int(11) NOT NULL,
  `nombre_animal` varchar(100) DEFAULT NULL,
  `edad` int(3) DEFAULT NULL,
  `tipo_animal` varchar(100) DEFAULT NULL,
  `vacunas` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `animales`
--

INSERT INTO `animales` (`id`, `nombre_animal`, `edad`, `tipo_animal`, `vacunas`) VALUES
(1, 'Pepito', 10, 'perro', 1),
(3, 'Tweety', 3, 'ave', 1),
(4, 'Dama', 12, 'gato', 1),
(5, 'Momo', 5, 'gato', 1),
(6, 'Lulu', 5, 'ave', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `animales`
--
ALTER TABLE `animales`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `animales`
--
ALTER TABLE `animales`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
