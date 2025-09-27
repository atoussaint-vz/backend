require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NOMBRE,
  process.env.DB_USUARIO,
  process.env.DB_CLAVE,
  {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PUERTO || 5432,
    dialect: 'postgres',
    logging: false
  }
);

// ✅ Exporta la instancia para usarla en otros archivos
module.exports = sequelize;
