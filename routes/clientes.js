const express = require('express');
const Cliente = require('../models/cliente');
const router = express.Router();

// Obtener todos los clientes
router.get('/', async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (error) {
    console.error("❌ Error en la consulta de clientes:", error);
    res.status(500).json({ error: "Error al obtener clientes" });
  }
});

// Agregar nuevo cliente
router.post('/', async (req, res) => {
  try {
    const { nombre, apellido, email } = req.body;

    // Validaciones mínimas
    if (!nombre || !apellido) {
      return res.status(400).json({ error: "Nombre y apellido son obligatorios" });
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: "Email inválido" });
    }

    const nuevoCliente = await Cliente.create({ nombre, apellido, email });
    res.status(201).json(nuevoCliente);
  } catch (error) {
    console.error("❌ Error al agregar cliente:", error);
    res.status(500).json({ error: "Error al agregar cliente", detalle: error.message });
  }
});

module.exports = router;
