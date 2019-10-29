var xIncrease = 1;
var yIncrease = 1;
var x = 350;
var y = 250;
var size = 20;
var myTitle;

var sketch = function(p) {

  p.setup = function() {
  var myCanvas =  p.createCanvas(700, 500);
  myCanvas.position(380, 170);
  p.background('#02182B');
  myCanvas.mouseClicked(changeColor);


  var myButtonTre = p.createButton('-');
  myButtonTre.mouseClicked(rimpicciolisci);
  myButtonTre.position(250, 380)
  myButtonTre.style("font-size: 85px")

  var myButtonDue = p.createButton('+');
  myButtonDue.mouseClicked(ingrossa);
  myButtonDue.position(1150, 400)



  }

  p.draw = function() {
    p.fill('#D7263D');
    p.stroke(5);
    p.ellipse(x, y, size);
    p.speed = 5;

    x += xIncrease * p.speed;
    y += yIncrease * p.speed;

    if (y > 500 || y < 0) {
      yIncrease = -yIncrease;
    }

    if (x > 700 || x < 0) {
      xIncrease = -xIncrease;
    }

  }

}

var p = new p5(sketch);

function changeColor() {
  p.background('#0197F6');
}

function ingrossa() {
size+= 10;
}

function rimpicciolisci() {
size-= 10;
}
