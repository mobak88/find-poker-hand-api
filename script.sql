CREATE DATABASE IF NOT EXISTS finn_hand_db;

USE finn_hand_db;

CREATE TABLE hands (
	id INT AUTO_INCREMENT PRIMARY KEY,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    hand_rank INT NOT NULL,
    hand_description VARCHAR(30) NOT NULL

);

CREATE TABLE cards (
    id INT AUTO_INCREMENT PRIMARY KEY,
    card VARCHAR(10) NOT NULL,
    value INT NOT NULL,
    suit VARCHAR(20) NOT NULL,
    hand_id INT,
    FOREIGN KEY (hand_id) REFERENCES hands(id)
);