var mouseEvent="empty";
var last_X;
var last_Y;
var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var color="red";
var lineWidth=2;
canvas.addEventListener("mousedown", mymousedown)
function mymousedown(e){
mouseEvent="mousedown";
}
canvas.addEventListener("mouseleave", mymouseleave)
function mymouseleave(e){
mouseEvent="mouseleave";
}
canvas.addEventListener("mouseup", mymouseup)
function mymouseup(e){
mouseEvent="mouseup";
}
canvas.addEventListener("touchstart", my_touchstart)
function my_touchstart(e){
mouseEvent="mouseup";
}

canvas.addEventListener("mousemove", mymousemove)
function mymousemove(e){
var current_x=e.clientX-canvas.offsetLeft;
var current_y=e.clientY-canvas.offsetTop;
if(mouseEvent=="mousedown"){//draws only when you have clicked it
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=lineWidth;
    console.log("last position of x and y are,x="+last_X+"y="+last_Y);
ctx.moveTo(last_X,last_Y);//directly places your cursor to this point without drawing anything
console.log("current position of x and y are,x="+current_x+"y="+current_y);
ctx.lineTo(current_x,current_y);// This makes a line from previous point to current point
ctx.stroke();

}
last_X=current_x;
last_Y=current_y;
}
last_X_mobile=last_Y_mobile=0;
canvas.addEventListener("touchmove", mytouchmove)
function mytouchmove(e){
var current_x_mobile=e.touches[0].clientX-canvas.offsetLeft;
var current_y_mobile=e.touches[0].clientY-canvas.offsetTop;
if(mouseEvent!="touchstart"){//draws only when you have clicked it
    console.log("false condition");
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=lineWidth;
    console.log("last position of x and y are,x="+last_X+"y="+last_Y);
ctx.moveTo(last_X_mobile,last_Y_mobile);//directly places your cursor to this point without drawing anything
console.log("current position of x and y are,x="+current_x_mobile+"y="+current_y_mobile);
ctx.lineTo(current_x_mobile,current_y_mobile);// This makes a line from previous point to current point
ctx.stroke();

}
last_X_mobile=current_x_mobile;
last_Y_mobile=current_y_mobile;
}

function clearArea(){
ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);

}
