var camera, scene, renderer, composer;
var object, light;

var glitchPass;

var white = "hsl(0, 100%, 100%)";
var aLittleGray = "hsl(0, 100%, 98%)";
var objCol = "hsl(0, 0%, 100%)";
var purple = "hsl(277, 88%, 56%)";
var container, stats;

init();
animate();

function updateOptions() {
    var wildGlitch = document.getElementById('wildGlitch');
    glitchPass.goWild=wildGlitch.checked;
}

function init() {

    // renderer = new THREE.WebGLRenderer();
    renderer = new THREE.WebGLRenderer( { antialias: false } );
    renderer.setClearColor( white );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    renderer.autoClear = false;
    renderer.sortObjects = false;

    //

    camera = new THREE.PerspectiveCamera( 130, window.innerWidth / window.innerHeight, 1, 1000 );
    camera.position.z = 400;

    scene = new THREE.Scene();
    // scene.fog = new THREE.Fog( white, 1, 200 );
    scene.fog = new THREE.FogExp2(white, 0.0050);
    scene.background = new THREE.Color( white );

    object = new THREE.Object3D();
    scene.add( object );

    var geometry = new THREE.SphereGeometry( 1, 10, 1 );
    var geometry2 = new THREE.TorusGeometry( 20, 10, 10, 50 );
    var geo3 = new THREE.IcosahedronGeometry(1)

    material = new THREE.MeshPhongMaterial( { color: "hsl(0, 0%, 50%)", shading: THREE.FlatShading } );
    // material.wireframe = true;
    // material.wireframeLinewidth = 10;

    for ( var i = 0; i < 80; i ++ ) {
        var mesh = new THREE.Mesh( geo3, material );
        mesh.position.set( Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5 ).normalize();
        mesh.position.multiplyScalar( Math.random() * 500 );
        mesh.rotation.set( Math.random() * 2, Math.random() * 2, Math.random() * 4 );
        mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * 50;
        object.add( mesh );
    }

    var torus = new THREE.Mesh( geometry2, material );
    torus.position.set(0,0,0).normalize();
    torus.scale.x = torus.scale.y = torus.scale.z = 40;
    object.add( torus );

    scene.add( new THREE.AmbientLight( "hsl(277, 88%, 40%)" ) );

    light = new THREE.DirectionalLight( "hsl(0, 100%, 100%)" );
    light.position.set( 0, 1, -1 );
    scene.add( light );

    hLight = new THREE.HemisphereLight(purple, 0.5);
    hLight.position.set(0,1,0);
    scene.add(hLight);

    // postprocessing

    composer = new THREE.EffectComposer( renderer );
    composer.addPass( new THREE.RenderPass( scene, camera ) );

    glitchPass = new THREE.GlitchPass();
    glitchPass.renderToScreen = true;
    composer.addPass( glitchPass );

    //

    window.addEventListener( 'resize', onWindowResize, false );

    updateOptions();

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
    composer.setSize( window.innerWidth, window.innerHeight );


}

function animate() {

    requestAnimationFrame( animate );

    var time = Date.now();


    object.rotation.x += 0.005;
    object.rotation.y += 0.01;
    object.rotation.z += 0.002;

    composer.render();
    //renderer.render(scene, camera);

}