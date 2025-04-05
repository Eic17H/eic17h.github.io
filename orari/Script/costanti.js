// Orario di inizio del grafico
var oraInizio = 7*12+45/5
// Orario di fine del grafico
var oraFine = 20*12+0/5
// Quale percentuale del grafico occupano 5 minuti, unità base scelta per il grafico
var cinqueMinuti = 100/(oraFine-oraInizio)

var schermoPiccolo = (screen.width < 1000)