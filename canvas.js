var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
console.log(canvas);

c.fillRect(100, 100, 100, 100);
console.log(canvas);
