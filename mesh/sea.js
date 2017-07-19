/**
 * Created by Yaroslav on 16.07.2017.
 */
// Сперва определим JS-объект нашего моря
Sea = function(){

    // Создадим геометрию цилиндра
    // со следующими параметрами:
    // верхний радиус, нижний радиус, высота, количество сегментов по окружности, количество сегментов по вертикали
    var geom = new THREE.CylinderGeometry(2200,2200,1600,40,40);

    // повернем наш объект по оси x
    geom.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI/2));

    geom.mergeVertices();

    var l = geom.vertices.length;
    this.waves = [];

    for (var i=0; i<l; i++){
        // get each vertex
        var v = geom.vertices[i];

        // store some data associated to it
        this.waves.push({y:v.y,
            x:v.x,
            z:v.z,
            // a random angle
            ang:Math.random()*Math.PI*2,
            // a random distance
            amp:5 + Math.random()*15,
            // a random speed between 0.016 and 0.048 radians / frame
            speed:0.016 + Math.random()*0.032
        });
    };

    // создадим материал для нашего объекта
    var mat = new THREE.MeshPhongMaterial({
        color:0x17345E,
        transparent:true,
        opacity:1,
        shading:THREE.FlatShading,
    });

    // Для создания объекта в Three.js, нам необходимо создать меш,
    // который является совокупностью созданной ранее геометрии и материала

    this.mesh = new THREE.Mesh(geom, mat);

    // Разрешим морю отбрасывать тени
    this.mesh.receiveShadow = true;
};

Sea.prototype.moveWaves = function (){

    // get the vertices
    var verts = this.mesh.geometry.vertices;
    var l = verts.length;

    for (var i=0; i<l; i++){
        var v = verts[i];

        // get the data associated to it
        var vprops = this.waves[i];

        // update the position of the vertex
        v.x = vprops.x + Math.cos(vprops.ang)*vprops.amp;
        v.y = vprops.y + Math.sin(vprops.ang)*vprops.amp;

        // increment the angle for the next frame
        vprops.ang += vprops.speed;

    }

    // Tell the renderer that the geometry of the sea has changed.
    // In fact, in order to maintain the best level of performance,
    // three.js caches the geometries and ignores any changes
    // unless we add this line
    this.mesh.geometry.verticesNeedUpdate=true;

    sea.mesh.rotation.z += .005;
}

// Теперь мы инициализируем наше море и добавим его на сцену:

var sea;

function createSea(){
    sea = new Sea();
    sea.moveWaves();

    // Подвинем объект в нижнюю часть нашей сцены
    sea.mesh.position.y = -2200;

    // Добавим финальный меш на сцену
    scene.add(sea.mesh);
}