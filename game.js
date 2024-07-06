// Load the UI elements as textures
const uiTextures = {};
Object.keys(ui.frames).forEach(key => {
  uiTextures[key] = new THREE.TextureLoader().load(`ui/${key}`);
});

// Create the main menu scene
const mainMenuScene = new THREE.Scene();

// Function to create a button with the given texture and position
function createButton(texture, x, y, width, height) {
  const geometry = new THREE.PlaneGeometry(width, height);
  const material = new THREE.MeshBasicMaterial({ map: texture });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(x, y, 0);
  mesh.rotation.x = Math.PI / 2; // Rotate the mesh to face the camera
  mainMenuScene.add(mesh);
  return mesh;
}

// Create the main menu UI elements
const notepadPanel = createButton(uiTextures['notepad-panel.png'], 0, 0, 654, 834);
const doubleupModulePanel = createButton(uiTextures['doubleup-module-panel.png'], 660, 2, 614, 110);
const freestuffModulePanel = createButton(uiTextures['freestuff-module-panel.png'], 660, 116, 614, 122);
const baseBlurry = createButton(uiTextures['base-blurry.png'], 660, 500, 512, 90);
const celebrationStripe = createButton(uiTextures['celebration-stripe.png'], 660, 594, 498, 32);

// Add the train and Jake as 3D models
// You can use the THREE.OBJLoader or THREE.GLTFLoader to load 3D models

// ... (load and add the train and Jake models to the scene)

// Create the camera and renderer
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('gameCanvas') });
renderer.setSize(window.innerWidth, window.innerHeight);

// Animate the main menu scene
function animate() {
  requestAnimationFrame(animate);
  renderer.render(mainMenuScene, camera);
}
animate();
