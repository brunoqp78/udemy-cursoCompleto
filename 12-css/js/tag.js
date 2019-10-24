const colors = {
    p: '#3fffaa',
    div: '#4aaa24',
    span: '#542fff',
    section: '#642424',
    ul: '#7fff24',
    ol: '#892424',
    header: '#942424',
    nav: '#a42424',
    main: '#b42424',
    footer: '#c42424',
    form: '#d42424',
    body: '#ffa424',
    padrao: '#616161',
    get(tag){
        return this[tag] ? this[tag] : this.padrao
    }
}

document.querySelectorAll('.tag').forEach(box=>{
    // box é o elemento e o tag name é o nome daquele elemento
    const tagName = box.tagName.toLowerCase()
    box.style.borderColor = colors.get(tagName)
    if(!box.classList.contains('noLabel')){
        // criar uma label
        const label = document.createElement('label')
        label.style.backgroundColor = colors.get(tagName)
        // define o conteúdo do label
        label.innerHTML = tagName 
        // insere no elemento atual
        box.insertBefore(label, box.childNodes[0])
    }

})

