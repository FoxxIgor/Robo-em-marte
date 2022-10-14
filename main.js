var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
var roverWidth = 100;
var arrayBackground = ["mars.jpg", "https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044630500405147E01_DXXX.jpg", "https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044630000503560E01_DXXX.jpg", "https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044630340405131C00_DXXX.jpg"];
var roverHeight = 90;
var randomNumber = Math.floor(Math.random()*4);  
var backgroundImage =arrayBackground[randomNumber];
var roverImage ="rover.png";
var roverX = 10;
var roverY = 10;


function add(){
    background =new Image(); /* Ela define a var como uma img */
    background.onload=uploadBackground;
    background.src=backgroundImage;
    rover =new Image();
    rover.onload=uploadRover;
    rover.src=roverImage;
}
function uploadBackground(){
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height); /* Ele desenha uma imagem */
}
function uploadRover(){
    ctx.drawImage(rover, roverX, roverY, roverWidth, roverHeight);
}
window.addEventListener("keydown", mykeydown);

function mykeydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);
    if(keypressed=='40'){
        down();
    };
    if( keypressed=='39'){
        right();
    };
    if( keypressed=='38'){
        up();
    };
    if(keypressed=='37'){
        left();
    };
}
function down(){
    if(roverY<=400){

        roverY=roverY+5;
        uploadBackground();
        uploadRover();
    };
}

function up(){
    if(roverY>=20){
        roverY=roverY-5;
        uploadBackground();
        uploadRover();
    };
}

function right(){
    if(roverX<=700){
        roverX=roverX+5;
        uploadBackground();
        uploadRover();
    };
}
function left(){
    if(roverX>=20){
        roverX=roverX-5;
        uploadBackground();
        uploadRover();
    };
}