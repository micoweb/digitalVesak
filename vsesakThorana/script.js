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

const desktopWidth = 1500; 

function scaleToFit() {
    const windowWidth = window.innerWidth;
    const scale = windowWidth < desktopWidth ? windowWidth / desktopWidth : 1;
    
    // Apply scale to a wrapper or the body
    document.body.style.transform = `scale(${scale})`;
    document.body.style.transformOrigin = 'top left';
    
    // Prevent white space by adjusting the container width
    document.body.style.width = (100 / scale) + '%';
}

window.addEventListener('resize', scaleToFit);
window.addEventListener('load', scaleToFit);

function forceScale() {
    const inner = document.getElementById('scaler-inner');
    const outer = document.getElementById('scaler-outer');
    
    const targetWidth = 1500;
    const windowWidth = window.innerWidth;
    
    // Calculate how much to zoom (e.g., 0.5 for a 750px screen)
    const scale = windowWidth / targetWidth;
    
    // Apply the scale
    inner.style.transform = `scale(${scale})`;
    
    // IMPORTANT: Shrink the height of the outer container 
    // to match the visually scaled height of the inner content
    outer.style.height = (inner.offsetHeight * scale) + "px";
}

window.addEventListener('resize', forceScale);
window.addEventListener('load', forceScale);
// If your content loads dynamically, call forceScale() again

