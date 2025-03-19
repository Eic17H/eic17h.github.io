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

function aggiungiLezione(lezione){
    let x = document.getElementById("col-" + lezione.persona)
    let noShadow = ""
    if(lezione.materia == "") noShadow = "noshadow"
    x.innerHTML += "<div class=\"lezione " + noShadow + "\" style=\"height: " + (lezione.fine - lezione.inizio)*cinqueMinuti + "%; max-height: " + (lezione.fine - lezione.inizio)*cinqueMinuti + "%; background-color:" + colore(lezione.aula) + "\"><span class=\"aula\">" + lezione.aula + "</span><br><span class=\"materia\">" + lezione.materia + "</span><br><span class =\"orario\">" + orariox(lezione) + "</span></div>\n"
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