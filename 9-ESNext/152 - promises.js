// utiliza promises quando queremos ter um processamento assincrono
// define o sucesso e insucesso de uma operação assincrona

// função que recebe dois parametros, que é o tempo e a frase
// ela retorna um objeto promise
// que executa o resolve(sucesso) após tempo segundos. 
function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve(frase) // resolve aceita apenas um parametro
        }, segundos * 1000);
    })
}

// chama a função
falarDepoisDe(3, 'Que Legal!')
.then(frase =>frase.concat('?!?')) // ativado quando o resolve é chamado // o promisse tem a função then que permite concatenar outrasfunções
.then(outrafrase => console.log(outrafrase))
.then(console.log('Terminou')) // como a promisse é assincrona, esse comando é executado antes dos dois

function falarDepoisDe2(segundos, frase){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           reject(frase) // resolve aceita apenas um parametro
        }, segundos * 1000);
    })
}

// chama a função
// resolve = executa uma ou várias then
// reject = executa o catch
falarDepoisDe2(3, 'Que Legal!')
.then(frase =>frase.concat('?!?')) // ativado quando o resolve é chamado// o promisse tem a função then que permite concatenar outrasfunções
.then(outrafrase => console.log(outrafrase))
.then(console.log('Terminou')) // como a promisse é assincrona, esse comando é executado antes dos dois
.catch(e => console.log(`Rejeitou e retornou: ${e}`)) // executado no reject // pode chamar apenas uma vez