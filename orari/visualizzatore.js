function faiColonna(nome){
    let x = document.getElementById("tutte-le-colonne")
    x.innerHTML += ""
        + "<div class=\"una-colonna "+nome+"\">"
            + "<div class=\"testa-colonna\"><p class=\"nome-col\">"+nome+"</p></div>"
            + "<div class=\"corpo-colonna\" id=\"col-"+nome+"\">"
            + "</div>"
        + "</div>"
        + "<div class=\"divisore-vert "+nome+"\"></div>"
    
    let y = document.getElementById("pulsanti-persone")
    y.innerHTML += "<button onclick=\"checkboxesHideShow('"+nome+"')\">"+nome+"</button>"
}

function faiColonne(){
    // TODO: fare le colonne in automatico capendole dal file dei dati
    // TODO: far decidere all'utente (e salvare in un cookie) un ordine custom
    faiColonna("Lorenzo")
    faiColonna("Alessio")
    faiColonna("Swami")
    faiColonna("Giacomo")
    faiColonna("Zanzu")
    faiColonna("Sara")
    faiColonna("Tommaso")
    faiColonna("Andry")
}

function checkboxesHideShow(name){
    let x = document.getElementsByClassName(name);
    if(x.length==0) return
    console.log(x);
    for(let i=0; i<x.length; i++){
        console.log("x[i] = " + x[i])
        if(x[i].style.display == "none") x[i].style.display="inline"
        else x[i].style.display = "none";
    }
    let cuchi
    if(x[0].style.display == "none") cuchi=false; else cuchi=true;
    document.cookie = name + "=" + cuchi + ";" + "expires=Fri, 31 Dec 9999 23:59:59 GMT"
}

function abbreviaMaterie(nome){
    switch(nome){
        case 'Traduzione Inglese 1': return 'TrEng1';
        case 'Inglese 2 Ex': return 'Eng2-Ex';
        case 'Tedesco 2 Ex': return 'Deu2-Ex';
        case 'Tedesco 2': return 'Deu2';
        case 'Traduzione Tedesca 1': return 'TrDeu1';
        case 'Programmazione 2': return 'PR2';
        case 'Reti di Calcolatori': return 'RdC';
        case 'Calcolo Scientifico e Metodi Numerici': return 'CSMN';
        case 'Calcolo Scientifico e Metodi Numerici Ex': return 'CSMN-Ex';
        case 'Fondamenti di Programmazione Web Ex': return 'FPW-Ex';
        case 'Reti di Calcolatori Ex': return 'RdC-Ex';
        case 'Fondamenti di Programmazione Web': return 'FPW';
        case 'Programmazione 2 Ex': return 'PR2-Ex';
        case 'Cinese 2 Ex': return 'Cmn2-Ex';
        case 'Com. e Gior. nell\'Età Contemp.': return 'ComGior';
        case 'Cinese 2': return 'Cmn2';
        case 'Teoria e Tecnica del Ling. Cinem.': return 'TTLingCin';
        case 'Cinese B2': return 'CmnB2';
        case 'Didat. dei Proc. Educativi e Formativi': return 'DPEF';
        case 'Linguistica Italiana 2': return 'LingIta2';
        case 'Linguistica Italiana 1': return 'LingIta1';
        case 'Spagnolo 1 Ex': return 'Spa1-Ex';
        case 'Spagnolo 1': return 'Spa1';
        case 'Inglese 1 Ex': return 'Eng1-Ex';
        case 'Inglese 1': return 'Eng1';
        case 'Litologia e Geologia': return 'LitGeo';
        case 'Geometria e Algebra': return 'GeomAlg';
        case 'Disegno Ex': return 'Disegno';
        case 'Fisica 1': return 'Fis1';
        default: return nome;
    }
}

function abbreviaAule(nome){
    let regexRules = [
        ["A.M. di ", ""],
        ["Matematica", "Matem."],
        ["Laboratorio", "Lab"],
        [/ ex .*$/, ""],
        ["Aula Magna", "A. Mag."],
        ["Aula Confucio", "Confucio"],
        ["Lingue", "L."]
    ]
    let i
    for(i in regexRules) nome = nome.replace(regexRules[i][0], regexRules[i][1])
    return nome;
}

function aggiungiLezioneGenerale(lezione, color){
    let x = document.getElementById("col-" + lezione.persona)
    let noShadow = ""
    if(lezione.materia == "") noShadow = "noshadow"
    x.innerHTML += "<div class=\"lezione " + noShadow + "\" style=\"height: " + (lezione.fine - lezione.inizio)*cinqueMinuti + "%; max-height: " + (lezione.fine - lezione.inizio)*cinqueMinuti + "%; background-color:" + color + "\"><span class=\"aula\">" + lezione.aula + "</span><br><span class=\"materia\">" + lezione.materia + "</span><br><span class =\"orario\">" + orariox(lezione) + "</span></div>\n"
}

function aggiungiLezioneAbbr(lezione){
    let color = colore(lezione.aula)
    let lezioneNew = lezione
    lezioneNew.materia = abbreviaMaterie(lezione.materia)
    lezioneNew.aula = abbreviaAule(lezione.aula)
    aggiungiLezioneGenerale(lezioneNew, color)
}

function aggiungiLezione(lezione){
    aggiungiLezioneGenerale(lezione, colore(lezione.aula))
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