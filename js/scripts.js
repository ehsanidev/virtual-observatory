import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.150.1/build/three.module.js';

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Set the background
scene.background = new THREE.Color(0x000000);

// Add stars
const starGeometry = new THREE.BufferGeometry();
const starMaterial = new THREE.PointsMaterial({ color: 0xffffff });

const starVertices = [];
for (let i = 0; i < 10000; i++) {
  const x = (Math.random() - 0.5) * 2000;
  const y = (Math.random() - 0.5) * 2000;
  const z = (Math.random() - 0.5) * 2000;
  starVertices.push(x, y, z);
}

starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
const stars = new THREE.Points(starGeometry, starMaterial);
scene.add(stars);

// animation function
function animate() {
  requestAnimationFrame(animate);

 // Move the stars to create an interactive effect
  stars.rotation.x += 0.0001;
  stars.rotation.y += 0.0001;

  renderer.render(scene, camera);
}
animate();

// Adjust the page size if resized
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Add animation for clicking on stars
  document.addEventListener('click', (event) => {
  const surpriseMessage = document.createElement('div');
  surpriseMessage.style.position = 'absolute';
  surpriseMessage.style.top = `${event.clientY}px`;
  surpriseMessage.style.left = `${event.clientX}px`;
  surpriseMessage.style.color = 'white';
  surpriseMessage.style.fontFamily = 'Arial, sans-serif';
  surpriseMessage.textContent = "You Found Me!";
  document.body.appendChild(surpriseMessage);

  setTimeout(() => {
    surpriseMessage.remove();
  }, 2000);
});