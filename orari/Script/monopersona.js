// è orrendo ma funziona

function faiPulsantiPersone(){
    let persone = []
    let y = document.getElementById("titolo-persona")
    y.innerHTML = `<div class="titolopersona">${monopersona}</div>`
}

function loadPersona(persona) {
    document.getElementById("pulsanti-giorni").style.display="none"
    document.getElementById("titolo-persona").style.display="inline"
    document.getElementById("pulsante-opzioni").style.display="none"
    // Ok questa cosa funziona per leggere il nome dei campi dalla stringa

    let colonne = document.getElementsByClassName("una-colonna")
    for(let i=0; i<colonne.length; i++){
        if(colonne[i].classList.contains("occupato")) colonne[i].classList.remove("occupato");
    }
    
    //let b = document.getElementById("button-"+persona)
    let a = document.getElementsByClassName("button-giorno")

    let dati={}, obj={}, i, j, x

    for(i = 0; i<a.length; i++) if(a[i].classList.contains("selezionato")) a[i].classList.remove("selezionato")
    //b.classList.add("selezionato")

    // Lettura dati
    let datiRaw = getDati()
    console.log("datiRaw:")
    console.log(datiRaw)

    // Svuotiamo tutte le colonne a quanto pare
    // Creiamo un oggetto vuoto per ogni giorno della settimana
    for(i in datiRaw){
        x = document.getElementById("col-" + datiRaw[i].giorno)
        if(x != null) x.innerHTML = ""
        dati[datiRaw[i].persona] = {}
    }
    // Per ogni giorno della settimana, creiamo un array vuoto per ogni persona
    for(i in datiRaw){
        dati[datiRaw[i].persona][datiRaw[i].giorno] = []
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
        // Sezione dei cambiamenti momentanei
        // if (obj.aula == "Aula Magna di Matematica" && obj.edificio == "Palazzo delle Scienze") obj.aula = obj.edificio = "Aula Costa"
        // Aggiungiamo obj all'array
        dati[datiRaw[i].persona][datiRaw[i].giorno].push(obj)
    }
    console.log("dati:")
    console.log(dati)

    // Ordiniamo le lezioni per orario di inizio
    for(i in dati) for(j in dati[i]) dati[i][j].sort((a,b) => (a.inizio-b.inizio))
    for(i in dati[persona]) leggiGiorno(dati[persona][i])
}

function leggiGiorno(giorno) {
    // La prima lezione (o vuoto) parte dall'inizio
    let finePrec = oraInizio
    
    // Scorre l'array delle lezioni
    for(let i=0; i<giorno.length; i++){
        // Se c'è tempo libero, aggiungi un vuoto
        if(giorno[i].inizio != finePrec){  
            aggiungiVuoto(finePrec, giorno[i].inizio, giorno[i].giorno)
        }

        // E poi aggiungo la lezione vera e propria
        aggiungiLezioneGiorno(giorno[i])

        // La prossima parte dalla fine di questa
        finePrec = giorno[i].fine
    }
}

function aggiungiLezioneGiorno(lezione){
    let d = new Date()
    let adesso = d.getHours()*12+d.getMinutes()/5
    let oggi = d.getDay()
    switch(oggi){
        case 1: oggi = "Lunedì"; break;
        case 2: oggi = "Martedì"; break;
        case 3: oggi = "Mercoledì"; break;
        case 4: oggi = "Giovedì"; break;
        case 5: oggi = "Venerdì"; break;
        default: oggi = ""; break;
    }
    let str = ""
    // <div>
    str += "<div class=\""
        str += "lezione"
        if(lezione.fine - lezione.inizio <= 15) str += " lezioneCorta"
        if(lezione.materia == "") str += " noshadow"
        if(lezione.inizio<=adesso && lezione.fine>=adesso && oggi==lezione.giorno) str += " corrente"
        if(lezione.opzionale == true) str += " lezioneOpzionale"
        str += "\" "
    str += "style=\""
        str += "height: "
            str += (lezione.fine - lezione.inizio)*cinqueMinuti + "%; "
        str += "max-height: "
            str += (lezione.fine - lezione.inizio)*cinqueMinuti + "%; "
        if(!lezione.opzionale) {
            str += "background-color: "
                str += colore(lezione.edificio, lezione.aula)
        } else {
            str += "border-color: "
                str += colore(lezione.edificio, lezione.aula)
        }
        str += "\""
    str += "title=\""
        if(lezione.edificio) str += lezione.edificio
        str += "\""
    str += ">"

        // <span>
        if(lezione.opzionale){
            str += "<span class=\"schermogrande\">"
                str += "<span class =\"messaggioLezioneOpzionale\">"+"(Occasionale)"+"</span>"
                str += "<br style=\"line-height: 200%;\">"
            str += "</span>"
        }

        // <span>
        str += "<span class=\"aula\">"
            str += "<span class =\"schermogrande\">"+lezione.aula+"</span>"
            str += "<span class =\"schermopiccolo\">"+abbreviaAule(lezione.aula)+"</span>"
        str += "</span>"
        str += "<br>"

        // <span>
        str += "<span class=\"materia\">"
            str += "<span class =\"schermogrande\">"+lezione.materia+"</span>"
            str += "<span class =\"schermopiccolo\">"+abbreviaMaterie(lezione.materia)+"</span>"
        str += "</span>"
        str += "<br>"

        // <span>
        str += "<span class=\"orario\">"
        str += orariox(lezione)
        str += "</span>"
    
    str += "</div>\n"
    let x = document.getElementById("col-" + lezione.giorno)
    if(x == null) return
    x.innerHTML += str
}

function faiColonnaMonopersona(nome){
    let d = new Date()
    let oggi = d.getDay()
    switch(oggi){
        case 1: oggi = "Lunedì"; break;
        case 2: oggi = "Martedì"; break;
        case 3: oggi = "Mercoledì"; break;
        case 4: oggi = "Giovedì"; break;
        case 5: oggi = "Venerdì"; break;
        default: oggi = ""; break;
    }
    let selezionato = "";
    if (nome == oggi) selezionato = " selezionato";
    let nomeNew = nome.substring(0, 3) + "."
    let x = document.getElementById("tutte-le-colonne")
    x.innerHTML += ""
        + "<div class=\"una-colonna "+nome+selezionato+"\">"
            + "<div class=\"testa-colonna schermogrande\"><p class=\"nome-col\">"+nome+"</p></div>"
            + "<div class=\"testa-colonna schermopiccolo\"><p class=\"nome-col\">"+nomeNew+"</p></div>"
            + "<div class=\"corpo-colonna\" id=\"col-"+nome+"\">"
            + "</div>"
        + "</div>"
        + "<div class=\"divisore-vert "+nome+"\"></div>"
    
    // let y = document.getElementById("pulsanti-persone")
    //y.innerHTML += "<button onclick=\"checkboxesHideShow('"+nome+"')\">"+"<span class=\"schermogrande\">"+nome+"</span><span class=\"schermopiccolo\">"+nomeNew+"</span></button>"
}

function faiColonneMonopersona(){
    faiColonnaMonopersona("Lunedì")
    faiColonnaMonopersona("Martedì")
    faiColonnaMonopersona("Mercoledì")
    faiColonnaMonopersona("Giovedì")
    faiColonnaMonopersona("Venerdì")
}