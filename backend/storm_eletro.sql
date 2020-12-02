-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 01-Dez-2020 às 00:31
-- Versão do servidor: 10.4.14-MariaDB
-- versão do PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `storm_eletro`
--
CREATE DATABASE IF NOT EXISTS `storm_eletro` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `storm_eletro`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `categorias`
--

CREATE TABLE `categorias` (
  `cat_id` int(11) NOT NULL,
  `categoria` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `categorias`
--

INSERT INTO `categorias` (`cat_id`, `categoria`) VALUES
(2, 'Fogão'),
(1, 'Geladeira'),
(4, 'Lava Louças'),
(5, 'Maquina de Lavar'),
(3, 'Microondas'),
(6, 'Purificador de água');

-- --------------------------------------------------------

--
-- Estrutura da tabela `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL COMMENT 'Nome do Cliente',
  `msg` varchar(300) NOT NULL,
  `data` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- --------------------------------------------------------

--
-- Estrutura da tabela `produtos`
--

CREATE TABLE `produtos` (
  `id` int(11) NOT NULL,
  `cat_id` int(11) NOT NULL,
  `descricao` varchar(200) DEFAULT NULL,
  `img` varchar(200) NOT NULL,
  `preco_antigo` decimal(6,2) NOT NULL,
  `preco` decimal(6,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `produtos`
--

INSERT INTO `produtos` (`id`, `cat_id`, `descricao`, `img`, `preco_antigo`, `preco`) VALUES
(1, 1, 'Geladeira Frost Free Consul Inox 340 litros', './img/produtos/geladeira1.jpeg', '2199.90', '2069.00'),
(2, 1, 'Geladeira Frost Free Brastemp Side Inverse 540 litros', './img/produtos/geladeira2.jpeg', '5019.00', '3069.00'),
(3, 1, 'Geladeira Frost Free Brastemp Branca 375 litros', './img/produtos/geladeira3.jpeg', '2068.00', '1910.90'),
(4, 2, 'Fogão de Piso 4 Bocas Altas Monaco com Acendimento Automático', './img/produtos/fogao1.jpeg', '609.90', '519.70'),
(5, 2, 'Fogão 4 Bocas Consul Inox com Mesa de Vidro', './img/produtos/fogao2.jpeg', '1209.90', '1129.00'),
(6, 3, 'Microondas Consul 32 Litros Inox 220V', './img/produtos/microondas1.jpeg', '580.99', '409.88'),
(7, 3, 'Microondas 25 Litros Espelhado Philco 220V', './img/produtos/microondas2.jpeg', '508.70', '464.53'),
(8, 3, 'Forno de Microondas Eletrolux 20 Litros Branco', './img/produtos/microondas3.jpeg', '459.90', '436.05'),
(9, 4, 'Lava Louças Eletrolux com 10 Serviços, 10 Programas de Lavagem e Painel Blue Touch', './img/produtos/lava louças1.jpeg', '3599.00', '2799.90'),
(10, 4, 'Lava Louças Compacta Branca 127V Brastemp', './img/produtos/lava louças2.jpeg', '1970.50', '1730.61'),
(11, 5, 'Lavadora de Roupas Philco Inverter 12kg, 10 Programas de Lavagem e Painel Blue Touch', './img/produtos/maquina de lavar1.jpeg', '2399.90', '2179.90'),
(12, 5, 'Lavadora de Roupas Brastemp 11kg com Turbo Performace Branca', './img/produtos/maquina de lavar2.jpeg', '1699.00', '1214.10'),
(13, 6, 'Purificador de água Electrolux Pe11B Branco Bivolt com painel touch', 'https://eletrum.vteximg.com.br/arquivos/ids/165187-400-400/purificador-de-agua-electrolux-branco-bivolt-pe11b-jarra.png?v=636740907456370000', '700.84', '499.00');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`cat_id`),
  ADD UNIQUE KEY `nome` (`categoria`);

--
-- Índices para tabela `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `produtos`
--
ALTER TABLE `produtos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `img` (`img`),
  ADD KEY `fk_cat` (`cat_id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de tabela `produtos`
--
ALTER TABLE `produtos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `produtos`
--
ALTER TABLE `produtos`
  ADD CONSTRAINT `fk_cat` FOREIGN KEY (`cat_id`) REFERENCES `categorias` (`cat_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
