var canvas = document.getElementById('paint');

var ctx = canvas.getContext('2d');
resize();

function resize(){
	ctx.canvas.width = window.innerWidth;
	ctx.canvas.height = window.innerHeight;
}

window.addEventListener('resize', resize);
document.addEventListener('mousemove', paint);
document.addEventListener('mousedown', setPosition);
document.addEventListener('mouseenter', setPosition);

var position = {x:0, y:0};

function setPosition(e){
	position.x = e.clientX;
	position.y = e.clientY;
}

function paint(e){
	if(e.buttons !==1 ) return;
	var color = document.getElementById('color').value;
	var width = document.getElementById('width').value;
	
	ctx.beginPath();
	ctx.lineWidth = width;
	ctx.lineCap = 'round';
	ctx.strokeStyle = color;
	
	ctx.moveTo(position.x,position.y);
	setPosition(e);
	ctx.lineTo(position.x,position.y);
	
	ctx.stroke();
}	