function verificar(){
    var ano = window.document.getElementById("iano")
    var data = new Date()
    var anoAtual = data.getFullYear()
    var idade = anoAtual - Number(ano.value) 
    var sex = window.document.getElementsByTagName("redsex")
    var foto = window.document.getElementById("foto")
    var genero = ''
    
    foto.innerHTML=`A idade é ${idade} anos <b>`

    if (ano.value.length == 0 || ano.value > anoAtual){
        window.alert("Digite os dados corretamente!")

    } else if (sex[0].checked){
        if (idade < 10){
            foto.innerHTML+="Voce é Jovem"
        }
        //Jovem

    }
}