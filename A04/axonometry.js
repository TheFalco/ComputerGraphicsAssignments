function axonometry() {
	// Make an isometric view, w = 50, a = 16/9, n = 1, f = 101.
	var A1 = [1/50,	 0.0,		0.0,		0.0,
			  0.0,	 16/450,	0.0,		0.0,
			  0.0,	 0.0,	   -1/50,	   -51/50,
		      0.0,	 0.0,		0.0,	    1.0];
			   
	A1 = utils.multiplyMatrices(A1, utils.MakeRotateXMatrix(35.26));
	A1 = utils.multiplyMatrices(A1, utils.MakeRotateYMatrix(45));

	// Make a dimetric view, w = 50, a = 16/9, n = 1, f = 101, rotated 20 around the x-axis
	var A2 =  [1/50,	0.0,		0.0,		0.0,
			   0.0,		16/450,		0.0,		0.0,
			   0.0,		0.0,		-1/50,		-51/50,
			   0.0,		0.0,		0.0,		1.0];
	A2 = utils.multiplyMatrices(A2, utils.MakeRotateXMatrix(20));
	A2 = utils.multiplyMatrices(A2, utils.MakeRotateYMatrix(45));

	// Make a trimetric view, w = 50, a = 16/9, n = 1, f = 101, rotated -30 around the x-axis and 30 around the y-axis
	var A3 =  [1/50,	0.0,		0.0,		0.0,
			   0.0,		16/450,		0.0,		0.0,
			   0.0,		0.0,		-1/50,		-51/50,
			   0.0,		0.0,		0.0,		1.0];
	A3 = utils.multiplyMatrices(A3, utils.MakeRotateXMatrix(-30));
	A3 = utils.multiplyMatrices(A3, utils.MakeRotateYMatrix(30));
			   
	// Make an cavalier projection view, w = 50, a = 16/9, n = 1, f = 101, at 45 degrees
	var O1 =  [1/50,	0.0,		0.0,		0.0,
			   0.0,		16/450,		0.0,		0.0,
			   0.0,		0.0,		-1/50,		-51/50,
			   0.0,		0.0,		0.0,		1.0];
	var hx= -Math.cos(45 * Math.PI / 180);
	var hy= -Math.sin(45 * Math.PI / 180);
	O1 = utils.multiplyMatrices(O1, utils.MakeShearZMatrix(hx, hy));

	// Make a cabinet projection view, w = 50, a = 16/9, n = 1, f = 101, at 60 degrees
	var O2 =  [1/50,	0.0,		0.0,		0.0,
			   0.0,		16/450,		0.0,		0.0,
			   0.0,		0.0,		-1/50,		-51/50,
			   0.0,		0.0,		0.0,		1.0];
    var Hx= -0.5 * Math.cos(60 * Math.PI / 180);
	var Hy= -0.5 * Math.sin(60 * Math.PI / 180);
	O2 = utils.multiplyMatrices(O2, utils.MakeShearZMatrix(Hx, Hy));
	return [A1, A2, A3, O1, O2];
}