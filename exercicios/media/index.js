var contador = 0
var res = 0

function adicionar(){
    Number(res)
    console.log(res)
    var num1 = Number(document.getElementById('valor').value)
    document.getElementById('valor').value = ''
    res = num1 + res
    console.log(res)
    contador++
    console.log(contador)
    media = res / contador
    console.log(media) 
    var res = document.getElementById('res')
    res.innerHTML = (`A Média das notas é ${media}`)
}