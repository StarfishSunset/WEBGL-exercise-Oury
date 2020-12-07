function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}
function draw() {
  background(200);
  lights();
  orbitControl();
  // rotateX(PI / 4)
  // rotateY(millis() / 20000)
  push();
  for (x = -width / 2; x < width / 2; x += 30) {
    for (y = -height / 2; y < height / 2; y += 30) {
      let z = x + y/2;
      z = sin(dist(x, y, 0, 0)/100 + frameCount/30)*50
      push();
      translate(x, y, z);
      fill(random(5, 100))
      noStroke();
      plane(30);
      pop();
    }
  }
pop();


fill(255)
noStroke();
translate(20, 20, 30);
sphere(30);

translate(50, 50, 50)
sphere(20)

translate(30, -70, 40);
sphere(10)

// traslate(20, -80, 50);
// sphere(5)
}