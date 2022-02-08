const perfis = require("../../data/Perfis")
module.exports = {
    perfil: ({perfil_id})=> {
        return perfis.find(item=> item.id === perfil_id)
    }
}