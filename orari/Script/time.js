function oraNumero(input){
    let minuti = input*5
    let minuto = minuti%60
    let ora = (minuti-minuto)/60
    return "" + String(ora).padStart(2,'0') + ":" + String(minuto).padStart(2,'0') + ""
}

// inizio ZWSP - ZWSP fine
function orariox(input){
    if(input.materia!="") return oraNumero(input.inizio) + "-​" + oraNumero(input.fine)
    else return ""
}