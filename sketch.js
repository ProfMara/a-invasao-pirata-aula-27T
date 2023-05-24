const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//facilitar a sua vida
const Body = Matter.Body;

var engine, world, ground;
var solo, parado;
var cenario;
var torre, torreIMG;

var angulo = 15;

//CRIAR A MATRIZ DE BALAS VAZIA
var balas = [];
var navios = [];
function preload(){
   
}


function setup() {
    canvas = createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;

   
}

function draw() {
    Engine.update(engine);
    background("cyan");
    //coloca uma imagem no meio do jogo
  
  
}