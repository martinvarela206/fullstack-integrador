DROP TABLE IF EXISTS productos_ingredientes;
DROP TABLE IF EXISTS ofertas;
DROP TABLE IF EXISTS productos;
DROP TABLE IF EXISTS ingredientes;
DROP TABLE IF EXISTS categorias;

CREATE TABLE categorias (
    categoria_id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL
);

CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10, 2) NOT NULL,
    categoria_id INT,
    imagen_url VARCHAR(255),
    FOREIGN KEY (categoria_id) REFERENCES categorias(categoria_id)
);

CREATE TABLE ingredientes (
    idIng INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL
);

CREATE TABLE productos_ingredientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    producto_id INT,
    ingrediente_id INT,
    FOREIGN KEY (producto_id) REFERENCES productos(id),
    FOREIGN KEY (ingrediente_id) REFERENCES ingredientes(idIng)
);

CREATE TABLE ofertas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    producto_id INT,
    descuento DECIMAL(5, 2),
    fecha_inicio DATE,
    fecha_fin DATE,
    FOREIGN KEY (producto_id) REFERENCES productos(id)
);

INSERT INTO categorias (nombre) VALUES 
('Pastel'),
('Torta'),
('Postre'),
('Bizcochuelo');

INSERT INTO productos (nombre, descripcion, precio, categoria_id, imagen_url) VALUES
('Chocotorta', 'Chocotorta artesanal de dulce de leche repostero.', 15000, 2, './img/chocotorta.jpg'),
('Selva Negra', 'Deliciosa torta Selva Negra con capas de chocolate y crema chantilly.', 20000, 2, './img/selva_negra.jpg'),
('Torta Oreo', 'Torta de galletas Oreo con relleno cremoso de vainilla y chocolate.', 18000, 2, './img/torta_oreo.jpg'),
('Perdición de Chocolate', 'Exquisito postre de múltiples capas de chocolate belga.', 22000, 3, './img/perdicion_chocolate.jpg'),
('Selva Frutal', 'Torta Selva Frutal con capas de frutas frescas y crema pastelera.', 19000, 2, './img/selva_frutal.jpg'),
('Cheese Cake', 'Clásico cheese cake con base de galletas y cobertura de frutos rojos.', 17000, 3, './img/cheese_cake.jpg'),
('Perdición de Cereza', 'Postre de crema y cerezas frescas con base crujiente.', 21000, 3, './img/perdicion_cereza.jpg'),
('Piramide Deliciosa', 'Impresionante pirámide de chocolate y capas de bizcocho.', 25000, 3, './img/piramide_deliciosa.jpg'),
('Budín Inglés', 'Clásico budín inglés con frutas confitadas y un toque de brandy.', 14000, 4, './img/budin_ingles.jpg'),
('Pastelitos Individuales', 'Pequeños pastelitos surtidos con diferentes sabores y decoraciones.', 10000, 1, './img/pastelitos_individuales.jpg'),
('Waffles', 'Waffles recién hechos con opción de toppings variados.', 12000, 3, './img/waffles.jpg'),
('Mini Rogel', 'Mini Rogel con finas capas de masa y dulce de leche.', 13000, 3, './img/mini_rogel.jpg');

INSERT INTO ingredientes (nombre) VALUES 
('Chocolate'),
('Vainilla'),
('Azúcar'),
('Huevo'),
('Harina'),
('Leche'),
('Mantequilla'),
('Durazno'),
('Frutas frescas'),
('Yogurt');

INSERT INTO ofertas (producto_id, descuento, fecha_inicio, fecha_fin) VALUES 
(1, 10.00, '2024-06-01', '2024-07-30'),
(3, 10.00, '2024-06-01', '2024-07-30'),
(7, 10.00, '2024-06-01', '2024-07-30'),
(12, 10.00, '2024-06-01', '2024-07-30');

-- Chocotorta
INSERT INTO productos_ingredientes (producto_id, ingrediente_id) VALUES 
(1, 1), 
(1, 3), 
(1, 5), 
(1, 6), 
(1, 7);

-- Selva Negra
INSERT INTO productos_ingredientes (producto_id, ingrediente_id) VALUES 
(2, 1), 
(2, 3), 
(2, 4), 
(2, 5), 
(2, 9);

-- Torta Oreo
INSERT INTO productos_ingredientes (producto_id, ingrediente_id) VALUES 
(3, 1), 
(3, 2), 
(3, 3), 
(3, 4), 
(3, 5), 
(3, 6);

-- Perdición de Chocolate
INSERT INTO productos_ingredientes (producto_id, ingrediente_id) VALUES 
(4, 1), 
(4, 3), 
(4, 4), 
(4, 5), 
(4, 7);

-- Selva Frutal
INSERT INTO productos_ingredientes (producto_id, ingrediente_id) VALUES 
(5, 3), 
(5, 4), 
(5, 5), 
(5, 9);

-- Cheese Cake
INSERT INTO productos_ingredientes (producto_id, ingrediente_id) VALUES 
(6, 2), 
(6, 3), 
(6, 5), 
(6, 6), 
(6, 9);

-- Perdición de Cereza
INSERT INTO productos_ingredientes (producto_id, ingrediente_id) VALUES 
(7, 1), 
(7, 3), 
(7, 4), 
(7, 5), 
(7, 9);

-- Piramide Deliciosa
INSERT INTO productos_ingredientes (producto_id, ingrediente_id) VALUES 
(8, 1), 
(8, 3), 
(8, 4), 
(8, 5), 
(8, 7);

-- Budín Inglés
INSERT INTO productos_ingredientes (producto_id, ingrediente_id) VALUES 
(9, 3), 
(9, 4), 
(9, 5), 
(9, 8);

-- Pastelitos Individuales
INSERT INTO productos_ingredientes (producto_id, ingrediente_id) VALUES 
(10, 1), 
(10, 2), 
(10, 3), 
(10, 4), 
(10, 5);

-- Waffles
INSERT INTO productos_ingredientes (producto_id, ingrediente_id) VALUES 
(11, 2), 
(11, 3), 
(11, 4), 
(11, 5), 
(11, 6);

-- Mini Rogel
INSERT INTO productos_ingredientes (producto_id, ingrediente_id) VALUES 
(12, 1), 
(12, 3), 
(12, 4), 
(12, 5), 
(12, 7);
