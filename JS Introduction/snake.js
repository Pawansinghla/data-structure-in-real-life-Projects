

//canvas is used to draw graphics

function init(){
canvas=document.getElementById("mycanvas")
w=canvas.width=500;
h=canvas.height=500;
pen=canvas.getContext('2d')
game_over=false
rect={
    x:20,
    y:20,
    w:40,
    h:40,
    speed:25

}




}
function draw(){
    pen.clearRect(0,0,w,h)
   
    pen.fillRect(rect.x,rect.y,rect.w,rect.h)
    pen.fillStyle="red"

}
function update(){
rect.x+=rect.speed
if(rect.x>w-rect.w||rect.x<0){
    rect.speed*=-1
}
   

}
function gameloop(){
    if(game_over==true)
clearInterval(f)

    draw();
    update()
}
init();
var f=setInterval(gameloop,100)

