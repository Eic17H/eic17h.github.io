function checkboxesHideShow(name){
    let x = document.getElementsByClassName(name);
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