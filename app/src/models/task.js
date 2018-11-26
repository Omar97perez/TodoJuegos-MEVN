const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = Schema({
  Nombre: String,
  Foto: String,
  Descripcion:String,
  Tipo:String,
  Plataforma:String,
  Categoria:String,
  Precio:String,
  Oferta:String,
  status: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('tasks', TaskSchema);
