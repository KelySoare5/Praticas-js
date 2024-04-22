function gerarTabuada(){
    var n = document.getElementById("num")
    var b = document.getElementById("tabuada")
    var operadores = document.getElementsByName("operadores")
    //Caixa vazia
    if (n.value.length == 0){
        alert("Por favor, digite um numero!")
        
    } 
    // Numero maior que zero
    else{ 
        var num = Number(n.value)
        b.innerHTML = " "
        // Adição
        if (operadores[0].checked){ 

            for (var c = 1; c<=10; c++){
                var opcao = document.createElement('option')
                var resultado = num + c
                opcao.text = `${num} + ${c} = ${resultado}`
                b.appendChild(opcao)
            } 
        }
        //Subtração
        else if (operadores[1].checked){ 
            for (var c = 1; c <= 10; c++){
                var opcao = document.createElement('option')
                var resultado = num - c
                opcao.text = `${num} - ${c} = ${resultado}`
                b.appendChild(opcao)
            }
        }
        //Multiplicação
        else if (operadores[2].checked){ 
            for (var c = 1; c <= 10; c++){
                var opcao = document.createElement('option')
                var resultado = num * c
                opcao.text = `${num} * ${c} = ${resultado}`
                b.appendChild(opcao)
            }
        }
        //Divisão
        else if (operadores[3].checked){ 
            for (var c = 1; c <= 10; c++){
                var opcao = document.createElement('option')
                var resultado = num / c
                opcao.text = `${num} / ${c} = ${formatarNumero(resultado)}`
                b.appendChild(opcao)
            }
        }
    } 
}

function formatarNumero(num) {
    var partes = num.toString().split("."); // Divide o número em parte inteira e decimal
    if (partes.length > 1 && partes[1].length > 2) { // Verifica se a parte decimal existe e se tem mais de 2 dígitos
        return num.toFixed(2); // Arredonda para duas casas decimais se necessário
    } else {
        return num; // Retorna o número como está se não precisar de arredondamento
    }
}
