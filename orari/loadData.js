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
        document.cookie = cookieArrayString[i].split("=")[0] + "=" + cookieArrayString[i].split("=")[1] + ";" + "expires=Fri, 31 Dec 9999 23:59:59 GMT"
    }
}

function loadDataOggi(){
    getCookie();
    let d = new Date();
    console.log("Giorno della settimana: "+d.getDay())
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

function loadData(oggi){
    // Ok questa cosa funziona per leggere il nome dei campi dalla stringa
    let datiRaw = getDati()
    console.log("datiRaw:")
    console.log(datiRaw)
    let g = document.getElementById("giornoSettimana")
    g.innerHTML = oggi.charAt(0) + oggi.charAt(1)
    console.log("Indicatore giorno settimana: " + g.innerHTML);
    let dati = {}
    let obj = {}
    for(i in datiRaw){
        let x = document.getElementById("col-" + datiRaw[i].persona)
        x.innerHTML = ""
        dati[datiRaw[i].giorno] = {}
    }
    for(i in datiRaw){
        dati[datiRaw[i].giorno][datiRaw[i].persona] = []
    }
    console.log("dati:")
    console.log(dati)
    for(i in datiRaw){
        // Copiamo i dati da datiRaw a obj
        obj = {
            persona: datiRaw[i].persona,
            materia: datiRaw[i].materia,
            aula: datiRaw[i].aula,
            inizio: datiRaw[i].inizio,
            fine: datiRaw[i].fine
        }
        // Aggiungiamo obj all'array
        dati[datiRaw[i].giorno][datiRaw[i].persona].push(obj)
    }
    // Ordiniamo le lezioni per orario di inizio
    for(i in dati) for(j in dati[i]) dati[i][j].sort((a,b) => (a.inizio-b.inizio))
    for(i in dati[oggi]) leggiPersona(dati[oggi][i])
}

function leggiPersona(persona){
    let finePrec = oraInizio
    for(let i=0; i<persona.length; i++){
        // Se c'è tempo libero, aggiungi
        if(persona[i].inizio != finePrec){  
            console.log(persona[i])
            aggiungiVuoto(finePrec, persona[i].inizio, persona[i].persona)
        }
        // E poi aggiungo la lezione vera e propria
        aggiungiLezione(persona[i])
        finePrec = persona[i].fine
    }
}