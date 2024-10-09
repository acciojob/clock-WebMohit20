//your JS code here. If required.
let date = new Date()
let timer = document.getElementById("timer");
let mdy = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
let time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
timer.innerHTML = `${mdy}, ${time}`