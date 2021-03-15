function normVector (v) {
	let den= Math.sqrt(v[0]*v[0] + v[1]*v[1] + v[2]*v[2]);
	let val = [v[0]/den, v[1]/den, v[2]/den]; 
	return val;
}

function view() {
	// Make a Look-In-Direction matrix centered at (5,2.5,0), looking west and aiming 30 degrees down.
	var A1 =  [1.0,		0.0,		0.0,		0.0,
			   0.0,		1.0,		0.0,		0.0,
			   0.0,		0.0,		1.0,		0.0,
			   0.0,		0.0,		0.0,		1.0];
			   
	//(T*Ry*Rx*Rz)^-1
	
	A1 =utils.multiplyMatrices(
			utils.MakeRotateXMatrix(30), utils.multiplyMatrices(utils.MakeRotateYMatrix(-90), utils.MakeTranslateMatrix(-5, -2.5, 0))
		);

	// Make a Look-In-Direction matrix centered at (0,-1,-5), angled 170 degrees, with an elevation of 15 degrees, and a roll of 45 degrees.
	var A2 =  [1.0,		0.0,		0.0,		0.0,
			   0.0,		1.0,		0.0,		0.0,
			   0.0,		0.0,		1.0,		0.0,
			   0.0,		0.0,		0.0,		1.0];
			   
	A2 =utils.multiplyMatrices(
		utils.MakeRotateZMatrix(-45), utils.multiplyMatrices(
			utils.MakeRotateXMatrix(-15), utils.multiplyMatrices(utils.MakeRotateYMatrix(-170), utils.MakeTranslateMatrix(0, 1, 5))
		)
	);
	// Make a Look-At-Matrix, centered at (-4, 2, -4), aiming at (0,0.5,0.5) and with up-vector (0,1,0).
		var A3 =  [1.0,		0.0,		0.0,		0.0,
			   0.0,		1.0,		0.0,		0.0,
			   0.0,		0.0,		1.0,		0.0,
			   0.0,		0.0,		0.0,		1.0];
			   
	let u = [0, 1, 0];
	let c = [-4, 2, -4];
	let a = [0, 0.5, 0.5];
	let Vz = normVector([c[0] - a[0], c[1] - a[1], c[2] - a[2]]);
	console.log(Vz);
	let Vx = normVector(utils.crossVector(normVector(u), Vz));
	let Vy = utils.crossVector(Vz, Vx);

	A3 =   [Vx[0],  Vy[0], Vz[0], c[0],
			Vx[1],  Vy[1], Vz[1], c[1], 
			Vx[2],  Vy[2], Vz[2], c[2],
			0.0,    0.0,    0.0,  1.0];

	A3 = utils.invertMatrix(A3);

	// Make a Look-At-Matrix, centered at (2.57, 0, 0), aiming at (2.8,0,-1) and with up-vector (1,0,0).
		var A4 =  [1.0,		0.0,		0.0,		0.0,
			   0.0,		1.0,		0.0,		0.0,
			   0.0,		0.0,		1.0,		0.0,
			   0.0,		0.0,		0.0,		1.0];
	u = [1, 0, 0];
	c = [2.57, 0, 0];
	a = [2.8, 0, -1];
	Vz = normVector([c[0] - a[0], c[1] - a[1], c[2] - a[2]]);
	console.log(Vz);
	Vx = normVector(utils.crossVector(normVector(u), Vz));
	Vy = utils.crossVector(Vz, Vx);

	A4 =   [Vx[0],  Vy[0], Vz[0], c[0],
	Vx[1],  Vy[1], Vz[1], c[1], 
	Vx[2],  Vy[2], Vz[2], c[2],
	0.0,    0.0,    0.0,  1.0];

	A4 = utils.invertMatrix(A4);

	return [A1, A2, A3, A4];
}