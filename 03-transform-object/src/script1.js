import "./style.css";
import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */
const group = new THREE.Group()
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
    color: 0xff0000
});
const mesh1 = new THREE.Mesh(geometry, material);
const mesh2 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
    color: 0x00ff00
}));
const mesh3 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
    color: 0x0000ff
}));
group.add(mesh1);
group.add(mesh2);
group.add(mesh3);
mesh1.position.x = -1.5
mesh3.position.x = 1.5
group.position.y = -1
group.scale.y = 2
group.rotation.x = 1
scene.add(group);
// group.scale.y = 2;
// group.rotation.y = 0.2;


/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600,
};

/**
 * Scale
 */
// mesh1.scale.set(2, 0.5, 0.5)

/**
 * Rotation
 */
// mesh1.rotation.reorder('YXZ')
// mesh1.rotation.y = Math.PI / 4
// mesh1.rotation.x = Math.PI / 4


/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);


// console.log(mesh1.position.distanceTo(camera.position));

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);