function carregar(){
    var msg = window.document.getElementById("msg")
    var foto = window.document.getElementById("foto")
    var agora = new Date()
    var hora = agora.getHours()
    //var hora = 19
    msg.innerHTML = `Agora são ${hora} horas <br>`

    if (hora <12){
        msg.innerHTML+="Bom dia!"
        foto.src = 'img/fotomanha.jpg'
        document.body.style.background="#EBB62F"

    } else if (hora <18){
        msg.innerHTML+="Boa tarde!"
        foto.src = "img/fototarde.jpg"
        document.body.style.background="#EB7B43"


    } else {
        msg.innerHTML+="Boa noite!"
        foto.src = "img/fotonoite.jpg"
        document.body.style.background="#2986EB"
    }

}