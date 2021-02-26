function move() {
	// Translate of +1 on the x axis, and -2 on the y axis
	var T1 =  [1.0,		0.0,		0.0,		1.0,
			   0.0,		1.0,		0.0,		-2.0,
			   0.0,		0.0,		1.0,		0.0,
			   0.0,		0.0,		0.0,		1.0];
			   
	// Rotate of 30 degrees on the x axis
	let theta = 30;
	//Converting degrees to radiants
	theta = 30 * Math.PI / 180;
	var R1 =  [1.0,		0.0,		0.0,		0.0,
			   0.0,		Math.cos(theta),		-Math.sin(theta),		0.0,
			   0.0,		Math.sin(theta),		Math.cos(theta),		0.0,
			   0.0,		0.0,		0.0,		1.0];
			   
	// Make the object 2 times bigger
	var S1 =  [2.0,		0.0,		0.0,		0.0,
			   0.0,		2.0,		0.0,		0.0,
			   0.0,		0.0,		2.0,		0.0,
			   0.0,		0.0,		0.0,		1.0];
			   
	// Make the object 2 times longer on the z axis, and half on the other axis
	var S2 =  [0.5,		0.0,		0.0,		0.0,
			   0.0,		0.5,		0.0,		0.0,
			   0.0,		0.0,		2.0,		0.0,
			   0.0,		0.0,		0.0,		1.0];

	// Mirror over the z axis
	var S3 =  [-1.0,		0.0,		0.0,		0.0,
			   0.0,		-1.0,		0.0,		0.0,
			   0.0,		0.0,		1.0,		0.0,
			   0.0,		0.0,		0.0,		1.0];
			   
	// Flatten over the x axis
	var S4 =  [0.0,		0.0,		0.0,		0.0,
			   0.0,		1.0,		0.0,		0.0,
			   0.0,		0.0,		1.0,		0.0,
			   0.0,		0.0,		0.0,		1.0];

	// Make a shear along the Y axis, with a factor of 1 along the z axis
	var H1 =  [1.0,		0.0,		0.0,		0.0,
			   0.0,		1.0,		0.0,		0.0,
			   0.0,		1.0,		1.0,		0.0,
			   0.0,		0.0,		0.0,		1.0];

	return [T1, R1, S1, S2, S3, S4, H1];
}

