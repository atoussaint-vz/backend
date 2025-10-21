const { DataTypes } = require('sequelize');
const sequelize = require('../db');

// Definimos el modelo Cliente
const Cliente = sequelize.define('cliente', {
  cod_cliente: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  apellido: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: true,
    validate: { isEmail: true }
  }
}, {
  tableName: 'cliente',   // 👈 nombre exacto de la tabla en PostgreSQL
  timestamps: false,      // 👈 no crea columnas createdAt/updatedAt
  freezeTableName: true   // 👈 no pluraliza "cliente" a "clientes"
});

module.exports = Cliente;
