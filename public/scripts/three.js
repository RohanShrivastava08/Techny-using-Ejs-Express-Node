import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.142.0/build/three.module.js";

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 300, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("techModel"), alpha: true });
renderer.setSize(window.innerWidth, 300);
document.body.appendChild(renderer.domElement);

// Lights
const ambientLight = new THREE.AmbientLight(0x404040, 2);
scene.add(ambientLight);
const pointLight = new THREE.PointLight(0x14B8A6, 5, 100);
pointLight.position.set(2, 3, 4);
scene.add(pointLight);

// PC Setup Model (Monitor + CPU + Keyboard)
const monitor = new THREE.BoxGeometry(1.5, 1, 0.1);
const monitorMaterial = new THREE.MeshStandardMaterial({ color: 0x14B8A6 });
const monitorMesh = new THREE.Mesh(monitor, monitorMaterial);
monitorMesh.position.y = 1.5;
scene.add(monitorMesh);

const cpu = new THREE.BoxGeometry(0.5, 1, 0.5);
const cpuMesh = new THREE.Mesh(cpu, monitorMaterial);
cpuMesh.position.x = -1;
cpuMesh.position.y = 0.5;
scene.add(cpuMesh);

const keyboard = new THREE.BoxGeometry(1, 0.1, 0.5);
const keyboardMesh = new THREE.Mesh(keyboard, monitorMaterial);
keyboardMesh.position.y = 0.1;
keyboardMesh.position.z = 0.5;
scene.add(keyboardMesh);

// Camera position
camera.position.z = 3;

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    monitorMesh.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();
