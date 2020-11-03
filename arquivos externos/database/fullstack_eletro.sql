-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 25-Out-2020 às 00:17
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
-- Banco de dados: `fullstack_eletro`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `pedidos`
--

CREATE TABLE `pedidos` (
  `id` int(11) NOT NULL,
  `cliente` varchar(50) NOT NULL,
  `endereco` varchar(200) NOT NULL,
  `telefone` int(11) NOT NULL,
  `produto` varchar(50) NOT NULL,
  `preco` float NOT NULL,
  `quantidade` smallint(6) NOT NULL,
  `valor_total` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `produtos`
--

CREATE TABLE `produtos` (
  `id` int(11) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `descricao` varchar(200) DEFAULT NULL,
  `preco` float NOT NULL,
  `img` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `produtos`
--

INSERT INTO `produtos` (`id`, `nome`, `descricao`, `preco`, `img`) VALUES
(1, 'Geladeira', 'Geladeira Frost Free Consul Inox 340 litros', 2069, './img/produtos/geladeira1.jpeg'),
(2, 'Geladeira', 'Geladeira Frost Free Brastemp Side Inverse 540 litros', 3069, './img/produtos/geladeira2.jpeg'),
(3, 'Geladeira', 'Geladeira Frost Free Brastemp Branca 375 litros', 1910.9, './img/produtos/geladeira3.jpeg'),
(4, 'Fogão', 'Fogão de Piso 4 Bocas Altas Monaco com Acendimento Automático', 519.7, './img/produtos/fogao1.jpeg'),
(5, 'Fogão', 'Fogão 4 Bocas Consul Inox com Mesa de Vidro', 1129, './img/produtos/fogao2.jpeg'),
(6, 'Microondas', 'Microondas Consul 32 Litros Inox 220V', 1129, './img/produtos/microondas1.jpeg'),
(7, 'Microondas', 'Microondas 25 Litros Espelhado Philco 220V', 409.88, './img/produtos/microondas2.jpeg'),
(8, 'Microondas', 'Forno de Microondas Eletrolux 20 Litros Branco', 436.05, './img/produtos/microondas3.jpeg'),
(9, 'Lava Louças', 'Lava Louças Eletrolux com 10 Serviços, 10 Programas de Lavagem e Painel Blue Touch', 2799.9, './img/produtos/lava louças1.jpeg'),
(10, 'Lava Louças', 'Lava Louças Compacta Branca 127V Brastemp', 1730.61, './img/produtos/lava louças2.jpeg'),
(11, 'Lavadora de Roupas', 'Lavadora de Roupas Philco Inverter 12kg, 10 Programas de Lavagem e Painel Blue Touch', 2179.9, './img/produtos/maquina de lavar1.jpeg'),
(12, 'Lavadora de Roupas', 'Lavadora de Roupas Brastemp 11kg com Turbo Performace Branca', 1214.1, './img/produtos/maquina de lavar2.jpeg');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `produtos`
--
ALTER TABLE `produtos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `img` (`img`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `produtos`
--
ALTER TABLE `produtos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
