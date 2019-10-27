const bodyParser = require('body-parser')
const express = require('express')
const app = express()

//servir os arquivos estaticos
app.use(express.static('.'))
//qualquer requisição
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

//app.get('/teste', (req, res)=>res.send('Ok'))

app.listen(8081, () => console.log('Executando...'))


