document.getElementById("bolaMagica").onclick = function(){
    team = 0

        var number = function (){
            n = Math.round(Math.random() * 10000)

            let c = 0
            let d = 0
            let u = 0
            if(n > 999){
                c = n % 1000
                    if (c > 99){
                        d = c % 100
                        team = Math.round(d / 5)  
                    } else{
                        team = Math.round(c / 5) 
                    }
            } else if((n > 99) && (n < 1000)){
                  u = n % 100
                  team = Math.round(u / 5) 
            } else{
                team = Math.round(n / 5)
            }
 
        }
        number()
        switch(team){

            case 1 :
                alert("América - MG")
                break
            case 2: 
                alert("Athletico - PR")
                break
            case 3: 
                alert("Atlético - GO")
                break
            case 4: 
                alert("Atlético - MG")
                break
            case 5: 
                alert("Bahia")
                break
            case 6: 
                alert("Bragantino")
                break
            case 7: 
                alert("Ceará")
                break
            case 8: 
                alert("Chapecoense")
                break
            case 9: 
                alert("Corinthians")
                break
            case 10: 
                alert("Cuiabá")
                break
            case 11: 
                alert("Flamengo")
                break
            case 12: 
                alert("Fluminense")
                break
            case 13: 
                alert("Fortaleza")
                break
            case 14: 
                alert("Grêmio")
                break
            case 15: 
                alert("Internacional")
                break
            case 16: 
                alert("Juventude")
                break
            case 17: 
                alert("Palmeiras")
                break
            case 18: 
                alert("Santos")
                break
            case 19: 
                alert("Sport")
                break
            case 20: 
                alert("São Paulo")
                break
            case 0 :
                alert("São Paulo")
                break                                                                
        }
}

document.getElementById("palmeiras").onclick=function(){
    let result = confirm("O Palmeiras tem mundial?"+ " | OK - SIM" + " | Cancelar - NÃO")
    if(result){
        alert("Isso só pode ser mentira!")
    } else{
        alert("O PALMEIRAS NÃO TEM MUNDIAL!!!!")
    }
    
}