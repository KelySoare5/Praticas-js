function gerarTabuada(){
    var n = document.getElementById("num")
    var b = document.getElementById("tabuada")

    var num = Number(n.value)

    if (num == 0){
        alert("Numero invalido")
    } else{
        var c = 0
        while(c<=10){
            var op = document.createElement('option')
            op.text = `${num} x ${c} = ${num*c}`
            b.appendChild(op)
        }
    }
}