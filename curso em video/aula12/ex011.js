var idade = 12
console.log(`Você tem ${idade} anos.`)
if (idade >= 18){
    console.log('vota')
} else if (idade < 18 || idade >= 65){
    console.log('voto opcional')
} else{
    console.log('não vota')
}