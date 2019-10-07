// funções autoInvocadas - IIFE -> Immediately Invoked Function Expression
// funções que são automaticamente executadas
// essencial para o browser
// usado para fugir do escopo global

(function abc(){
    console.log('Sera executado na hora!')
    console.log('foge do escopo mais agrangente')
})()

// a função é executada sem precisar ter um programa que a chame