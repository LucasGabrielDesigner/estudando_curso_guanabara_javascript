function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector("div#res")

    if(fano.value.length == 0 || fano.value > ano){
        alert("[ERRO] Verifique os dados ai.Tenta ai de novo fera!")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")

        if(fsex[0].checked){
            genero = "Homem"
            if(idade < 10){
                //Criança 
            }else if(idade < 18){
                //Jovem
            }else if(idade < 65){
                //Adulto
            }else{
                //Olavo de Carvalho
            }
            
        }else if(fsex[1].checked){
            genero = "Mulher"
           
        }
                
            
        
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.style.textAlign = "center"
    }


}

