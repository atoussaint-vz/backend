const express = require('express');
require('dotenv').config();
const cors = require('cors'); // 👈 Importamos CORS

const sequelize = require('./db');
const clientesRouter = require('./routes/clientes');
const Cliente = require('./models/cliente'); // 👈 Importamos el modelo

const app = express();
const puerto = process.env.PORT || 3000;

// 🔹 Middleware CORS
app.use(cors()); // permite cualquier origen
// Si quieres restringirlo a tu frontend en Vercel:
// app.use(cors({ origin: 'https://tu-frontend.vercel.app' }));

// Middleware para interpretar JSON
app.use(express.json());

// Rutas principales
app.use('/clientes', clientesRouter);

// Ruta raíz para verificar que el servidor esté activo
app.get('/', (req, res) => {
  res.send('✅ Servidor del backend funcionando correctamente');
});

// Verificar conexión a la base de datos y sincronizar modelos
sequelize.authenticate()
  .then(() => {
    console.log("✅ Conexión a PostgreSQL establecida correctamente");

    // 🔁 Sincroniza los modelos (no borra nada si force está en false)
    return sequelize.sync({ alter: false });
  })
  .then(() => {
    console.log("🗂️ Modelos sincronizados correctamente con la base de datos");
  })
  .catch(err => console.error("❌ Error de conexión o sincronización:", err));

// Iniciar servidor
app.listen(puerto, () => {
  console.log(`🚀 Servidor escuchando en http://localhost:${puerto}`);
});
