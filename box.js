       // box object
       class Box {
           constructor() {
               this.ttl = Math.random() * 500;
               this.age = 0;
               //var geometry = new THREE.SphereGeometry(0.5, 16, 16);
               var geometry = new THREE.BoxGeometry(.5, .5, .5);
               var material = new THREE.MeshNormalMaterial({
                   shading: THREE.SmoothShading
               });

               this.mesh = new THREE.Mesh(geometry, material);
               scene.add(this.mesh);
               this.step = 0;
               this.rotSpeed = -0.02 + Math.random() * 0.04;
               this.scaleSpeed = 0.005 + Math.random() * 0.1

           }





           shrink() {
               this.mesh.scale.multiplyScalar(0.75);
           }

           update() {
               this.age++;
               this.step += this.scaleSpeed;

               this.mesh.rotation.y += this.rotSpeed;
               var scale = Math.sin(this.step) * 0.5 + 0.6;
               this.mesh.scale.set(scale, scale, scale);
           }
       }
