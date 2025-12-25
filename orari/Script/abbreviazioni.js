function abbreviaMaterie(nome){
    switch(nome){
        case 'Com. e Gior. nell\'Età Contemp.': return 'ComGior';
        case 'Teoria e Tecnica del Ling. Cinem.': return 'Cinema';
        case 'Didat. dei Proc. Educativi e Formativi': return 'DPEF';
        case 'Linguistica Italiana 2': return 'LingIta2';
        case 'Linguistica Italiana 1': return 'LingIta1';
        case 'Litologia e Geologia': return 'LitGeo';
        case 'Geometria e Algebra': return 'GeomAlg';
        case 'Disegno Ex': return 'Disegno';
        case 'Fisica 1': return 'Fis1';
        case 'Fondamenti di Informatica': return 'FDI';
        case 'Tecnologia dei Materiali': return 'TDM';
        case 'Fisica 2': return 'Fis2';
        case 'English Language and Communication Skills': return 'EngSkill';
        case 'Linguaggi dello Spettacolo': return 'Spett';
        case 'Filologia Germanica': return 'FilGem';
        case 'Mediazione Orale Inglese': return 'MedEng';
        case 'Analisi Matematica': return 'Analisi';
        case 'Analisi Matematica 1': return 'Analisi 1';
        case 'Analisi Matematica 2': return 'Analisi 2';
        case 'Scienza delle Costruzioni': return 'SciCos';
        case 'Fisica Tecnica Ambientale': return 'FTA';
        case 'Teoria e Storia della Traduzione 1': return 'TeoStoTr1';
        case 'Automi e Linguaggi Formali': return 'ALF';
        case 'Dati e Modelli': return 'DeM';
        case 'Diritto': return 'EDI';
        case 'Economia': return 'EDI';
        case 'Storia e Critica del Cinema': return 'Cinema';
        case 'Linguaggi della Televisione e dei Nuovi Media': return 'LingMedia';
    }
    let regexRules = [
        ["Sistemi Operativi", "SO"],
        ["Programmazione 1", "PR1"],
        ["Programmazione 2", "PR2"],
        ["Reti di Calcolatori", "Reti"],
        ["Calcolo Scientifico e Metodi Numerici", "CSMN"],
        ["Fondamenti di Programmazione Web", "FPW"],
        ["Interazione Uomo-Macchina", "IUM"],
        ["Basi di Dati", "BD"],
        ["Linguaggi di Programmazione", "LiP"],
        [/.*\/.*/, "..."],
        [/Tedesc.(( )([0-9]))?/, "Deu$3"],
        [/Cines.(( )([0-9]))?/, "Cmn$3"],
        [/Ingles.(( )([0-9]))?/, "Eng$3"],
        [/Spagnol.(( )([0-9]))?/, "Spa$3"],
        [/Russ.(( )([0-9]))?/, "Rus$3"],
        [/Traduzione (.*)/, "Tr$1"],
        [/Laboratorio (.*)/, "Lab$1"],
        [/Letteratura (.*)/, "Let$1"],
        [/(.+) Ex/, "$1-Ex"],
    ]
    let i
    for(i in regexRules) nome = nome.replace(regexRules[i][0], regexRules[i][1])
    return nome;
}

function abbreviaAule(nome){
    let loggers = nome
    let regexRules = [
        ["Aula Costa", "Costa"],
        [/.*Olbia/, "Olbia"],
        [/.*CREA.*/, "CREA"],
        ["A.M. di ", ""],
        ["Matematica", "Mat."],
        ["Laboratorio Lingue", "Lab"],
        ["Laboratorio", "Lab"],
        ["Laboratorio Lingue", "Lab"],
        [/ ex .*$/, ""],
        ["Aula Magna di", "A.M."],
        ["Aula Magna", "A.Mag."],
        ["Aula Confucio", "Confucio"],
        [/.*\/.*/, "..."],
        ["Didattica a Distanza", "DaD"],
        [/(.(.?)_.(.?)) - Aula (.).+/, "$1 ($4.)"],
        [/(.(.?)_.(.?)) - Aula (.)/, "$1 ($4)"],
        ["-", "&#8209;"],
    ]
    let i
    for(i in regexRules) nome = nome.replace(regexRules[i][0], regexRules[i][1])
    loggers += " !!!!! " + nome
    //console.log(loggers)
    return nome;
}

function abbreviaGiorniSettimana(nome){
    let lunghezza = 3
    let punto = ""
    return nome.substring(0, lunghezza) + punto
}
