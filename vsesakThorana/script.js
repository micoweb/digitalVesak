const cursor = document.querySelector("#cursor")

document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
});

setInterval(function background2() {
    document.getElementById("backLightL").src = "sources/bgLights/2.gif";
    document.getElementById("backLightR").src = "sources/bgLights/2.gif";
}, 4050);
setInterval(function background3() {
    document.getElementById("backLightL").src = "sources/bgLights/3.gif";
    document.getElementById("backLightR").src = "sources/bgLights/3.gif";
}, 8100);
setInterval(function background4() {
    document.getElementById("backLightL").src = "sources/bgLights/4.gif";
    document.getElementById("backLightR").src = "sources/bgLights/4.gif";
}, 12150);
setInterval(function background1() {
    document.getElementById("backLightL").src = "sources/bgLights/1.gif";
    document.getElementById("backLightR").src = "sources/bgLights/1.gif";
}, 16200);




setInterval(function lightRound1() {
    document.getElementById("bigRound").src = "sources/lightRound/1.gif";

}, 4050);
setInterval(function lightRound1() {
    document.getElementById("bigRound").src = "sources/lightRound/2.gif";
}, 8100);
setInterval(function lightRound1() {
    document.getElementById("bigRound").src = "sources/lightRound/3.gif";
}, 12150);
setInterval(function lightRound1() {
    document.getElementById("bigRound").src = "sources/lightRound/4.gif";

}, 16200);
setInterval(function lightRound1() {
    document.getElementById("bigRound").src = "sources/lightRound/5.gif";
}, 20250);
setInterval(function lightRound1() {
    document.getElementById("bigRound").src = "sources/lightRound/6.gif";

}, 24300);
setInterval(function lightRound1() {
    document.getElementById("bigRound").src = "sources/lightRound/7.gif";
}, 28350);

