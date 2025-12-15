// Esiste solo per retrocompatibilità, da rimuovere
function coloreAula(aula){
    let aulaCosta = [
        "Aula Costa"
    ]
    let palazzoDelleScienze = [
        "Aula Magna di Matematica",
        "Laboratorio T",
        "A.M. di Matematica"
    ]
    let campusAresu = [
        "Aula 11",
        "Aula 2",
        "Aula 4",
        "Aula 7",
        "Aula 3",
        "Laboratorio C",
        "Laboratorio Lingue A1",
        "Laboratorio 1",
        "Aula Magna",
        "Aula 13",
        "Aula 6",
        "Aula Confucio",
        "Aula 9",
        "Aula 8"
    ]
    let orario = [
        "08:00",
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00"
    ]
    let altro = [
        "ignoto",
        "...",
        "Didattica a Distanza"
    ]
    let ingegneria = [
        "I_IA ex AB",
        "L_TB ex Z",
        "N_3A ex Lidia",
    ]
    let olbia = [
        "Aula 1 Olbia"
    ]
    if(aula.match(/.*\/.*/)) return "var(--dark-white)"
    if(aulaCosta.includes(aula)) return coloreEdificio("Aula Costa")
    if(olbia.includes(aula)) return coloreEdificio("Olbia")
    if(palazzoDelleScienze.includes(aula)) return coloreEdificio("Palazzo delle Scienze")
    if(campusAresu.includes(aula)) return coloreEdificio("Campus Aresu")
    if(orario.includes(aula)) return null
    if(altro.includes(aula)) return "var(--dark-white)"
    if(aula.match(/.(.?)_.(.?).*/)) return coloreEdificio("Ingegneria")
    if(ingegneria.includes(aula)) return coloreEdificio("Ingegneria")
    return null
}

function coloreEdificio(edificio) {
    switch(edificio) {
        case "Aula Costa": return "var(--orange)";
        case "Olbia": return "var(--blue)";
        case "Campus Aresu": return "var(--yellow)";
        case "Palazzo delle Scienze": return "var(--red)";
        case "Ingegneria": return "var(--green)";
        case "Sa Duchessa": return "var(--blue)";
        case "CREA": return "var(--redrange)";
    }
    return null
}

function colore(edificio, aula) {
    console.log(edificio + " " + aula)
    return coloreEdificio(edificio) ?? coloreAula(aula) ?? "#00000000"
}