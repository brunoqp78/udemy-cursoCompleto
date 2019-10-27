const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const multer = require('multer') // manipular arquivo

const storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, './upload')
    },
    filename: function(req, file, callback){
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({storage}).single('arquivo')
//definimos a rota
app.post('/upload', (req, res)=>{
    upload(req, res, err=>{
        if(err){
            return res.end('Ocorreu um erro.')
        }

        res.end('Concluído com sucesso.')
    })
})

//servir os arquivos estaticos
app.use(express.static('.'))
//qualquer requisição
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

//app.get('/teste', (req, res)=>res.send('Ok'))

app.post('/formulario', (req, res)=>{
    res.send({
        ...req.body,
        id: 1
    })
})

app.listen(8081, () => console.log('Executando...'))


