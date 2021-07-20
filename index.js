document.getElementById("jogador").onclick = function(){
    r = prompt("Para você, qual o maior jogador da história?")

    if (r == "pelé" || r == "pele" || r == "Pelé"){
        alert("VOCÊ ACERTOU, É O REI")
    }else{
        alert("Você tá errado, entende?")
    }
}


function f (){

    let today = new Date()
    let worldCup = new Date(2022,11,21,13,0,0)
    let hour = worldCup.getHours() - today.getHours()
    let minute = worldCup.getMinutes() - today.getMinutes()
    let second = worldCup.getSeconds() - today.getSeconds()

    if (second < 0) {
        second = 60 + second
    }

    if (minute < 0) {
        minute = 60 + minute
    }

    if (hour < 0) {
        hour = 24 + hour
    }
    

    document.getElementById("copa").innerHTML = `Faltam ${Math.round((worldCup - today)/(1000 * 3600 * 24))} 
    dias,  ${hour} horas, ${minute} minutos, e ${second} segundos para a copa do mundo 2022`
}

setInterval(f,1000)