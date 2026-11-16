let para;
let slider;
let sliderChange;
function setup() {
  createCanvas(400, 400);
  // Help blind or low-vision users understand your sketch
  describe("A 400 by 400 pixel gray canvas.");
  slider = createSlider(12, 72, 16);
}

function draw() {
  background(220);
  para = createP("idk");
  para.position(0, 20);
  para.style("background-color:blue");
}
