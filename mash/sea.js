/**
 * Created by Yaroslav on 16.07.2017.
 */
// Сперва определим JS-объект нашего моря
Sea = function(){

    // Создадим геометрию цилиндра
    // со следующими параметрами:
    // верхний радиус, нижний радиус, высота, количество сегментов по окружности, количество сегментов по вертикали
    var geom = new THREE.CylinderGeometry(600,600,800,40,10);

    // повернем наш объект по оси x
    geom.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI/2));

    // создадим материал для нашего объекта
    var mat = new THREE.MeshPhongMaterial({
        color:Colors.blue,
        transparent:true,
        opacity:.6,
        shading:THREE.FlatShading,
    });

    // Для создания объекта в Three.js, нам необходимо создать меш,
    // который является совокупностью созданной ранее геометрии и материала
    this.mesh = new THREE.Mesh(geom, mat);

    // Разрешим морю отбрасывать тени
    this.mesh.receiveShadow = true;
};

// Теперь мы инициализируем наше море и добавим его на сцену:

var sea;

function createSea(){
    sea = new Sea();

    // Подвинем объект в нижнюю часть нашей сцены
    sea.mesh.position.y = -600;

    // Добавим финальный меш на сцену
    scene.add(sea.mesh);
}