/**
 * Created by Yaroslav on 16.07.2017.
 */
function createScene() {
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;

    scene = new THREE.Scene();

    scene.fog = new THREE.Fog(0xf7d9aa, 100, 950); //Добавляем туман

    // Создадим камеру
    aspectRatio = WIDTH / HEIGHT;
    fieldOfView = 60;
    nearPlane = 1;
    farPlane = 10000;
    camera = new THREE.PerspectiveCamera(
        fieldOfView,
        aspectRatio,
        nearPlane,
        farPlane
    );

    // Зададим позицию камере в пространстве
    camera.position.x = 0;
    camera.position.z = 200;
    camera.position.y = 100;

    // Создадим рендер
    renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        canvas: canvas
    });

    renderer.setSize(WIDTH, HEIGHT);
    renderer.shadowMap.enabled = true;  // рендер теней



    window.addEventListener('resize', handleWindowResize, false);

}

function handleWindowResize() {
    // обновим высоту и ширину камеры и рендера
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;
    renderer.setSize(WIDTH, HEIGHT);
    camera.aspect = WIDTH / HEIGHT;
    camera.updateProjectionMatrix();
}
