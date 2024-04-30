function AdcionarNumero(){

    var num = document.getElementById("inum")
    var lista = document.getElementById("listaNum")

    if (num.value.length == 0 || num.value <= 0 || num.value > 100){
        alert("Valor invalido ou encontrado na lista")
    } else {
        var lista_numerica = [] // criar lista vazia
        // lista.innerText= "" 
        var numero = Number(num.value) //converter em numero
        lista_numerica.push(numero) // adicionar numero na lista
        var opcao = document.createElement("option") // criando apções
        lista.appendChild(opcao)
        opcao.text = lista_numerica
        // if (numero in opcao){
        //     alert("Valor ja existe")
            
        // } else{
        //     opcao.text = numero

        // }
        
    }
}