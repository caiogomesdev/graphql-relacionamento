const perfis = require("../../data/Perfis")
module.exports = {
    perfis : ()=> perfis,
    perfil : ( _ , {id} )=>{
        return perfis.find(i => i.id === id)
    }
}