const express = require('express');
require('dotenv').config();

const sequelize = require('./db');
const clientesRouter = require('./routes/clientes');

const app = express();
const puerto = process.env.PORT || 3000;

app.use(express.json());
app.use('/clientes', clientesRouter);

// Verificar conexión a la base de datos
sequelize.authenticate()
  .then(() => console.log("✅ Conexión a PostgreSQL establecida correctamente"))
  .catch(err => console.error("❌ Error de conexión:", err));

app.listen(puerto, () => {
  console.log(`🚀 Servidor escuchando en http://localhost:${puerto}`);
});
