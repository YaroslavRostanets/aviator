/**
 * Created by Yaroslav on 16.07.2017.
 */
function loop(){
    sea.mesh.rotation.z += .005;
    fokker.rotation.x = mousePos.x * 0.8;
    fokker.rotation.z = mousePos.y * 0.4;
    fokker.position.y += mousePos.y;
    fokker.position.z += mousePos.x;
    if(fokker.position.y < 5){
        audio.pause();
        if(confirm('Буль-буль =(')){
            window.location.reload();
        } else {
            window.location.reload();
        };
    }

    //cameraGUI();
    renderer.render(scene, camera);

    requestAnimationFrame(loop);
}


function cameraGUI() { //Управление камерой GUI
    camera.position.x = cameraPosition.positionX;
    camera.position.y = cameraPosition.positionY;
    camera.position.z = cameraPosition.positionZ;
}