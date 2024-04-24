function gerarTabuada(){
    var n = document.getElementById("num")
    var b = document.getElementById("tabuada")
    var operadores = document.getElementsByName("operadores")
    var op_tela_menor = document.getElementById("opera")


    //Caixa vazia
    if (n.value.length == 0){
        alert("Por favor, digite um numero!")
        
    } 
    // Numero maior que zero
    else{
        var num = Number(n.value)
        b.innerHTML = " "
        if (window.matchMedia('(max-width: 992px)').matches) {
            var op = op_tela_menor.value
            for (var c = 1; c <= 10; c++){
                var opcoes_tela_menor = document.createElement('option')
                switch (op){
                    case "adc":
                        var resultado_tela_menor = num + c
                        opcoes_tela_menor.text =  `${num} + ${c} = ${resultado_tela_menor}`
                        break

                    case "sub":
                        var resultado_tela_menor = num - c
                        opcoes_tela_menor.text =  `${num} - ${c} = ${resultado_tela_menor}`
                        b.appendChild(opcoes_tela_menor);
                        break

                    case "mul":
                        var resultado_tela_menor = num * c
                        opcoes_tela_menor.text =  `${num} x ${c} = ${resultado_tela_menor}`
                        break

                    case "divi":
                        var resultado_tela_menor = num / c
                        opcoes_tela_menor.text =  `${num} / ${c} = ${formatarNumero(resultado_tela_menor)}`
                        break

                    default:
                        opcao.text = "Operação desconhecida";
                        break;
                }
                b.appendChild(opcoes_tela_menor);

            }
            // Executa o código para telas menores que 992px
            // alert('A largura da tela é menor que 992px');
            // Coloque aqui as ações que você quer realizar
        } else {
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
        // var num = Number(n.value)
        // b.innerHTML = " "
        // Adição
        // if (operadores[0].checked){ 

        //     for (var c = 1; c<=10; c++){
        //         var opcao = document.createElement('option')
        //         var resultado = num + c
        //         opcao.text = `${num} + ${c} = ${resultado}`
        //         b.appendChild(opcao)
        //     } 
        // }
        // //Subtração
        // else if (operadores[1].checked){ 
        //     for (var c = 1; c <= 10; c++){
        //         var opcao = document.createElement('option')
        //         var resultado = num - c
        //         opcao.text = `${num} - ${c} = ${resultado}`
        //         b.appendChild(opcao)
        //     }
        // }
        // //Multiplicação
        // else if (operadores[2].checked){ 
        //     for (var c = 1; c <= 10; c++){
        //         var opcao = document.createElement('option')
        //         var resultado = num * c
        //         opcao.text = `${num} * ${c} = ${resultado}`
        //         b.appendChild(opcao)
        //     }
        // }
        // //Divisão
        // else if (operadores[3].checked){ 
        //     for (var c = 1; c <= 10; c++){
        //         var opcao = document.createElement('option')
        //         var resultado = num / c
        //         opcao.text = `${num} / ${c} = ${formatarNumero(resultado)}`
        //         b.appendChild(opcao)
        //     }
        // }
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
