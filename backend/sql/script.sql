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
('Torta Selva Negra', 'Deliciosa torta de chocolate con capas de crema y cerezas.', 25.00, 2, 'url_a_imagen_selva_negra'),
('Pastel de Durazno', 'Pastel suave con trozos de durazno y crema.', 15.00, 1, 'url_a_imagen_pastel_durazno'),
('Postre de Frutas', 'Mezcla de frutas frescas con yogurt.', 10.00, 3, 'url_a_imagen_postre_frutas'),
('Bizcochuelo de Vainilla', 'Bizcochuelo esponjoso con sabor a vainilla.', 12.00, 4, 'url_a_imagen_bizcochuelo_vainilla');

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
(1, 10.00, '2024-06-01', '2024-06-30');

INSERT INTO productos_ingredientes (producto_id, ingrediente_id) VALUES 
-- Torta Selva Negra (producto_id: 1)
(1, 1), -- Chocolate
(1, 4), -- Huevo
(1, 3), -- Azúcar

-- Pastel de Durazno (producto_id: 2)
(2, 8), -- Durazno
(2, 4), -- Huevo
(2, 3), -- Azúcar

-- Postre de Frutas (producto_id: 3)
(3, 9), -- Frutas frescas
(3, 10), -- Yogurt

-- Bizcochuelo de Vainilla (producto_id: 4)
(4, 2), -- Vainilla
(4, 4), -- Huevo
(4, 5); -- Harina
