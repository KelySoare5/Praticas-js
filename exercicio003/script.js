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

    if (inicio == "" || fim == "" || passo == ""){
        res.innerHTML=("Digite um numero e vamos contar!")
    }
    
    else if (inicio < fim){
        for (var c = inicio; c <= fim; c+= passo){
            res.innerHTML+= `${c} \u{1F449} `

        }    
    } else{
        for (var c = inicio; c >= fim; c-= passo){
            res.innerHTML+= `${c} \u{1F449} ` 
        }
    }
    res.innerHTML+= `\u{1F3C1} ` 

}


function regarregarPagina(){
    location.reload()
}