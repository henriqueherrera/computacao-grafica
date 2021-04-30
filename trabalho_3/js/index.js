var animals = {
  vaca1: null,
  vaca2: null,
  monkey1: null,
  monkey2: null,
  triceratops1: null,
  triceratops2: null,
}, scene, camera, renderer, ground, objLoader;


var loadAll = function () {
  const gui = new dat.GUI();

  parametrosGUI = {
    scalarPuppet: 1,
    positionX: 0,
    positionY: -6,
    positionZ: 0,

    skyColor: "#000000",
    groundColor: "#006400",

    geometrias: "",
    modelGui: ""
  };

  let fazScala = gui.add(parametrosGUI, 'scalarPuppet').min(0.1).max(2).step(0.1).name("Scale");
  fazScala.onChange(function (parametro) {
    animals[parametrosGUI.modelGui].scale.x = parametro;
    animals[parametrosGUI.modelGui].scale.y = parametro;
    animals[parametrosGUI.modelGui].scale.z = parametro;
  }
  );

  let opcoes = ['vaca1', 'vaca2', 'monkey1', 'monkey2', 'triceratops1', 'triceratops2'];
  let comboChange = gui.add(parametrosGUI, 'geometrias').options(opcoes).name("Objetos");
  comboChange.onChange(function (parametro) {
    switch (parametro) {
      case 'vaca1':
        camera.lookAt(animals['vaca1'].position);
        parametrosGUI.modelGui = "vaca1";
        break;
      case 'vaca2':
        camera.lookAt(animals['vaca2'].position);
        parametrosGUI.modelGui = "vaca2";
        break;
      case 'monkey1':
        camera.lookAt(animals['monkey1'].position);
        parametrosGUI.modelGui = "monkey1";
        break;
      case 'monkey2':
        camera.lookAt(animals['monkey2'].position);
        parametrosGUI.modelGui = "monkey2";
        break;
      case 'triceratops1':
        camera.lookAt(animals['triceratops1'].position);
        parametrosGUI.modelGui = "triceratops1";
        break;
      case 'triceratops2':
        camera.lookAt(animals['triceratops2'].position);
        parametrosGUI.modelGui = "triceratops2";
        break;
    }
  }
  );
  let folderPosition = gui.addFolder("Position");

  let positionX = folderPosition.add(parametrosGUI, 'positionX').min(-6).max(6).step(0.1).name("Position X");
  positionX.onChange(function (parametro) {
    animals[parametrosGUI.modelGui].position.x = parametro;
  }
  );
  let positionY = folderPosition.add(parametrosGUI, 'positionY').min(-10).max(10).step(0.1).name("Position Y");
  positionY.onChange(function (parametro) {
    animals[parametrosGUI.modelGui].position.y = parametro;
  }
  );
  let positionZ = folderPosition.add(parametrosGUI, 'positionZ').min(-6).max(6).step(0.1).name("Position Z");
  positionZ.onChange(function (parametro) {
    animals[parametrosGUI.modelGui].position.z = parametro;
  }
  );

  let colorFolder = gui.addFolder('Coloros');
  let sColor = colorFolder.addColor(parametrosGUI, 'skyColor').name("SkyColor");
  sColor.onChange(function (parametro) {
    scene.background = new THREE.Color(parametro);
  }
  );
  let gColor = colorFolder.addColor(parametrosGUI, 'groundColor').name("Ground");
  gColor.onChange(function (parametro) {
    ground.material.color.setHex(parametro.replace("#", "0x"));
  }
  );

  gui.open();
}

