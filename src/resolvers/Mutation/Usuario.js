const usuarios = require("../../data/Usuarios")

var newID = usuarios.length + 1
module.exports = {
    createUser: (_, args)=>{
        let emailExistente = usuarios.some(usr => usr.email === args.email)
        if(emailExistente) throw new Error("Email existente")

        let user = {
            id: newID++,
            ...args
        }

        usuarios.push(user)
        return user
    },
    deleteUser: (_, {id})=>{
        let usrIndex = usuarios.findIndex(u => u.id === id)

        if(usrIndex < 0) return null
        const excluidos = usuarios.splice(usrIndex, 1)
        return excluidos ? excluidos[0] : null
    },
    alterUser: (_, args)=>{
        let usrIndex = usuarios.findIndex(u => u.id === args.id)
        if(usrIndex < 0) throw new Error("Usuário não encontrado")
        const user = {
            ...usuarios[usrIndex],
            ...args
        }
        usuarios[usrIndex] = user
        return user
    }
}