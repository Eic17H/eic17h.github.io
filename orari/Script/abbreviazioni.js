function abbreviaMaterie(nome){
    switch(nome){
        case 'Traduzione Inglese 1': return 'TrEng1';
        case 'Inglese 2 Ex': return 'Eng2-Ex';
        case 'Tedesco 2 Ex': return 'Deu2-Ex';
        case 'Tedesco 2': return 'Deu2';
        case 'Traduzione Tedesca 1': return 'TrDeu1';
        case 'Programmazione 2': return 'PR2';
        case 'Reti di Calcolatori': return 'Reti';
        case 'Calcolo Scientifico e Metodi Numerici': return 'CSMN';
        case 'Calcolo Scientifico e Metodi Numerici Ex': return 'CSMN-Ex';
        case 'Fondamenti di Programmazione Web Ex': return 'FPW-Ex';
        case 'Reti di Calcolatori Ex': return 'Reti-Ex';
        case 'Fondamenti di Programmazione Web': return 'FPW';
        case 'Programmazione 2 Ex': return 'PR2-Ex';
        case 'Cinese 2 Ex': return 'Cmn2-Ex';
        case 'Com. e Gior. nell\'Età Contemp.': return 'ComGior';
        case 'Cinese 2': return 'Cmn2';
        case 'Teoria e Tecnica del Ling. Cinem.': return 'Cinema';
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
        case 'Fondamenti di Informatica': return 'FDI';
        case 'Tecnologia dei Materiali': return 'TDM';
        case 'Fisica 2': return 'Fis2';
        case 'Interazione Uomo-Macchina': return 'IUM';
        case 'Basi di Dati': return 'BdD';
        case 'Linguaggi di Programmazione': return 'LdP';
        case 'Russo 1 Ex': return 'Rus1-Ex';
        case 'Russo 1': return 'Rus1';
        case 'Laboratorio Cinese Ex': return 'LabCmn-Ex';
        case 'Laboratorio Cinese': return 'LabCmn';
        case 'Inglese Ex': return 'Eng-Ex';
        case 'Inglese': return 'Eng';
        case 'English Language and Communication Skills': return 'EngSkill';
        case 'Linguaggi dello Spettacolo': return 'Spett';
        case 'Tedesco 3 Ex': return 'Deu3-Ex';
        case 'Tedesco 3': return 'Deu3';
        case 'Inglese 3 Ex': return 'Eng3-Ex';
        case 'Filologia Germanica': return 'FilGem';
        case 'Mediazione Orale Inglese': return 'MedEng';
    }
    let regexRules = [
        [/.*\/.*/, "..."]
    ]
    let i
    for(i in regexRules) nome = nome.replace(regexRules[i][0], regexRules[i][1])
    return nome;
}

function abbreviaAule(nome){
    let regexRules = [
        [/.*Olbia/, "Olbia"],
        ["A.M. di ", ""],
        ["Matematica", "Mat."],
        ["Laboratorio Lingue", "Lab"],
        ["Laboratorio", "Lab"],
        ["Laboratorio Lingue", "Lab"],
        [/ ex .*$/, ""],
        ["Aula Magna di", "A.Mag."],
        ["Aula Confucio", "Confucio"],
        [/.*\/.*/, "..."],
        ["Didattica a Distanza", "DaD"],
        ["-", "&#8209;"]
    ]
    let i
    for(i in regexRules) nome = nome.replace(regexRules[i][0], regexRules[i][1])
    return nome;
}

function abbreviaGiorniSettimana(nome){
    let lunghezza = 3
    let punto = ""
    return nome.substring(0, lunghezza) + punto
}