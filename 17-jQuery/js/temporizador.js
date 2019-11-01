(function ($) {
    $.fn.temporizador = function (opcoes) {
        const opcoesFinais = $.extend({ // quando não passa pega esses valores
            mensagem: 'Em breve!', // valores padrão
            horario: '23:59:59' // valor padrão
        }, opcoes)

        // os elementos span que irão armazenar a hora
        const horaDezena = $('<span class="digito">').html('0')
        const horaUnidade = $('<span class="digito">').html('0')
        const minutoDezena = $('<span class="digito">').html('0')
        const minutoUnidade = $('<span class="digito">').html('0')
        const segundoDezena = $('<span class="digito">').html('0')
        const segundoUnidade = $('<span class="digito">').html('0')

        // os elementos span que irão fazer a separação entre hora, minuto e segundo
        const separadorHora = $('<span class="separador">').html(':')
        const separadorMinuto = $('<span class="separador">').html(':')
        // elemento que irá armazenar a mensagem
        const mensagem = $('<div class="mensagem">').html(opcoesFinais.mensagem)//pega a opção ou seu padrão

        //criando a classe temporizador
        $(this).addClass('temporizador')
        //adicionando todos os elementos criados
        $(this).append(horaDezena, horaUnidade, separadorHora,
            minutoDezena, minutoUnidade, separadorMinuto,
            segundoDezena, segundoUnidade, mensagem)

        // regex que irá tratar a hora, capturando todos os números '18:05:30'    
        const regex = new RegExp(/(\d\d):(\d\d):(\d\d)/)
        // tem os valores individuais de hora, minuto e segundo
        const horarioAlvo = regex.exec(opcoesFinais.horario)
        // console.log(horarioAlvo)

        const alvo = new Date()
        alvo.setHours(horarioAlvo[1]) // acessa as horas
        alvo.setMinutes(horarioAlvo[2]) // acessa os minutos
        alvo.setSeconds(horarioAlvo[3]) // acessa os segundos

        let temporizador = setInterval(() => {
            const agora = new Date()
            const diferencaEmMili = alvo.getTime() - agora.getTime()
            if (diferencaEmMili >= 0) {
                // diferenca será tipo uma matriz, primeira linha hora, segunda miutos e terceiro segundos
                const diferenca = regex.exec(new Date(diferencaEmMili).toISOString())
                //console.log(diferenca)

                horaDezena.html(diferenca[1][0])
                horaUnidade.html(diferenca[1][1])
                minutoDezena.html(diferenca[2][0])
                minutoUnidade.html(diferenca[2][1])
                segundoDezena.html(diferenca[3][0])
                segundoUnidade.html(diferenca[3][1])
            } else {
                clearInterval(temporizador)
            }
        }, 1000)
        
        return this
    }
})(jQuery)