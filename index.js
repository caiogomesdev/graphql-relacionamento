const app = require("./src/app")

const PORT = process.env.PORT || 3333
app.listen(PORT).then(({url})=>{
    console.log(`Rodando na URL: ${url}`)
})