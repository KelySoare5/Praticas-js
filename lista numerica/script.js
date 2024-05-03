var num = document.getElementById("inum")
var lista = document.getElementById("listaNum")
var res = document.getElementById("res")
let lista_numerica = []

// Essa função verifica os valores entre 1 a 100
function verificandoValores(n){
    if(Number(n) >=1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}
// Essa função verifica se o numero pertence ou nao a lista
function numeroNaLista(numero, lista) {
    if (lista.indexOf(Number(numero)) != -1){
        return true
    } else {
        return false
    }
}
function AdcionarNumero(){

    if (verificandoValores(num.value) && !numeroNaLista(num.value, lista_numerica)){
        // alert("Tudo Ok!!")
        lista_numerica.push(Number(num.value)) // adicionar numero na lista
        var opcao = document.createElement("option") // criando apções
        lista.appendChild(opcao)
        // opcao.text = lista_numerica
        opcao.text = num.value
        res.innerHTML = ""

    } else {
        alert("Valor invalido ou encontrado na lista")   
    } 
    num.value = ""
    num.focus()
}

function finalizar(){
    if (lista.length == 0){
        alert("Caixa vazia! Adicione numeros")
    } else{
        var maior = lista_numerica[0]
        var menor = lista_numerica[0]        
        for (var pos in lista_numerica){
            if (lista_numerica[pos] > maior)
                maior = lista_numerica[pos]
            
            if (lista_numerica[pos] < menor)
                menor = lista_numerica[pos]
            
        }
        res.innerHTML= `<p>[${lista_numerica}]</p>`
        res.innerHTML += `<p>Foram registrados ${lista_numerica.length} numeros</p>`
        res.innerHTML += `<p>Maior valor adicionado foi ${maior}</p>`
        res.innerHTML += `<p> O menor valor adicionado foi ${menor}</p>`

        
    }
}