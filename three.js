

// We need 3 things everytime we use Three.js
 // Scene + Camera + Renderer
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 80, window.innerWidth / window.innerHeight, 0.2, 1000 )
const renderer = new THREE.WebGLRenderer({ antialias: true})

renderer.setSize( window.innerWidth, window.innerHeight )
// sets renderer background color
renderer.setClearColor("#ffffff")
document.body.appendChild( renderer.domElement )
camera.position.z = 5

// resize canvas on resize window
window.addEventListener( 'resize', () => {
    let width = window.innerWidth
    let height = window.innerHeight
    renderer.setSize( width, height )
    camera.aspect = width / height
    camera.updateProjectionMatrix()
})

// basic cube
var geometry = new THREE.BoxGeometry( 1, 1, 1)
var material = new THREE.MeshStandardMaterial( { color: "#82bfa1", flatShading: true, metalness: 0, roughness: 1 })
var cube = new THREE.Mesh ( geometry, material )
scene.add( cube )

// polyhedron not working
// const verticesOfCube = [
//     -1,-1,-1,    1,-1,-1,    1, 1,-1,    -1, 1,-1,
//     -1,-1, 1,    1,-1, 1,    1, 1, 1,    -1, 1, 1,
// ];

// const indicesOfFaces = [
//     2,1,0,    0,3,2,
//     0,4,7,    7,3,0,
//     0,1,5,    5,4,0,
//     1,2,6,    6,5,1,
//     2,3,7,    7,6,2,
//     4,5,6,    6,7,4
// ];

// var poly = new THREE.PolyhedronGeometry( verticesOfCube, indicesOfFaces, 6, 2 );
// var materials = new THREE.MeshStandardMaterial( { color: "#82bfa1", flatShading: true, metalness: 0, roughness: 1 })
// var hedron = new THREE.Mesh ( poly, materials )
// scene.add( poly )

// wireframe cube
var geometry = new THREE.BoxGeometry( 3, 3, 3)
var material = new THREE.MeshBasicMaterial( {
    color: "#008793", wireframe: true, transparent: true
})
var wireframeCube = new THREE.Mesh ( geometry, material )
scene.add( wireframeCube )

// ambient light
var ambientLight = new THREE.AmbientLight ( 0xffffff, 0.2)
scene.add( ambientLight )

// point light
var pointLight = new THREE.PointLight( 0xffffff, 1 );
pointLight.position.set( 25, 50, 25 );
scene.add( pointLight );

// sphere not working
// const sphereGeometry = new THREE.SphereGeometry( 15, 32, 16 );
// const materials = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
// const sphere = new THREE.Mesh( sphereGeometry, materials );
// scene.add( sphere );


function animate() {
    requestAnimationFrame( animate )
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.05;
    wireframeCube.rotation.x -= 0.01;
    wireframeCube.rotation.y -= 0.03;
    renderer.render( scene, camera )
}
animate()