function contar(){
    //pegando do html
    var i = document.getElementById('inicio')
    var f = document.getElementById('fim')
    var p = document.getElementById('passo')
    var res = document.getElementById('res')
    //convertendo para o tipe number
    var inicio = Number(i.value)
    var fim = Number(f.value)
    var passo = Number(p.value)

    if (inicio <5){
        alert("Digite um numero e vamos contar!")
    } else{
        res.innerHTML=('Numero digitado')
    }
}