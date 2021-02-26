function draw() {

	//Draws the straight lines
	line(0.3, 0.3,-0.5,0.3);
	line(-0.5,-0.3,0.3,-0.3);
	line(-0.5,-0.3,-0.5,0.3);

	//Draw the curved line
	var start = 270*Math.PI/180;
	var end = 90*Math.PI/180;
	//We want to increment the angle of a fraction of 64
	dTheta = (Math.abs(start-end)/64);
	theta = start;
	radius = 0.3;
		for(i = 0; i <= 64; i++) {
		// The circle is centered 0.3, 0 so we have to adjust the center to x
		x_i = Math.cos(theta) * radius + 0.3;
		y_i = Math.sin(theta) * radius;
		theta = theta + dTheta;
		x_f = Math.cos(theta) * radius + 0.3;
		y_f = Math.sin(theta) * radius;
		line(x_i,y_i,x_f,y_f);
	}
}
