// directions
var up    = -8;
var right =  1;
var down  =  8;
var left  = -1;
// start at random place
var x = Math.floor(Math.random() * 64) + 1;
var y = Math.floor(Math.random() * 64) + 1;
$('.block:nth-child(' + x + ')').toggleClass('snake');
$('.block:nth-child(' + y + ')').toggleClass('food');
// move function

function move(dir) {
	$('.snake').toggleClass('snake');
	x += dir;
	$('.block:nth-child(' + x + ')').toggleClass('snake');
	console.log(x);
}
var taillen = 0;


// detect arrow keypress
var direction = 0;
$(document).keydown(function(e) {
    switch(e.which) {
        case 37:
				direction = left;
        break;
        case 38:
				direction = up;
        break;
        case 39:
				direction = right;
        break;
        case 40:
				direction = down;
        break;
        default: return;
    }
    e.preventDefault();
});
function makeFood() {
	var y = Math.floor(Math.random() * 64) + 1;
	$('.block:nth-child(' + y + ')').toggleClass('food');
}
setInterval(function() {
	$('.snake').toggleClass('snake');
	x += direction;
	$('.block:nth-child(' + x + ')').toggleClass('snake');
	$('.block:nth-child(' + x + ')').toggleClass('tail');
	for (var i = 0; i < taillen; i++) {
		if (i == 0) {
			
		}
		else {
			$('.block:nth-child(' + i-1 + ')').toggleClass('tail');
		}
	}
	console.log(x);
	if ($('.block:nth-child(' + x + ')').hasClass('food')) {
		taillen++;
		y = Math.floor(Math.random() * 64) + 1;
		if (y == x) {
			makeFood();
		}
	}
	console.log(taillen);
},400);
