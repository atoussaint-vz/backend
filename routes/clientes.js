const express = require('express');
const Cliente = require('../models/cliente');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (error) {
    console.error("❌ Error en la consulta de clientes:", error);
    res.status(500).json({
      error: "Error al obtener clientes",
      detalle: error.message, // 👈 mostrará el motivo real
    });
  }
});

module.exports = router;
