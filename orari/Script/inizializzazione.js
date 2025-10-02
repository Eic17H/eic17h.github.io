function init(){
    let orar = document.getElementById("col-Orario")
    for(let i = 8; i <= 19; i++){
        orar.innerHTML += "<div class=\"lezione noshadow aula\" style=\"height:"+cinqueMinuti*12+"%; max-height:"+cinqueMinuti*12+"%; background-color: #00000000;\">"+"<div class=\"orasingola\">"+String(i).padStart(2, '0')+"</div>"+"</div>"
    }
    faiPulsantiGiorni()
    loadDataOggi()
}

function getCookie(){
    faiColonne()
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookieArrayString = decodedCookie.split("; ")
    // Ha un array del tipo "nome=bool"
    // Separa con =, quindi "nome" va in [0] e "bool" va in [1]
    // Se [1] è false, allora la colonna di [0] va spenta
    for(let i=0; i<cookieArrayString.length; i++){
        if(cookieArrayString[i].split("=")[1] == "false")
            checkboxesHideShow(cookieArrayString[i].split("=")[0])
        document.cookie = cookieArrayString[i].split("=")[0] + "=" + cookieArrayString[i].split("=")[1] + ";" + "expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/"
    }
}

function loadDataOggi(){
    getCookie();
    let d = new Date();
    switch(d.getDay()){
        case 2: loadData("Martedì");
        break;
        case 3: loadData("Mercoledì");
        break;
        case 4: loadData("Giovedì");
        break;
        case 5: loadData("Venerdì");
        break;
        default: loadData("Lunedì");
        break;
    }
}

function faiColonne(){
    // TODO: fare le colonne in automatico capendole dal file dei dati
    // TODO: far decidere all'utente (e salvare in un cookie) un ordine custom
    faiColonna("Lorenzo")
    faiColonna("Alessio")
    faiColonna("Swami")
    faiColonna("Giacomo")
    faiColonna("Zanzu")
    faiColonna("Vargiu")
    //faiColonna("Sara")
    //faiColonna("Tommaso")
    //faiColonna("Andry")
}