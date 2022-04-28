var contador = 0
var res = 0

function adicionar(){
    var num1 = Number(document.getElementById('valor').value)
    document.getElementById('valor').value = '' 
    res = num1 + res
    contador++
    media = res / contador
    var div = document.getElementById('res')
    div.innerHTML = (`A Média das notas é ${media}`)
}