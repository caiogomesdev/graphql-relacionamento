const Usuarios = require("../../data/Usuarios")
module.exports = {
    usuarios : ()=> Usuarios,
    usuario : ( _, {id})=> Usuarios.find(u => u.id === id)
}