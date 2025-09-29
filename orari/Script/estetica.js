function colore(aula){
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
        "Aula 9"
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
    if(olbia.includes(aula)) return "var(--blue)"
    if(palazzoDelleScienze.includes(aula)) return "var(--red)"
    if(campusAresu.includes(aula)) return "var(--yellow)"
    if(orario.includes(aula)) return "#00000000"
    if(altro.includes(aula)) return "var(--dark-white)"
    if(ingegneria.includes(aula)) return "var(--green)"
    return "var(--darkgrey)"
}