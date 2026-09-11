var current = 1;
var time=0;
var playing=true;
const delay = ms => new Promise(res => setTimeout(res, ms));
var currentAttempt = {progressAtTargetTime: []};
const targetTime = 30;
var timestamp;

function load() {
    time=0;
    prepareGame();
    timer();
}

function getRandomOrder() {
    let numbers = [];
    for (let i=0; i<36; i++) {
        numbers[i] = i+1;
    }
    for (let i=35; i>=0; i--) {
        let temp = numbers[i];
        let index = Math.floor(Math.random()*36);
        numbers[i] = numbers[index];
        numbers[index] = temp;
    }
    return numbers;
}

function prepareGame() {

    let numbers = getRandomOrder();
    currentAttempt = {progressAtTargetTime: []};
    timestamp = new Date();

    // Making buttons
    let gamespace = document.getElementById("gamespace");
    gamespace.innerHTML = "";
    let k=0;
    for (let i=0; i<6; i++) {
        let thisrow = `<div class="gamerow" id="gamerow-${i}">`
        for (let j=0; j<6; j++) {
            thisrow += `<button class="gamesquare" id="gamesquare-${i};${j}" onclick="playermove(${numbers[k]})">${numbers[k]}</button>`;
            k++;
        }
        thisrow += "</div>"
        gamespace.innerHTML += thisrow;
    }
    current = 1;
}

function playermove(k) {
    if(k!=current) lose();
    else if(k==current) {current++;
    if(current>36) win();}
}

function lose() {
    window.alert("Lose")
    load();
}

function win() {
    window.alert("Win in "+time+"s")
    currentAttempt.winTime = time;
    document.getElementById("36time").innerHTML = `tot: ${time}s`;
    load();
}

async function timer() {
    let box = document.getElementById("timer")
    while(playing) {
        await delay(10);
        time += 0.01;
        time = Math.round(time*100)/100;
        box.innerHTML = time+"s"
        if(time == targetTime) {
            currentAttempt.progressAtTargetTime[targetTime] = current-1;
            document.getElementById("30sscore").innerHTML = `${targetTime}s: ${current-1} punti`;
        }
    }
}