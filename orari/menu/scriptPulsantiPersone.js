function usaPulsante(nome) {
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookieArrayString = decodedCookie.split("; ")
    // Ha un array del tipo "nome=bool"
    // Separa con =, quindi "nome" va in [0] e "bool" va in [1]
    // Se [1] è false, allora la colonna di [0] va spenta
    let cuchi
    for(let i=0; i<cookieArrayString.length; i++){
        if(cookieArrayString[i].split("=")[0] == nome){
            if(cookieArrayString[i].split("=")[1] == "true") cuchi = "false"; else cuchi = "true";
            document.cookie = nome + "=" + cuchi + ";" + "expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/"
            coloraPulsante(nome+"="+cuchi)
            return
        }
    }
    document.cookie = nome + "=" + "false   " + ";" + "expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/"
    coloraPulsante(nome+"=false")
}

function coloraPulsante(cookieString) {
    console.log(cookieString)
    if(cookieString.split("=")[1] == "true") document.getElementById("pulsante"+cookieString.split("=")[0]).classList.add("attivo")
    else {
        let x = document.getElementById("pulsante"+cookieString.split("=")[0])
        if(x) x.classList.remove("attivo")
    }
}

function initMenu() {
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookieArrayString = decodedCookie.split("; ")
    let persone = ["Lorenzo", "Alessio", "Swami", "Giacomo", "Zanzu", "Vargiu"]
    for(let i in persone) {
        let nome = persone[i]
        let nomeNew = nome.substring(0, 3) + "."
        let y = document.getElementById("pulsanti-persone")
        y.innerHTML += "<button id=\"pulsante"+nome+"\" onclick=\"usaPulsante('"+nome+"')\">"+nome+"</span></button>"
        coloraPulsante(nome+"=true")
    }
    for(let i=0; i<cookieArrayString.length; i++){
        coloraPulsante(cookieArrayString[i])
    }
}

function resetCookies() {
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookieArrayString = decodedCookie.split("; ")
    for(let i in cookieArrayString) document.cookie = cookieArrayString[i].split('=')[0] + "=" + "true" + ";" + "expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/"
}