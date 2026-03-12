-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: cardcommerce_db
-- ------------------------------------------------------
-- Server version	8.0.40

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
`id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
`slug` VARCHAR(255) NOT NULL,
`customer_name` VARCHAR(100) NOT NULL,
`customer_surname` VARCHAR(100) NOT NULL,
`customer_mail` VARCHAR(200) NOT NULL,
`phone` VARCHAR(30) NOT NULL,
`street_name` VARCHAR(150) NOT NULL,
`street_name_billing` VARCHAR(150) NOT NULL,
`city` VARCHAR(100) NOT NULL,
`city_billing` VARCHAR(100) NOT NULL,
`postal_code` VARCHAR(20) NOT NULL,
`postal_code_billing` VARCHAR(20) NOT NULL,
`province` VARCHAR(100) NOT NULL,
`province_billing` VARCHAR(100) NOT NULL,
`country` VARCHAR(100) NOT NULL,
`country_billing` VARCHAR(100) NOT NULL,
`shipping_cost` DECIMAL(10,2) NOT NULL DEFAULT 0,
`created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
);

--
-- Dumping data for table orders
--





--
-- Table structure for products
--


DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
`id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
`slug` VARCHAR(255) NOT NULL,
`title` VARCHAR(255) NOT NULL,
`description` TEXT NOT NULL,
`price` DECIMAL(10,2) NOT NULL,
`image` VARCHAR(255) NOT NULL,
`is_featured` boolean NOT NULL,
`created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
`updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


--
-- Dumping data for products
--





--
-- Table structure for order_product
--

DROP TABLE IF EXISTS `order_product`;
CREATE TABLE `order_product` (
 `order_id` int NOT NULL,
 `product_id` int NOT NULL,
 `quantity` int NOT NULL,
 `unit_price` decimal(10,2) NOT NULL,
 PRIMARY KEY (`order_id`,`product_id`),
 CONSTRAINT `order_product_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE,
 CONSTRAINT `order_product_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE
);


--
-- Table structure for game_type
--


DROP TABLE IF EXISTS `game_type`;
CREATE TABLE `game_type` (
 `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
 `product_id` int NOT NULL,
 `type` VARCHAR(150) NOT NULL,
 `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
 `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
 KEY `fk_product` (`product_id`),
 CONSTRAINT `fk_product_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE
);


--
-- Dumping data for game_type
--





--
-- Table structure for rarity
--


DROP TABLE IF EXISTS `game_rarity`;
CREATE TABLE `game_rarity` (
 `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
 `product_id` int NOT NULL,
 `rarity` VARCHAR(255) NOT NULL,
 `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
 `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
 KEY `fk_product` (`product_id`),
 CONSTRAINT `fk_product_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE
);


--
-- Dumping datak for rarity
--





--
-- Table structure for condition
--


DROP TABLE IF EXISTS `conditions`;
CREATE TABLE `conditions` (
 `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
 `product_id` int NOT NULL,
 `condition` VARCHAR(255) NOT NULL,
 `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
 `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
 KEY `fk_product` (`product_id`),
 CONSTRAINT `fk_product_ibfk_3` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE
);


--
-- Dumping data for condition
--