var c = document.getElementById("canvas-circle");
var ctx = c.getContext("2d");
var heightRatio = 1.5;
ctx.height = ctx.width * heightRatio;

ctx.beginPath();
ctx.arc(100, 75, 50, 0, 2 * Math.PI);
ctx.stroke();

