function setup() {
  createCanvas(600, 600);
  createPlanets();
}

var planets = [];

function planet(color, size, position, speed) {
  this.colour = color;
  this.size = size;
  this.x = 0;
  this.y = position;
  this.rotation = 0;
  this.speed = speed;
}

function createPlanets() {
  planets.push(new planet(color(173, 168, 165), 10, 60, 2.0 * 2));
  planets.push(new planet(color(249, 194, 26), 20, 80, 1.464 * 2));
  planets.push(new planet(color(40, 40, 181), 20, 100, 1.244 * 2));
  planets.push(new planet(color(200, 48, 14), 15, 140, 1.006 * 2));
}

function drawPlanets() {
  for (var i = 0; i < planets.length; i++) {
    translate(300, 300);
    rotate(planets[i].rotation);
    planets[i].rotation += 0.01 * planets[i].speed;
    fill(planets[i].colour);
    ellipse(0, planets[i].y, planets[i].size, planets[i].size);
    resetMatrix();
  }
}

function draw() {
  background(0);
  noStroke();
  fill(252,150,1);
  ellipse(300, 300, 100, 100);
  drawPlanets();
}
