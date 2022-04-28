function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERROR] Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'homem'
            if (idade >= 0 && idade < 10){
                //criança-m
                img.setAttribute('src', 'bebe-m.png')
            }else if (idade >= 10 && idade < 21){
                //jovem-m
                img.setAttribute('src', 'jovem-m.png')
            }else if(idade >= 21 && idade < 60){
                //adulto-m
                img.setAttribute('src', 'adulto-m.png')
            }else{
                //idoso-m
                img.setAttribute('src', 'idoso-m.png')
            }
        }else{
            genero = 'mulher'
            if (idade >= 0 && idade < 10){
                //criança-f
                img.setAttribute('src', 'bebe-f.png')
            }else if (idade >= 10 && idade < 21){
                //jovem-f
                img.setAttribute('src', 'jovem-f.png')
            }else if(idade >= 21 && idade < 60){
                //adulto-f
                img.setAttribute('src', 'adulto-f.png')
            }else{
                //idoso-f
                img.setAttribute('src', 'idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}