DROP TABLE IF EXISTS Productos_Ingredientes;
DROP TABLE IF EXISTS Ofertas;
DROP TABLE IF EXISTS Productos;
DROP TABLE IF EXISTS Ingredientes;
DROP TABLE IF EXISTS Categorias;

CREATE TABLE Categorias (
    categoria_id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL
);

CREATE TABLE Productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10, 2) NOT NULL,
    categoria_id INT,
    imagen_url VARCHAR(255),
    FOREIGN KEY (categoria_id) REFERENCES Categorias(categoria_id)
);

CREATE TABLE Ingredientes (
    idIng INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL
);

CREATE TABLE Productos_Ingredientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    producto_id INT,
    ingrediente_id INT,
    FOREIGN KEY (producto_id) REFERENCES Productos(id),
    FOREIGN KEY (ingrediente_id) REFERENCES Ingredientes(idIng)
);

CREATE TABLE Ofertas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    producto_id INT,
    descuento DECIMAL(5, 2),
    fecha_inicio DATE,
    fecha_fin DATE,
    FOREIGN KEY (producto_id) REFERENCES Productos(id)
);

INSERT INTO Categorias (nombre) VALUES 
('Pastel'),
('Torta'),
('Postre'),
('Bizcochuelo');

INSERT INTO Productos (nombre, descripcion, precio, categoria_id, imagen_url) VALUES 
('Torta Selva Negra', 'Deliciosa torta de chocolate con capas de crema y cerezas.', 25.00, 2, 'url_a_imagen_selva_negra'),
('Pastel de Durazno', 'Pastel suave con trozos de durazno y crema.', 15.00, 1, 'url_a_imagen_pastel_durazno'),
('Postre de Frutas', 'Mezcla de frutas frescas con yogurt.', 10.00, 3, 'url_a_imagen_postre_frutas'),
('Bizcochuelo de Vainilla', 'Bizcochuelo esponjoso con sabor a vainilla.', 12.00, 4, 'url_a_imagen_bizcochuelo_vainilla');

INSERT INTO Ingredientes (nombre) VALUES 
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

INSERT INTO Ofertas (producto_id, descuento, fecha_inicio, fecha_fin) VALUES 
(1, 10.00, '2024-06-01', '2024-06-30');

INSERT INTO Productos_Ingredientes (producto_id, ingrediente_id) VALUES 
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
