const { DataTypes } = require('sequelize');
const sequelize = require('../db');

// Definimos el modelo cliente
const Cliente = sequelize.define('Cliente', {
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
  tableName: 'cliente',  // 👈 nombre exacto de la tabla en tu BD
  timestamps: false,     // 👈 desactiva createdAt/updatedAt
  freezeTableName: true  // 👈 evita que Sequelize pluralice el nombre
});

module.exports = Cliente;
