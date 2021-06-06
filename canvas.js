var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
console.log(canvas);
/* 
c.fillStyle = "rgba(255, 0, 0, 0.7)"
c.fillRect(100, 100, 100, 100);
c.fillStyle = "rgba(0, 0, 255, 0.7)"
c.fillRect(400, 100, 100, 100);
c.fillStyle = "rgba(0, 255, 0, 0.7)"
c.fillRect(300, 300, 100, 100);
console.log(canvas);

//line
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 300);
c.strokeStyle = "#fa34a3"
c.stroke();
 */

/* 
for (var i = 0; i < 5000; i++){
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
c.beginPath();
c.arc(x, y, 30, 0, Math.PI * 2, false);
c.strokeStyle = 'blue';
c.stroke();
} */
//arc/cirle

function Circle(x, y) {
    this.x = x;
    this.y = y;

    this.draw =function(){

    }
}


var x =Math.random() *  innerWidth;
var y =Math.random() *  innerHeight;
var dx =(Math.random() -0.5)* 5;
var dy =(Math.random() -0.5) * 5;
var radius = 30;
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI * 2, false);
    c.strokeStyle = 'blue'
    c.stroke();
    
if (x + radius > innerWidth || x - radius < 0) {
    dx = -dx;
}
if (y + radius > innerHeight || y - radius < 0) {
    dy = -dy;
}
    x += dx;
    y += dy;
}
animate();