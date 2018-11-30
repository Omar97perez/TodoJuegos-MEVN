
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Esquema para Productos
const Productos = new Schema({
  titulo: String ,
  foto: String ,
  descripcion: String,
  tipo: String ,
  plataforma: String ,
  categoria: String ,
  precio: Number  ,
  oferta: Number 
});

module.exports = mongoose.model('Productos', Productos);
