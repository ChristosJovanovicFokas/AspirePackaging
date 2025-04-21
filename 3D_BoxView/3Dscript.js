import * as THREE from 'three'; 
import {GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'; // Import OrbitControls module [1, 2, 3]

const canvas = document.getElementById('canvas');
//Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 1, .2, 1000);

camera.position.set(-10,40,10);

const renderer = new THREE.WebGLRenderer({  canvas: canvas });
renderer.outputColorSpace = THREE.SRGBColorSpace;

renderer.setSize(300, 300);
renderer.setClearColor(0xffffff);
renderer.setPixelRatio(window.devicePixelRatio);

document.body.appendChild(renderer.domElement);

//Add orbitControls to allow rotating around the model 
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enablePan = false;
controls.minDistance = 2;
controls.maxDistance = 2.5;
controls.minPolarAngle = .5;
controls.maxPolarAngle = 1.5;
controls.autoRotate = false;
controls.target = new THREE.Vector3(0, 1, 0);
controls.update();

//create a light source
const ambient = new THREE.AmbientLight(0xffffff, 2);
scene.add(ambient);

//Set the initial camera position
camera.position.z = 5;
let model;
//Load the .obj model
const loader = new GLTFLoader().setPath('/boxModels/');
loader.load('smallBag.gltf', (gltf) => {
	model = gltf.scene;
	model.position.set(-.05, 1.2, 0);
	scene.add(model);


});

document.getElementById('fileUpload').addEventListener('change', function(e) {
	const file = event.target.files[0];
	if(file){
		const textureLoader = new THREE.TextureLoader();
		const reader = new FileReader();
		reader.onload = function(e) {
			const texture = textureLoader.load(e.target.result);
			if(model) {
				model.traverse((child)=>{
					if(child.isMesh){
						const mat = new THREE.MeshBasicMaterial({map:texture});
						child.material = mat;
					}

				});
			}
		}
		reader.readAsDataURL(file);
	}

});


function render() {
	controls.update(); //update controls
	
	renderer.render(scene, camera);
	requestAnimationFrame(render);
}


//initial render call
render();

