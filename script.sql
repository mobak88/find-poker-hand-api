CREATE DATABASE finn_hand_app;

USE finn_hand_app;

CREATE TABLE hands (
	id INT AUTO_INCREMENT PRIMARY KEY,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE cards (
    id INT AUTO_INCREMENT PRIMARY KEY,
    card VARCHAR(10) NOT NULL,
    value INT NOT NULL,
    suit VARCHAR(20) NOT NULL,
    hand_id INT,
    FOREIGN KEY (hand_id) REFERENCES hands(id)
);