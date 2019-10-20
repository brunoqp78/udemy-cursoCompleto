//utilizar módulos de terceiros
// a gente utiliza o gerenciador de pacotes do node
// npm
// executar no terminal
// instalar um modulo no projeto local
// npm i lodash // para instalar o nodash
// cria a pasta node_modules aqui no VSCode
// criar o arquivo .gitignore responsável em atualizar o git com pastas e arquivos a não serem considerados.
// inserir uma linha com cada nome de pasta/arquivo a não ter backup no .gitignore

// importo todos os modulos de lodash
const _ = require('lodash')
setInterval(() => console.log(_.random(1,1000)),2000)

// para instalar um modulo de modo global
// no linux e mac use o sudo
// sudo npm i -g nodemon
// esse módulo externo permite executar dinamicamente, atualizando a execução com novas modificações.
// executar o modulo .js com o nodemon
// vá a pasta desejada cd 8-Node
// execute o .js: nodemon 122-usandoModulosTerceiros.js
// pode modificar que ele atualiza automatico a execução

