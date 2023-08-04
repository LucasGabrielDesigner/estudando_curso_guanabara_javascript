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
                img.setAttribute("src", "criança_homem.png") 
            }else if(idade < 18){
                //Jovem
                img.setAttribute("src", "adolescente_homem.png")
            }else if(idade < 65){
                //Adulto
                img.setAttribute("src", "adulto_homem.png")
            }else{
                //Olavo de Carvalho
                img.setAttribute("src", "Olavo.png")
            } 
            
        } if(fsex[1].checked){
            genero = "Mulher"
            if(idade < 10){
                //Criança
                img.setAttribute("src", "criança_mulher.png") 
            }else if(idade < 18){
                //Jovem
                img.setAttribute("src", "adolescente_mulher.png")
            }else if(idade < 65){
                //Adulto
                img.setAttribute("src", "adulto_mulher.png")
            }else{
                //Olavo de Carvalho
                img.setAttribute("src", "Olavo.png")}
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.style.textAlign = "center"
        res.appendChild(img)
    }
}}