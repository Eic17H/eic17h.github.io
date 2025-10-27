function oraNumero(input){
  	let minuto, ora
    // Formato hh:mm
    if(String(input).match(/^[0-2][0-9]?:[0-5][0-9]$/)) {
        minuto = input.replace(/.+:/, "")
        ora = input.replace(/:.+/,"")
    }
    // Formato 1u = 5min
		else if(String(input).match(/^[0-9]+$/)) {
    	let minuti = input*5
    	minuto = minuti%60
    	ora = (minuti-minuto)/60   
    }
		else return null
		return "" + String(ora).padStart(2,'0') + ":" + String(minuto).padStart(2,'0') + ""
}

function oraInt(input) {
		let input = oraNumero(input)
    if(input == null) return null
    return input.replace(/.+:/, "")/5 + input.replace(/:.+/,"")*12
}

// inizio ZWSP - ZWSP fine
function orariox(input){
    if(input.materia!="") return oraNumero(input.inizio) + "-​" + oraNumero(input.fine)
    else return ""
}