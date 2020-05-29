-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 28, 2020 at 11:09 PM
-- Server version: 10.1.40-MariaDB
-- PHP Version: 7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `baseDatos`
--

-- --------------------------------------------------------

--
-- Table structure for table `resenas`
--

CREATE TABLE `resenas` (
  `id` int(11) NOT NULL,
  `pelicula_id` int(11) DEFAULT NULL,
  `usuario_id` int(11) DEFAULT NULL,
  `resena` longtext,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  `puntaje` decimal(1,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='tabla de resenas';

--
-- Dumping data for table `resenas`
--

INSERT INTO `resenas` (`id`, `pelicula_id`, `usuario_id`, `resena`, `createdAt`, `updatedAt`, `puntaje`) VALUES
(1, 338762, 1, 'maleeeeesema', '2001-02-02', '2020-05-20', '0'),
(2, 19404, 2, 'Tremendo', '2001-02-02', '2016-05-18', '8'),
(3, 385103, 3, 'MUY mala', '2001-02-02', '2005-05-18', '3'),
(4, 443791, 4, 'Me pegue un cagaso', '2001-02-07', '2010-05-18', '9'),
(5, 443791, 5, 'Tremenda', '2001-02-07', '2020-05-18', '6'),
(6, 640344, 1, 'La mas inspirante que vi en mi vida', '2001-02-07', '2012-05-18', '9'),
(7, 419704, 2, 'De las peores inversiones que hice', '2001-02-07', '2011-05-18', '1'),
(8, 19404, 3, 'QUE LOCURA', '2001-02-07', '2020-05-18', '7'),
(9, 338762, 4, 'La veria mil veces mas', '2001-02-07', '2020-05-18', '8'),
(10, 19404, 5, 'Como hacen peliculas tan malas?', '2001-02-07', '2018-05-18', '3'),
(11, 278, 1, 'Oscar si o si', '2001-02-07', '2020-05-18', '5'),
(12, 278, 2, 'WOW', '2001-02-07', '2020-05-18', '8'),
(13, 385103, 3, 'Malisima', '2001-02-07', '2007-05-18', '4'),
(14, 19404, 4, 'genialll', '2001-02-07', '2020-05-18', '7'),
(15, 419704, 5, 'Tremenda', '2001-02-07', '2012-05-18', '9'),
(16, 443791, 1, 'muy malaa', '2001-02-07', '2020-05-18', '1'),
(17, 443791, 2, 'Pesima', '2001-02-07', '2019-05-18', '3'),
(18, 337862, 3, 'muy piola', '2001-02-07', '2020-05-18', '9'),
(19, 640344, 4, 'pesimo', '2001-02-07', '2013-05-18', '4'),
(20, 385103, 5, 'me rei mucho', '2001-02-07', '2020-05-18', '8'),
(22, 443791, 2, 'muy mala', '2001-02-07', '2016-05-18', '4'),
(23, 278, 3, 'buenisimo', '2001-02-07', '2015-05-18', '9'),
(24, 640344, 4, 'Muy buena onda', '2001-02-07', '2020-05-18', '8'),
(25, 419704, 5, 'tremendoo', '2001-02-07', '2003-05-18', '8'),
(26, 385103, 8, 'A mi sobrino le encanto... Me parecio lo peor de warner', '2020-05-19', '2020-05-19', '2'),
(27, 385103, 8, 'lo que...?', '2020-05-19', '2020-05-19', '5'),
(28, 338762, 8, 'vin diesel haciendo de vin diesel con superpoderes.... pauperrima', '2020-05-20', '2020-05-20', '2'),
(34, 385103, 8, 'malarda', '2020-05-20', '2020-05-20', '0'),
(35, 385103, 1, 'buenardaaaaa', '2020-05-20', '2020-05-20', '9'),
(36, 576156, 23, 'mala', NULL, NULL, '1'),
(37, 419704, 23, 'el comentario apestoso', '2020-05-26', '2020-05-26', '6');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `birth_date` date DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` tinytext
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Tabla de usuarios';

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `name`, `birth_date`, `email`, `password`) VALUES
(1, 'Franco', '2001-02-02', 'franco@gmail.com', '12334'),
(2, 'Segundo', '2001-02-07', 'segundo@gmail.com', '1234'),
(3, 'Justi', '2001-02-05', 'justi@gmail.com', '1234'),
(4, 'Paula', '2001-02-03', 'paula@gmail.com', '1234'),
(5, 'Sofia', '2001-02-07', 'sofia@gmail.com', '1234'),
(6, 'Leon', '2001-02-07', 'leon@gmail.com', '1234'),
(7, 'Eucracio', '2001-02-07', 'eucracio@gmail.com', '1234'),
(8, 'Mati', '2001-02-02', 'mati@gmail.com', '1234'),
(9, 'Dario', '2001-02-02', 'dario@gmail.com', '1234'),
(10, 'Herni', '2001-02-02', 'herni@gmail.com', '1234'),
(11, 'Marcos', '2001-02-02', 'marcos@gmail.com', '1234'),
(23, 'Mheber', NULL, 'mati@mail.com', '$2a$10$TFR/6TfU27zgDzQ3OCeM8e.6T4UbD1Jm/iL5SNJ8vVahuFlogyEMK'),
(24, 'matimati', NULL, 'matias@mail.com', '$2a$10$d6W4yNvQatk6LClMduD/Ou5HFk5ZfDLTBG9rDRdDv7NKwKeUiTkZe'),
(25, 'alkakjfhaj', NULL, 'dani@dh.com', '$2a$10$FcJlRnhzP8mDgoDkQENAZuw1RvMAeX3ZF9Q.Rj0qQn7CaI6ius4AW');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `resenas`
--
ALTER TABLE `resenas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuarioResena` (`usuario_id`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `resenas`
--
ALTER TABLE `resenas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `resenas`
--
ALTER TABLE `resenas`
  ADD CONSTRAINT `usuarioResena` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
