window.addEventListener('load', init, false);

var scene,
    camera, fieldOfView, aspectRatio, nearPlane, farPlane, HEIGHT, WIDTH,
    renderer, container;

function init() {


    createScene();

    createLights();

    createSea();

    loop();
}