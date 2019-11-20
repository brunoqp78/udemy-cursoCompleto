// serve para o sistema todo
// $ é a referencia ao jquery
import $ from 'jquery'

//função para resolver o problema de um html dentro de outro
const loadHtmlSuccessCallbacks = []

export function onLoadHtmlSuccess(callback) {
    if(!loadHtmlSuccessCallbacks.includes(callback)) {
        loadHtmlSuccessCallbacks.push(callback)
    }
}

// essa função irá ler todos os atributos wm-include

function loadIncludes(parent) {
    // se não tiver superior, está no body
    if(!parent) parent = 'body'
    //procure dentro do pai, aqueles que tenham a propriedade wm-include
    $(parent).find('[wm-include]').each(function(i, e) {
        // para cada atributo pegue a sua url, considenrando que há url
        const url = $(e).attr('wm-include')
        $.ajax({
            url,
            //caso tenha sucesso
            success(data) {
                $(e).html(data)
                //exclua para evitar uma nova interpretação
                $(e).removeAttr('wm-include')
                // chamando as html internas e execuntando
                loadHtmlSuccessCallbacks.forEach(
                    callback => callback(data))
                //permite a execução recursiva em toda a hierarquia de tags
                loadIncludes(e)
            }
        })
    })
}

//inicia uma vez o carregamento de includes
loadIncludes()