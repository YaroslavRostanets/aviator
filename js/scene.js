/**
 * Created by Yaroslav on 16.07.2017.
 */
function createScene() {
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;

    scene = new THREE.Scene();

    scene.fog = new THREE.Fog(0x949EC4, 100, 950); //Добавляем туман

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
    camera.position.x = -170;
    camera.position.z = 0;
    camera.position.y = 150;



    // Создадим рендер
    renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        canvas: canvas
    });

    var controls = new THREE.OrbitControls(camera, canvas);
    controls.maxPolarAngle = Math.PI / 2;

    renderer.setSize(WIDTH, HEIGHT);
    renderer.shadowMap.enabled = true;  // рендер теней

    var axisHelper = new THREE.AxisHelper( 500 );
    //scene.add( axisHelper );



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
