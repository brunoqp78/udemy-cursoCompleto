// executar o comando npm i node-schedule, na raiz dos projetos /Udemy-CursoCompleto
// o node-schedule irá para o node-modules

const schedule = require('node-schedule')

//*/5 - a cada cinco segundo
// *5 * 12 - a qualquer minuto das 12:00 - 12:59 
// * * 2 - ignoro o dia do mes, o mes e defino o terceiro dia(0,1,2) da semana
// ou seja, a configuração do professor é de executar em todas as terças feiras das 12:00 as 12:59 de 5 em 5 segundosconst tempoprof = '*/5 * 12 **2'
const tempoprof = '*/5 * 12 * * 2'
const tempo = '*/1 * 12 * * 1'
const funcao = ()=>console.log('Executando tarefa 1!!!', new Date().getSeconds())
const funcao2 = ()=>console.log('Executando tarefa 2!!!', new Date().getSeconds())

// criar a tarefa agendada
const tarefa1 = schedule.scheduleJob(tempo, funcao)

// define o termino do agendamento
setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando a tarefa 1')
}, 100000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)]
regra.hour = 12
regra.second = [3,10,15,20,25,30,40,50,55]

const tarefa2 = schedule.scheduleJob(regra, funcao2)