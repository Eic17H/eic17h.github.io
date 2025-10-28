function loadData(oggi){
    // Ok questa cosa funziona per leggere il nome dei campi dalla stringa

    let colonne = document.getElementsByClassName("una-colonna")
    for(let i=0; i<colonne.length; i++){
        if(colonne[i].classList.contains("occupato")) colonne[i].classList.remove("occupato");
    }
    
    let b = document.getElementById("button-"+oggi)
    let a = document.getElementsByClassName("button-giorno")

    let dati={}, obj={}, i, j, x

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
        if(x != null) x.innerHTML = ""
        dati[datiRaw[i].giorno] = {}
    }
    // Per ogni giorno della settimana, creiamo un array vuoto per ogni persona
    for(i in datiRaw){
        dati[datiRaw[i].giorno][datiRaw[i].persona] = []
    }

    // Adesso convertiamo i dati nel formato che ci serve
    for(i in datiRaw){
        // Copiamo i dati da datiRaw a obj
        obj = {
            persona: datiRaw[i].persona,
            materia: datiRaw[i].materia,
            aula: datiRaw[i].aula,
            edificio: datiRaw[i].edificio,
            inizio: oraInt(datiRaw[i].inizio),
            fine: oraInt(datiRaw[i].fine),
            giorno: datiRaw[i].giorno,
            opzionale: datiRaw[i].opzionale
        }
        // Aggiungiamo obj all'array
        dati[datiRaw[i].giorno][datiRaw[i].persona].push(obj)
    }
    console.log("dati:")
    console.log(dati)

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
            aggiungiVuoto(finePrec, persona[i].inizio, persona[i].persona)
        }

        // E poi aggiungo la lezione vera e propria
        aggiungiLezione(persona[i])

        // La prossima parte dalla fine di questa
        finePrec = persona[i].fine
    }
}