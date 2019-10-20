//operador ternario
// nota >=7 ? 'aprovado' : 'reprovado'
const resultado = nota => nota >=7 ? 'aprovado' : 'reprovado'

console.log(resultado(7.1))
console.log(resultado(6.1))

// primeira parte : expressão
// segunda parte (?) : expressão verdadeira
// terceira parte (:) : expressão falsa

/*
Transcrição da Aula:

Para outro pessoal vimos operadores binários vários deles vimos na aula passada os operadores na área

alguns na aula passada outros a gente já tinha visto em aulas posteriores e agora nós vamos ver o operador

ternário em JavaScript.

Então pra isso vou criar um novo arquivo fail chamado ternário.

E aqui nós vamos criar vou criar uma função uma função é só pra gente chamar operador ternário duas

vezes e não repetir o código certo.

Mais gente já viu um pouquinho de função e também de certa forma revisar aqui mas eu quero deixar bem

claro o que é a função e o que é operador ternário para você não ter confusão.

Eu vou criar uma constante chamada resultado que vai ser uma função que vai receber uma função.

Primeiro o nome do parâmetro nota.

Note que só tem um único parâmetro.

Então por isso eu posso tirar os parênteses que envolvem todos os parâmetros de uma função.

Então só um parâmetro coloco a sétima da função e o que vi é agora mesmo que chame o estranho em mim

posso chamar o britânico dessa forma né.

O retorno implícito é o operador ternário vai fazer esse papel aqui.

Então vou colocar uma expressão lógica a primeira parte do operador ternário você colocar uma expressão

que vai retornar verdadeiro falso.

Então na verdade uma expressão lógica não é uma expressão relacional.

Então coloca uma nota maior igual a 7.

Vou colocar o operador ternário operador ternário.

Esqueci de falar no começo mais binário apenas um único operando Binário 2 operando o ternário operador

que tem 3 operandos o primeiro operando essa expressão relacional nota maior igual a 7 vai dar verdadeiro

ou falso.

Se é verdadeira a primeira parte será retornada no caso o que é aprovado se é falso 2 pontos ele vai

retornar à segunda baixa que é reprovado então esse aqui é o operador ternário.

1ª parte do operador ternário é uma expressão relacional no caso o que é maior ou igual que usa índice

exemplo se for verdadeiro essa expressão ele vai retornar.

Isso se for falso essa expressão ele vai retornar.

Isso aqui a gente vai ver logo na seguida no capítulo seguinte a partir de estruturas de controle em

JavaScript você vai ver que você pode fazer isso com estruturas chamado S e elas aqui é uma forma mais

simples e mais reduzida de você fazer mas seria equivalente a você ter uma condição então feito isso

pessoal terminei a minha função é pra testar eu vou colocar console coloque.

Resultado passa na nota 7 então resultado 7 pontos é maior do que 7 então ele vai imprimir aprovado

C no segundo cenário passa a nota menor do que 7 então.

Resultado o valor 6 pontos 7 executado vai ser reprovado.

Note que isso aqui é expressão Se eu quiser separar aqui eu posso por exemplo criar uma constante sei

lá status recebe isso aqui.

Então a resposta de um operador ternário é retornar dos dois valores e você pode inclusive armazenar

é uma constante como você também pode nesse caso retornar como resultado dessa função.

Então só pra deixar claro o operador ternário composto por três partes a primeira parte é uma expressão

que vai retornar sempre verdadeiro ou falso.

Você coloca depois a interrogação a primeira parte vai ser retornado a expressão verdadeira dois pontos

a segunda parte que será retornado caso a expressão que você colocou na primeira parte seja falso tranquilo

e bem fácil um operador super cobertura e mais se você olhar por exemplo uma função Hello junto com

o operador ternário fica tão curto que às vezes pode causar algum tipo de estranheza na hora de ler

o código mas depois de um tempo você se acostuma tanto com ternário como com funções Hello.

Acredito que você olhar para isso já vai ter de cara uma ciência do que se trata isso mas você quisesse

por exemplo converter isso para uma função ainda mais concorrido você poderia fazer dessa forma que

funcionaria da mesma forma sem problema nenhum.

Certo Eu vou colocar da forma original como eu planejei e o resultado vai dar primeiro aprovado em segundo

reprovado como a gente já viu anteriormente espero na próxima.
*/