var loadAnimals = function () {
  objLoader = new THREE.OBJLoader();

  objLoader.load(
    'assets/Cow.obj',
    function (obj) {
      animals['vaca1'] = obj;

      obj.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
          child.material.color.setHex("0x000101");
        }
      });

      obj.scale.y = 3;
      obj.scale.z = 3;
      obj.scale.x = 3;

      obj.position.y = 0;
      obj.position.x = -50;
      obj.position.z = 0;

      scene.add(animals['vaca1']);


      camera.lookAt(animals['vaca1'].position);
      parametrosGUI.modelGui = "vaca1";
    },
  );

  objLoader.load(
    'assets/Cow.obj',
    function (obj) {
      animals['vaca2'] = obj;

      obj.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
          child.material.color.setHex("0x005555");
        }
      });
      animals['vaca2'].scale.y = 3;
      animals['vaca2'].scale.z = 3;
      animals['vaca2'].scale.x = 3;

      animals['vaca2'].position.y = 0;
      animals['vaca2'].position.x = 80;
      animals['vaca2'].position.z = 0;
      scene.add(animals['vaca2']);
    }
  );
  objLoader.load(
    'assets/Monkey_Suzanne.obj',
    function (object) {
      animals['monkey1'] = object;

      object.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
          child.material.color.setHex("0xfa2128");
        }
      });

      animals['monkey1'].scale.x = 1;
      animals['monkey1'].scale.y = 1;
      animals['monkey1'].scale.z = 1;
      animals['monkey1'].position.y = 1;
      animals['monkey1'].position.z = 0;
      animals['monkey1'].position.x = 0;

      scene.add(animals['monkey1']);
    },
  );
  objLoader.load(
    'assets/Monkey_Suzanne.obj',
    function (object) {
      animals['monkey2'] = object;

      object.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
          child.material.color.setHex("0xff0055");
        }
      });

      animals['monkey2'].scale.x = 3;
      animals['monkey2'].scale.y = 3;
      animals['monkey2'].scale.z = 3;
      animals['monkey2'].position.x = 10
      animals['monkey2'].position.z = 0
      animals['monkey2'].position.y = 0

      scene.add(animals['monkey2']);
    },
  );

  objLoader.load(
    'assets/triceratops.obj',
    function (object) {
      animals['triceratops1'] = object;

      object.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
          child.material.color.setHex("0x115323");
        }
      });

      animals['triceratops1'].scale.x = 3;
      animals['triceratops1'].scale.y = 3;
      animals['triceratops1'].scale.z = 3;
      animals['triceratops1'].position.z = -40;
      animals['triceratops1'].position.x = 20;
      animals['triceratops1'].position.y = -2.5;

      scene.add(animals['triceratops1']);
    },
  );

  objLoader.load(
    'assets/triceratops.obj',
    function (object) {
      animals['triceratops2'] = object;

      object.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
          child.material.color.setHex("0x555500");
        }
      });

      animals['triceratops2'].scale.x = 2;
      animals['triceratops2'].scale.y = 2;
      animals['triceratops2'].scale.z = 2;
      animals['triceratops2'].position.z = 0;
      animals['triceratops2'].position.x = -30;
      animals['triceratops2'].position.y = -2.5;

      scene.add(animals['triceratops2']);
    }
  );
}

var init = function () {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x00BFFF)

  camera = new THREE.PerspectiveCamera(
    40,
    window.innerWidth / window.innerHeight,
    1,
    180
  );
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  loadAnimals();

  camera.position.z = 50;
  camera.position.x = 0;
  camera.position.y = 1.7;

  let spot = new THREE.SpotLight(0xffffff);
  spot.position.set(100, 100, 100);
  scene.add(spot);

  scene.add(new THREE.AmbientLight(0xffffff));

  ground = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(1000, 1000),
    new THREE.MeshBasicMaterial({ color: 0x006400 })
  );

  ground.rotation.x -= Math.PI / 2;
  ground.position.y = -2;

  scene.add(ground);
  loadAll();
  render();

  document.addEventListener('keydown', apertouButao);
  document.addEventListener('keyup', soltouBotao);

  document.addEventListener('mousewheel', onMouseWheel);
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mousedown', onMouseClick);
  document.addEventListener('mouseup', onMouseUp);
};

var clicando = false;
var mouserPosAnterior = {
  x: 0,
  y: 0
}

var onMouseMove = function (e) {
  let diferencaMovimento = {
    x: e.offsetX - mouserPosAnterior.x,
    y: e.offsetY - mouserPosAnterior.y
  }

  if (clicando) {
    camera.rotation.y += paraRadianos(diferencaMovimento.x) * 0.1;
  }
  mouserPosAnterior = {
    x: e.offsetX,
    y: e.offsetY
  }
};

var onMouseClick = function (e) {
  clicando = true;
};

var onMouseUp = function (e) {
  clicando = false;
};

var onMouseWheel = function (e) {

}



var key_r = false;
var key_space = false;
var key_q = false;

var soltouBotao = function (e) {

  if (e.keyCode == 82) { //r
    key_r = false;
  }
  if (e.keyCode == 32) { //espaço
    key_space = false;
  }
  if (e.keyCode == 81) { //espaço
    key_q = false;
  }
}


var apertouButao = function (e) {
  console.log(e.keyCode);

  if (e.keyCode == 82) { //r
    key_r = true;
  }
  if (e.keyCode == 32) { // space
    key_space = true;
    pulando = true;
  }

  if (e.keyCode == 81) { // q
    key_q = true;
  }

  if (e.keyCode == 38) { //douwn
    camera.position.z -= 0.5;
    //animals["puppet"]["tronco"].position.z += 1;
  }
  if (e.keyCode == 40) { // UP
    //animals["puppet"]["tronco"].position.z -= 1;
    camera.position.z += 0.5;
  }
}

var render = function () {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
};

function paraRadianos(angulo) {
  return angulo * (Math.PI / 180);
}

window.onload = this.init;