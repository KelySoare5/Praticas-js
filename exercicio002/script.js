function verificar(){
    var ano = window.document.getElementById("iano") //txtano
    var data = new Date()
    var anoAtual = data.getFullYear() //ano
    var idade = anoAtual - Number(ano.value) //idade
    var sex = window.document.getElementsByName("redsex") //fsex
    var foto = window.document.getElementById("foto") //res

    foto.style.textAlign="center" //centralizar texto
    
    foto.innerHTML=`A idade é ${idade} anos <br>`

    if (ano.value.length == 0 || ano.value > anoAtual){
        window.alert("Digite os dados corretamente!")

    } else {
        var genero = ""
        var img = document.createElement('img') //criando um tag img no html
        img.setAttribute('id', 'fotopessoa') //id fotopessoa na tag img no html
        if (sex[0].checked){
            genero = "homem"
            if (idade <10){
                //criança
                img.setAttribute('src', 'img/bebe-m.jpg')
            } else if (idade < 21){
                img.setAttribute('src', 'img/jovem-m.jpg')
                //jovem
            } else if (idade < 50){
                img.setAttribute('src', 'img/adulto-m.jpg')
                //adulto
            } else {
                img.setAttribute('src', 'img/idoso-m.jpg')
                //idoso
            }
        } else if (sex[1].checked){
            genero = "mulher"
            if (idade <10){
                img.setAttribute('src', 'img/bebe-f.jpg')
                //criança
            } else if (idade < 21){
                img.setAttribute('src', 'img/jovem-f.jpg')
                //jovem
            } else if (idade < 50){
                img.setAttribute('src', 'img/adulto-f.jpg')
                //adulto
            } else {
                img.setAttribute('src', 'img/idoso-f.jpg')
                //idoso
            }
        }

        //foto.innerHTML += `Genero marcado foi ${genero}`
        foto.appendChild(img) //add tag img com id fotopessoa


    }
}