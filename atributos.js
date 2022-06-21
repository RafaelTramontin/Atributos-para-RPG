function rolagem(){
    var sys = document.getElementsByName("rad")
    var res = window.document.querySelector("div#res")
    var atributos = []
    if(sys[0].checked){
        document.body.style.backgroundColor = "darkred"
        do{
            var min = 0
            for(c=0;c<6;c++){
                let rola = []
                for(r=0;r<4;r++){
                    rola[r] = Math.floor(Math.random() * 6 + 1)
                }
                rola.sort()
                atributos[c] = rola[1] + rola[2] + rola[3]
            }
            for(let i in atributos) {
                min += atributos[i]
            }
        } while (min < 78)
    } else if(sys[1].checked){
        document.body.style.backgroundColor = "darkgreen"
        do{
            var min = 0
            for(c=0;c<7;c++){
                let rola = []
                for(r=0;r<4;r++){
                    rola[r] = Math.floor(Math.random() * 6 + 1)
                }
                rola.sort()
                atributos[c] = rola[1] + rola[2] + rola[3]
            }
            for(let i in atributos) {
                min += atributos[i]
            }
        } while (min < 85)                
    }else if(sys[2].checked){
        document.body.style.backgroundColor = "brown"
        do{
            var min = 0
            for(c=0;c<6;c++){
                let rola = []
                for(r=0;r<4;r++){
                    rola[r] = Math.floor(Math.random() * 6 + 1)
                }
                rola.sort()
                atributos[c] = rola[1] + rola[2] + rola[3]
            }
            for(let i in atributos) {
                min += atributos[i]
            }
            atributos.sort((a,b) => a-b)
        } while (atributos[0] < 8)                
    }else if(sys[3].checked){
        document.body.style.backgroundColor = "darkgoldenrod"
        do{
            var min = 0
            for(c=0;c<6;c++){
                let rola = []
                for(r=0;r<4;r++){
                    rola[r] = Math.floor(Math.random() * 6 + 1)
                }
                rola.sort()
                atributos[c] = rola[1] + rola[2] + rola[3]
            }
            for(let i in atributos) {
                min += atributos[i]
            }
        } while (min < 66 || atributos[5] < 13)                
    }
    atributos.sort((a,b) => a-b)
    res.innerHTML = `Atributos Calculados: </br> ${atributos}`
}