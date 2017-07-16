/**
 * Created by Yaroslav on 16.07.2017.
 */
function loop(){
    sea.mesh.rotation.z += .005;

    renderer.render(scene, camera);

    requestAnimationFrame(loop);
}
