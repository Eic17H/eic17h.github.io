function faiPulsantiGiorni(){
    let giorni = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì"]
    let y = document.getElementById("pulsanti-giorni")
    let i, nome, nomeNew
    for(i in giorni){
        nome = giorni[i]
        nomeNew = abbreviaGiorniSettimana(nome)
        y.innerHTML += "<button class=\"button-giorno\" id=\"button-"+nome+"\" onclick=\"loadData('"+nome+"')\">"+"<span class=\"schermogrande\">"+nome+"</span><span class=\"schermopiccolo\">"+nomeNew+"</span></button>"
    }
}

function faiColonna(nome){
    let nomeNew = nome.substring(0, 3) + "."
    let x = document.getElementById("tutte-le-colonne")
    x.innerHTML += ""
        + "<div class=\"una-colonna "+nome+"\">"
            + "<div class=\"testa-colonna schermogrande\"><p class=\"nome-col\">"+nome+"</p></div>"
            + "<div class=\"testa-colonna schermopiccolo\"><p class=\"nome-col\">"+nomeNew+"</p></div>"
            + "<div class=\"corpo-colonna\" id=\"col-"+nome+"\">"
            + "</div>"
        + "</div>"
        + "<div class=\"divisore-vert "+nome+"\"></div>"
    
    let y = document.getElementById("pulsanti-persone")
    y.innerHTML += "<button onclick=\"checkboxesHideShow('"+nome+"')\">"+"<span class=\"schermogrande\">"+nome+"</span><span class=\"schermopiccolo\">"+nomeNew+"</span></button>"
}

function aggiungiLezione(lezione){
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
        if(lezione.materia == "") str += " noshadow"
        if(lezione.inizio<=adesso && lezione.fine>=adesso && oggi==lezione.giorno) str += " corrente"
        str += "\" "
    str += "style=\""
        str += "height: "
            str += (lezione.fine - lezione.inizio)*cinqueMinuti + "%; "
        str += "max-height: "
            str += (lezione.fine - lezione.inizio)*cinqueMinuti + "%; "
        str += "background-color: "
            str += colore(lezione.aula)
        str += "\""
    str += ">"

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
    let x = document.getElementById("col-" + lezione.persona)
    if(x == null) return
    x.innerHTML += str
    if(lezione.inizio<=adesso && lezione.fine>=adesso && oggi==lezione.giorno){
        let h = document.getElementsByClassName("una-colonna "+lezione.persona)
        h[0].classList.add("occupato")
        console.log(h[0])
    }
}

function aggiungiVuoto(inizio, fine, persona){
    let vuoto = {
        fine: fine,
        inizio: inizio,
        aula: "",
        materia: "",
        persona: persona
    }
    aggiungiLezione(vuoto)
}