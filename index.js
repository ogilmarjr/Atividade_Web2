document.getElementById("jogador").onclick = function(){
    r = prompt("Para você, qual o maior jogador da história?")

    if (r == "pelé" || r == "pele" || r == "Pelé"){
        alert("VOCÊ ACERTOU, É O REI")
    }else{
        alert("Você tá errado, entende?")
    }
}