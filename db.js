require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NOMBRE,
  process.env.DB_USUARIO,
  process.env.DB_CLAVE,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PUERTO,
    dialect: 'postgres',
    logging: console.log, // 👈 activa logs SQL para ver qué hace Sequelize
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // 👈 necesario para Railway
      },
    },
  }
);

// ✅ Verificar conexión con mensajes más útiles
(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexión a PostgreSQL exitosa');
  } catch (err) {
    console.error('❌ Error al conectar con la base de datos:');
    console.error('🔹 Código:', err.original?.code);
    console.error('🔹 Mensaje:', err.message);
  }
})();

module.exports = sequelize;
