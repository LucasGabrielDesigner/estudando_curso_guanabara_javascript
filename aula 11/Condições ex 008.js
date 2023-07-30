
/* Desvio condicional é quando o  evento não acontece de forma retilinea. existe condiççoes que precisam
         ser atendida ou não que geram uma ou mais bifurcações. O mais comum é:
         
         if(condição){
            TRUE
         } else{
            FALSE
         }
        Essa condição é uma estrutura de controle muito importante para programação.

        Condição simples:
        if(condição){
         true
        }

            Condição composta:
            if(condição){
                true
            } else{
                false
            }
        

        */

var vel = 100
console.log(`A velocidade so aeu carro é ${vel} km/h`)
 console.log("Dirija sempre usando cinto de segurança!")

 if(vel > 60){
   console.log("Você ultrapassou o limite de velocidade. MULTADO!")
}