let para
let slider
let sliderValue=16
function setup() {
  createCanvas(400, 400);
  // Help blind or low-vision users understand your sketch
  describe("A 400 by 400 pixel gray canvas.");
  slider = createSlider(12,72,16)
  slider.position(0,40)
  slider.changed(sliderChanged)
}

function draw() {
  background(220);
  para = createP('idk')
  para.position(0,20)
  para.style("background-color:blue")

  push()
  textSize(sliderValue)
  text(sliderValue,width/2,height/2)
  pop()
}

function sliderChanged(){
  sliderValue = slider.value()
}