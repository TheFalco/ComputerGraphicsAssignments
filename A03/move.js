function move() {
	// Rotate 60 degrees around an arbitrary axis passing through (0,1,-1). The x-axis can be aligned to the arbitrary axis after a rotation of 45 degrees around the z-axis, and then 15 degrees around the y-axis.
	var R1 =[1.0,		0.0,		0.0,		0.0,
			   0.0,		1.0,		0.0,		0.0,
			   0.0,		0.0,		1.0,		0.0,
			   0.0,		0.0,		0.0,		1.0];
	//Computing the matrix
	R1 = utils.multiplyMatrices(utils.MakeTranslateMatrix(0, 1, -1), utils.MakeRotateYMatrix(15));
    R1 = utils.multiplyMatrices(R1, utils.MakeRotateZMatrix(45));
	R1 = utils.multiplyMatrices(R1, utils.MakeRotateXMatrix(60));
	R1 = utils.multiplyMatrices(R1, utils.invertMatrix(utils.MakeRotateZMatrix(45)));
	R1 = utils.multiplyMatrices(R1, utils.invertMatrix(utils.MakeRotateYMatrix(15)));
	R1 = utils.multiplyMatrices(R1, utils.invertMatrix(utils.MakeTranslateMatrix(0, 1, -1)));
	
	// Half the size of the object along a line that bisects the positive x and y axes on the xy-plane. 
	var S1 = [1.0,		0.0,		0.0,		0.0,
			   0.0,		1.0,		0.0,		0.0,
			   0.0,		0.0,		1.0,		0.0,
			   0.0,		0.0,		0.0,		1.0];

	S1 = utils.multiplyMatrices(utils.MakeRotateZMatrix(45), utils.MakeScaleNuMatrix(0.5, 1, 1));
	S1 = utils.multiplyMatrices(S1, utils.invertMatrix(utils.MakeRotateZMatrix(45)));
			   
	// Mirror the starship along a plane passing through (1,1,1), and obtained rotating 15 degree around the x axis the xz plane
	var S2 =  [1.0,		0.0,		0.0,		0.0,
			   0.0,		1.0,		0.0,		0.0,
			   0.0,		0.0,		1.0,		0.0,
			   0.0,		0.0,		0.0,		1.0];

	S2 = utils.multiplyMatrices(utils.MakeTranslateMatrix(1,1,1), utils.MakeRotateXMatrix(15));
	S2 = utils.multiplyMatrices(S2, utils.MakeScaleNuMatrix(1, -1, 1));
	S2 = utils.multiplyMatrices(S2, utils.invertMatrix(utils.MakeRotateXMatrix(15)));
	S2 = utils.multiplyMatrices(S2, utils.invertMatrix(utils.MakeTranslateMatrix(1,1,1)));
			   
	// Apply the inverse of the following sequence of transforms: rotation of 30 degree around the Y axis then Translation of (0, 0, 5), and finally a uniform scaling of a factor of 3.
	var I1 =  [1.0,		0.0,		0.0,		0.0,
			   0.0,		1.0,		0.0,		0.0,
			   0.0,		0.0,		1.0,		0.0,
			   0.0,		0.0,		0.0,		1.0];

    I1 = utils.multiplyMatrices(utils.invertMatrix(utils.MakeRotateYMatrix(30)), utils.invertMatrix(utils.MakeTranslateMatrix(0, 0, 5)));
	I1 = utils.multiplyMatrices(I1, utils.invertMatrix(utils.MakeScaleMatrix(3)));

	return [R1, S1, S2, I1];
}

