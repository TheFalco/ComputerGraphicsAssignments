function degreesToRad(angle) {
	return (angle*Math.PI/180);
}
function OneOverTan(angle) {
	return (1/Math.tan(degreesToRad(angle)));
}
function perspective() {
	// Make perspective projection, FoV-y = 70 deg, a = 16/9, n = 1, f = 101.
	var A1 =  [OneOverTan(70/2)/(16/9),	0.0,		0.0,		0.0,
			   0.0,		OneOverTan(70/2),		0.0,		0.0,
			   0.0,		0.0,		-1.02,		-2.02,
			   0.0,		0.0,		-1,		0.0];
			   
	// Make perspective projection, FoV-y = 105 deg, a = 16/9, n = 1, f = 101
	var A2 =  [OneOverTan(105/2)/(16/9),	0.0,		0.0,		0.0,
			   0.0,		OneOverTan(105/2),		0.0,		0.0,
			   0.0,		0.0,		(101+1)/(1-101),		2*101*1/(1-101),
			   0.0,		0.0,		-1,		0.0];
			   
	// Make perspective projection, FoV-y = 40 deg, a = 16/9, n = 1, f = 101
	var A3 =  [OneOverTan(40/2)/(16/9),	0.0,		0.0,		0.0,
			   0.0,		OneOverTan(40/2),		0.0,		0.0,
			   0.0,		0.0,		(101+1)/(1-101),		2*101*1/(1-101),
			   0.0,		0.0,		-1,		0];
			   
	// Make perspective projection, FoV-y = 90 deg, a = 4/3, n = 1, f = 101. Note: since the aspect ratio is not correct, the image should appear to be deformed
	var O1 =  [OneOverTan(90/2)/(4/3),	0.0,		0.0,		0.0,
			   0.0,		OneOverTan(90/2),		0.0,		0.0,
			   0.0,		0.0,		(101+1)/(1-101),		2*101*1/(1-101),
			   0.0,		0.0,		-1,		0];

	// Make perspective projection, l = -1.2, r = 0, t = 0.3375, b = -0.3375, n = 1, f = 101. Note: due to the asimmetry of this projection, only the left part of the scene should be visible
	function M1(n, r, l) {
		return ((2*n)/(r-l));
	}
	function M3(r, l) {
		return (r+l)/(r-l);
	}
	function M6(n, t, b) {
		return ((2*n)/(t-b));
	}
	function M7(t, b) {
		return (t+b)/(t-b);
	}
	function M11(f, n) {
		return (f+n)/(n-f);
	}
	function M12(n, f) {
		return (2*f*n)/(n-f);
	}
	
	var O2 =  [M1(1, 0, -1.2),		0.0,						M3(0, -1.2),				0.0,
			   0.0,					M6(1, 0.3375, -0.3375),		M7(0.3375, -0.3375),		0.0,
			   0.0,					0.0,						M11(101, 1),				M12(1, 101),
			   0.0,					0.0,						-1,							0.0];

	return [A1, A2, A3, O1, O2];
}