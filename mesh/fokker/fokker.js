/**
 * Created by Yaroslav on 17.07.2017.
 */

var loader = new THREE.JSONLoader();
var fokker

loader.load(

    'mesh/fokker/airplane.json',

    function ( geometry, materials ) {

        var material = materials[ 0 ];
            fokker = new THREE.Mesh( geometry, material );

            fokker.traverse ( function (child) {
                if (child instanceof THREE.Mesh) {
                    child.castShadow = true;
                    child.receiveShadow = true;
                }
            });

            console.log(fokker);

            fokker.position.y = 50;

            fokker.scale.set(.25,.25,.25);
            scene.add( fokker );

    }
);
