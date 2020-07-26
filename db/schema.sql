DROP DATABASE IF EXISTS  wallet_db;
CREATE DATABASE wallet_db;
USE wallet_db;
CREATE TABLE budget(
    id INT NOT NULL AUTO_INCREMENT,
    item VARCHAR(50) NOT NULL,
    price DECIMAL(7,2) NOT NULL,
    purchased BOOLEAN DEFAULT false,  
    PRIMARY KEY(id)

);
