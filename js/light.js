/**
 * Created by Yaroslav on 16.07.2017.
 */
var hemisphereLight, shadowLight;

function createLights() {
    // Полушарный свет - это градиентный свет
    // первый параметр это цвет неба, второй параметр - цвет земли,
    // третий параметр - интенсивность света
    hemisphereLight = new THREE.HemisphereLight(0xaaaaaa,0x000000, .9)

    // Направленный свет светит в определенном направлении из точки,
    // это работает как солнце, что значит что продуцируемые лучи параллельны.
    shadowLight = new THREE.DirectionalLight(0xffffff, .9);

    // Устанавливаем направление света
    shadowLight.position.set(150, 350, 350);

    // Разрешаем отбрасывание теней
    shadowLight.castShadow = true;

    // Определяем видимую область теней
    shadowLight.shadow.camera.left = -400;
    shadowLight.shadow.camera.right = 400;
    shadowLight.shadow.camera.top = 400;
    shadowLight.shadow.camera.bottom = -400;
    shadowLight.shadow.camera.near = 1;
    shadowLight.shadow.camera.far = 1000;

    // Задайте разрешение теней,
    // но имейте ввиду, чем оно больше, тем ниже производительность.
    shadowLight.shadow.mapSize.width = 2048;
    shadowLight.shadow.mapSize.height = 2048;

    // Добавляем наше освещение на сцену
    scene.add(hemisphereLight);
    scene.add(shadowLight);
}
