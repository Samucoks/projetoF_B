const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const cores = []

app.get('/', (req, res) =>{
    let mensagem = 'Seja Bem Vindo ao meu primeiro servidor!'
    res.send(mensagem)
})
app.get('/cores', (req, res) => {
    
    res.send(cores)
})

app.get('/cores/:id', (req , res) => {
     
    if(req.params.id > 0){
        cores.forEach(element => {
            if(element.id == req.params.id){
               res.send(element)
            }
            
        });
    }
    else{
        res.send('404 NOT FOUND')
    }

})
// estrutura do req.body -> EX: {"id":1, "cor":"#fff", "nomeCor": "white"}
app.post('/cores', (req, res) => {
    cores.push(req.body)
    res.send(cores)
})

app.listen(4000, () => console.log('Server running in http://localhost:4000'))