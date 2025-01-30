import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

const verticesOfCube = [
	-1, -1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1,
	-1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1,
];

const indicesOfFaces = [
	2, 1, 0, 0, 3, 2,
	0, 4, 7, 7, 3, 0,
	0, 1, 5, 5, 4, 0,
	1, 2, 6, 6, 5, 1,
	2, 3, 7, 7, 6, 2,
	4, 5, 6, 6, 7, 4
];

const geometry = new THREE.PolyhedronGeometry(verticesOfCube, indicesOfFaces, 6, 2);
const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const circle = new THREE.Mesh(geometry, material); scene.add(circle);
scene.add(circle);

camera.position.z = 5;

function animate() {

	circle.rotation.x += 0.01;
	circle.rotation.y += 0.01;

	renderer.render(scene, camera);

}

animate();