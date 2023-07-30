/* Condições Aninhadas:

  Condição composta de if e else só que com mais de um if e else, criando uma lógica condicional.  

if(condição 1){
    bloco 1
} else{
    if(condição 2){
        bloco 2
    } else{
        bloco 3
    }
}

*/
var idade = 80

console.log(`Você tem ${idade} anos.`)

if(idade < 16){
    console.log("Não vota")
} else if(idade< 18 || idade > 65){
    console.log("Voto Opcional")
} else {
    console.log("Voto Obrigatório")
}