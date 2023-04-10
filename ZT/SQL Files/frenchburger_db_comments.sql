CREATE DATABASE  IF NOT EXISTS `frenchburger_db` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `frenchburger_db`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: frenchburger_db
-- ------------------------------------------------------
-- Server version	5.5.5-10.1.29-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comments` (
  `comments_Id` int(10) NOT NULL AUTO_INCREMENT,
  `product_Id` int(10) NOT NULL,
  `username` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `productName` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `ratings` int(11) NOT NULL,
  `review` text COLLATE utf8_unicode_ci NOT NULL,
  `datePosted` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`comments_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=108 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (80,0,'yuezhengting','King Burger',3,'A pretty good burger, definitely worth the money. Would recommend! edit 2, RATING 3 edit 3','2/12/2018  11:46:35'),(82,0,'1701308g','King Burger',2,'Did not meet my expectations, disappointing. It is cheap though, good for its price.','2/12/2018  11:47:53'),(83,1,'1701308g','Whopper Burger',5,'One of the best burgers I have ever tried! The only reason I even come back to this site. The rest are below average.','2/12/2018  11:50:19'),(84,7,'1701308g','Supreme Burger',1,'SUPREMEly underwhelming','2/12/2018  11:50:34'),(85,2,'1701308g','Strawberry Smoothie',1,'Fizzy smoothie? Not my type.','2/12/2018  11:51:1'),(86,3,'1701308g','Tortilla Chicken',4,'It\'s a cheap, comfort food.','2/12/2018  11:51:38'),(87,6,'1701308g','Ramen Burger',1,'Who even thought this was a good idea...','2/12/2018  11:51:53'),(88,4,'1701308g','Mac & Cheese',2,'Tastes different from the typical Mac and Cheese. Not in a good way.','2/12/2018  11:52:26'),(89,5,'1701308g','Strawberry Sundae',3,'Tastes alright.','2/12/2018  11:52:43'),(90,0,'pomponcheng','King Burger',2,'Nothing that screams \"King\".','2/12/2018  11:53:25'),(91,1,'pomponcheng','Whopper Burger',1,'Whopping disappointment.','2/12/2018  11:53:53'),(92,7,'pomponcheng','Supreme Burger',4,'Pretty good, tastes slightly better than MacDonald\'s double cheeseburger.','2/12/2018  11:54:22'),(93,2,'pomponcheng','Strawberry Smoothie',5,'I really like this drink, sometimes I come onto this website just to get this.','2/12/2018  11:54:54'),(94,6,'pomponcheng','Ramen Burger',5,'Ramen Burger... Thought it would be disgusting, but actually tastes pretty good!','2/12/2018  11:55:25'),(95,7,'afiqafiq','Supreme Burger',1,'I dont like','2/12/2018  11:56:0'),(96,2,'afiqafiq','Strawberry Smoothie',3,'okok only','2/12/2018  11:56:16'),(97,3,'afiqafiq','Tortilla Chicken',4,'Quite cheap, I like','2/12/2018  11:56:30'),(98,4,'afiqafiq','Mac & Cheese',5,'Wah very nice','2/12/2018  11:56:53'),(99,5,'afiqafiq','Strawberry Sundae',4,'I don\'t usually eat ice cream, but this tastes actually great.','2/12/2018  11:57:29'),(102,0,'MrPostman','King Burger',3,'testing postman trying to edit, first attempt.','2/12/2018 11:59:59'),(103,0,'afiqafiq','King Burger',4,'dsadas','2/12/2018  13:5:12'),(104,0,'afiqafiq','King Burger',3,'dsdasd','2/12/2018  13:05:43'),(107,4,'yuezhengting','Mac & Cheese',1,'testing2 edit1','2/14/2018  0:52:45');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-02-14 19:54:42
