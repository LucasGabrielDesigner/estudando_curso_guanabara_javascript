function verificar(){
    var data = new Date()
    var ano = data.getFullYear
    var fano = document.getElementById("txtano")
    var res = document.querySelector("div#res")

    if(fano.value.length == 0 || fano.value > ano){
        alert("[ERRO] Verifique os dados ai.Tenta ai de novo fera!")
    } else{
        alert("Tudo certo manolo!")
    }

}