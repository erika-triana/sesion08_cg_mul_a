var scene = new THREE.Scene();

function cubo(mx,my,mz,color1,material,alambrado,px,py,pz){
    var cubeGeometry = new THREE.BoxGeometry(mx, my, mz);
    var cubeMaterial;
    switch(material){
        case 'Basic': cubeMaterial = new THREE.MeshBasicMaterial({color: color1,
            wireframe: alambrado
        });
        break;
        case 'Standard': cubeMaterial = new THREE.MeshStandardMaterial({color: color1,
            wireframe: alambrado
        });
        break;
        case 'Physical': cubeMaterial = new THREE.MeshPhysicalMaterial({color: color1,
            wireframe: alambrado
        });
        break;
        case 'Phong': cubeMaterial = new THREE.MeshPhongMaterial({color: color1,
            wireframe: alambrado
        });
        break;
        case 'Lambert': cubeMaterial = new THREE.MeshLamberdMaterial({color: color1,
            wireframe: alambrado
        });
        break;
    }
   
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    // position the cube
    cube.position.set(px, py, pz);

    // add the cube to the scene
    scene.add(cube);
}
function esfera(r,wS,hS,color2,material,alambrado,px,py,pz){
    var sphereGeometry = new THREE.SphereGeometry(r, wS, hS);
    switch(material){
        case 'Basic': var sphereMaterial = new THREE.MeshBasicMaterial({color: color2,
            wireframe: alambrado
        });
        break;
        case 'Standard': var sphereMaterial = new THREE.MeshStandardMaterial({color: color2,
            wireframe: alambrado
        });
        break;
        case 'Physical': var sphereMaterial = new THREE.MeshPhysicalMaterial({color: color2,
            wireframe: alambrado
        });
        break;
        case 'Phong': var sphereMaterial = new THREE.MeshPhongMaterial({color: color2,
            wireframe: alambrado
        });
        break;
        case 'Lambert': var sphereMaterial = new THREE.MeshLambertMaterial({color: color2,
            wireframe: alambrado
        });
        break;
    }
    
    var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

    // position the sphere
    sphere.position.set(px, py, pz);

    scene.add(sphere);
}
function init() {
    // create a camera, which defines where we're looking at.
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

    // create a render and set the size
    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(new THREE.Color(0x000000));
    renderer.setSize(window.innerWidth, window.innerHeight);

    // show axes in the screen
    var axes = new THREE.AxesHelper(20);
    scene.add(axes);

    // create the ground plane
    var planeGeometry = new THREE.PlaneGeometry(60, 20);
    var planeMaterial = new THREE.MeshBasicMaterial({
        color: 0xAAAAAA,
        wireframe: true
    });
    var plane = new THREE.Mesh(planeGeometry, planeMaterial);

    // rotate and position the plane
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.set(15, 0, 0);

    // add the plane to the scene
    scene.add(plane);

    // create a cube
    cubo(4, 4, 4, 0xFF0000, 'Basic', true, 0, 0, 0);
    renderer.render(cubo);

    // create a sphere
    esfera(4, 20, 20, 0x7777FF, 'Basic', true, 0, 0, 0);
    renderer.render(esfera);


    // position and point the camera to the center of the scene
    camera.position.set(-30, 40, 30);
    camera.lookAt(scene.position);

    // add the output of the renderer to the html element
    document.getElementById("webgl-output").appendChild(renderer.domElement);

    // render the scene
    renderer.render(scene, camera);
}