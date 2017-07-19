window.addEventListener('load', init, false);

var scene,
    camera, fieldOfView, aspectRatio, nearPlane, farPlane, HEIGHT, WIDTH,
    renderer, container;

function init() {
    var gui = new dat.GUI();

    gui.add(cameraPosition,'positionX').min(0).max(800).step(10);
    gui.add(cameraPosition,'positionY').min(0).max(800).step(10);
    gui.add(cameraPosition,'positionZ').min(0).max(800).step(10);


    createScene();

    createLights();

    createSea();

    //createPlane();

    document.addEventListener('mousemove', handleMouseMove, false);

    var timer = setInterval(function(){
        if(loadTest(fokker)){
            loop();
            clearInterval(timer);
        }
    },100);

}

var mousePos={x:0, y:0};
var audio = document.querySelector('audio');
function handleMouseMove(event) {

    var tx = (-1 + (event.clientX / WIDTH)*2);

    var ty = (1 - (event.clientY / HEIGHT)*2);
    mousePos = {x:tx, y:ty};

}

function loadTest (obj) {
    if(typeof obj == "undefined"){
        return false;
    } else {
        return true;
    }
}

