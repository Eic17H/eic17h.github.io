function checkboxesHideShow(name){
    let x = document.getElementsByClassName(name);
    if(x.length==0) return
    for(let i=0; i<x.length; i++){
        if(x[i].style.display == "none") x[i].style.display="inline"
        else x[i].style.display = "none";
    }
    let cuchi
    if(x[0].style.display == "none") cuchi=false; else cuchi=true;
    document.cookie = name + "=" + cuchi + ";" + "expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/"
}

function hiddenByDefault() {
    let nascosti = ["Davide"]
    let trovati = {}
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookieArrayString = decodedCookie.split("; ")
    let nome, value
    for(let i in cookieArrayString){
        nome = cookieArrayString[i].split("=")[0]
        value = cookieArrayString[i].split("=")[1]
        trovati[nome] = true
    }
    for(let i in nascosti) {
        if(!trovati[nascosti[i]]) document.cookie = nascosti[i] + "=" + false + ";" + "expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/"
    }
}

function apriOpzioni() {
    window.location.href = "./menu"
}