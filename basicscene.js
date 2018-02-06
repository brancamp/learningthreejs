var width = window.innerWidth;
var height = window.innerHeight;
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
var boxGeo = new THREE.BoxGeometry(1, 1, 1);
var boxMat = new THREE.MeshBasicMaterial({
    color: 0x00cccc
});
var box = new THREE.Mesh(boxGeo, boxMat);
camera.position.set(5, 5, 5);
scene.add(box);
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);
renderer.render(scene, camera);
window.addEventListener('resize', resizeHandler);

function resizeHandler() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
}
