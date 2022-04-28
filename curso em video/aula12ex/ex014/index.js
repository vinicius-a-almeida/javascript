function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var hora = 19
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >=0 && hora < 12){
        //bom dia
        img.src = 'manha.jpg'
        document.body.style.background = '#cf7c2e'
    }else if (hora >= 12 && hora < 18){
        //boa tarde
        img.src = 'tarde.jpg'
        document.body.style.background = '#e38353'
    }else{
        //boa noite
        img.src = 'noite.jpg'
        document.body.style.background = '#302840'
    }
}
