var width = window.innerWidth;
var height = window.innerHeight;
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
var renderer = new THREE.WebGLRenderer({
    antialias: true
});
renderer.setPixelRatio(window.devicePixelRatio); //this is so IMPORTANT!!! For textures to look sharp. 
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);
var boxGeo = new THREE.BoxGeometry(1, 1, 1);
var boxMat = new THREE.MeshBasicMaterial({
    color: 0x00cccc
});
var box = new THREE.Mesh(boxGeo, boxMat);
camera.position.set(60, 0, 60);
scene.add(box);
window.addEventListener('resize', resizeHandler);
update();


function resizeHandler() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
}

function update() {
    requestAnimationFrame(update);
    renderer.render(scene, camera);


}
