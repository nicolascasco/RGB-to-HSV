var slider1, slider2, slider3;
var h = 0;
var s, v;
var R, G, B, Cmax, Cmin, delta;

function setup() {
	createCanvas(400, 400);
	slider1 = createSlider(0, 255, 0);
	slider2 = createSlider(0, 255, 0);
	slider3 = createSlider(0, 255, 0);
}

function draw() {
	R = slider1.value() / 255;
	G = slider2.value() / 255;
	B = slider3.value() / 255;
	Cmax = max(R, G, B);
	Cmin = min(R, G, B);
	delta = Cmax - Cmin;

	if (Cmax <= 0) {
		h = 0;
		s = 0;
		console.log("cero");
	} else {
		s = delta / Cmax;
		if (Cmax == R) {
			h = ((G - B) / delta);
		} else if (Cmax == G) {
			h = (B - R) / delta + 2;
		} else {
			h = (R - G) / delta + 4;

		}

		h = h * 60;
		if (h < 0) {
			h += 360;
		}
	}
	v = Cmax;
	
	background(slider1.value(), slider2.value(), slider3.value());
	console.log("R:" + slider1.value());
	console.log("G:" + slider2.value());
	console.log("B:" + slider3.value());
	console.log("h: " + h);
	console.log("s: " + s);
	//console.log(Cmax);
	console.log("v: " + v);
}