const usuarios = require("./usuarios")
const perfis = require("./Perfis")

module.exports = {
    ...perfis,
    ...usuarios
}