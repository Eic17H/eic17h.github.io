function init(){
    let orar = document.getElementById("col-Orario")
    for(let i = 8; i <= 19; i++){
        orar.innerHTML += "<div class=\"lezione noshadow aula\" style=\"height:"+cinqueMinuti*12+"%; max-height:"+cinqueMinuti*12+"%; background-color: #00000000;\">"+String(i).padStart(2, '0')+"</div>"
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
    
    let b = document.getElementById("button-"+oggi)
    let a = document.getElementsByClassName("button-giorno")

    let dati={}, obj={}, i, j, x

    console.log("ccccccc")
    for(i = 0; i<a.length; i++) if(a[i].classList.contains("selezionato")) a[i].classList.remove("selezionato")
    b.classList.add("selezionato")

    // Lettura dati
    let datiRaw = getDati()
    console.log("datiRaw:")
    console.log(datiRaw)

    // Svuotiamo tutte le colonne a quanto pare
    // Creiamo un oggetto vuoto per ogni giorno della settimana
    for(i in datiRaw){
        x = document.getElementById("col-" + datiRaw[i].persona)
        x.innerHTML = ""
        dati[datiRaw[i].giorno] = {}
    }
    // Per ogni giorno della settimana, creiamo un array vuoto per ogni persona
    for(i in datiRaw){
        dati[datiRaw[i].giorno][datiRaw[i].persona] = []
    }

    // Adesso convertiamo i dati nel formato che ci serve
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
    // La prima lezione (o vuoto) parte dall'inizio
    let finePrec = oraInizio
    
    // Scorre l'array delle lezioni
    for(let i=0; i<persona.length; i++){
        // Se c'è tempo libero, aggiungi un vuoto
        if(persona[i].inizio != finePrec){  
            console.log(persona[i])
            aggiungiVuoto(finePrec, persona[i].inizio, persona[i].persona)
        }

        // E poi aggiungo la lezione vera e propria
        aggiungiLezione(persona[i])

        // La prossima parte dalla fine di questa
        finePrec = persona[i].fine
    }
}