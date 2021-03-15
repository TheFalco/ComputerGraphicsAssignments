function world() {
	// Positioned in 0,0,-3. Yaw=90, Pitch and Roll = 0
	var A1 =  [1.0, 0.0, 0.0, 0.0,
			   0.0, 1.0, 0.0, 0.0,
			   0.0, 0.0, 1.0, 0.0,
			   0.0, 0.0, 0.0, 1.0];
	//T*Ry*Rx*Rz*S
	A1 = utils.multiplyMatrices(utils.MakeTranslateMatrix(0, 0, -3), utils.MakeRotateYMatrix(90));
			   
	// Positioned in 0,2,0. Yaw=0, Pitch = 60, Roll = 0, 1/10th of size
	var A2 =  [1.0, 0.0, 0.0, 0.0,
			   0.0, 1.0, 0.0, 0.0,
			   0.0, 0.0, 1.0, 0.0,
			   0.0, 0.0, 0.0, 1.0];
	A2 =utils.multiplyMatrices( utils.MakeTranslateMatrix(0, 2, 0),
		utils.multiplyMatrices(utils.MakeRotateXMatrix(60), utils.MakeScaleMatrix(1/10))
	);
			   
	// Positioned in 0,0,0. Yaw=30, Pitch = 0 Roll = 45
	var A3 =  [1.0, 0.0, 0.0, 0.0,
			   0.0, 1.0, 0.0, 0.0,
			   0.0, 0.0, 1.0, 0.0,
			   0.0, 0.0, 0.0, 1.0];

	A3 =utils.multiplyMatrices( utils.MakeTranslateMatrix(0, 0, 0),
	utils.multiplyMatrices(utils.MakeRotateYMatrix(30), utils.MakeRotateZMatrix(45))
	);
			   
	// Positioned in 2,0,2. Yaw=180, Pitch and Roll = 0, two times wider
	var A4 =  [1.0, 0.0, 0.0, 0.0,
			   0.0, 1.0, 0.0, 0.0,
			   0.0, 0.0, 1.0, 0.0,
			   0.0, 0.0, 0.0, 1.0];
	A4 = utils.multiplyMatrices(utils.MakeTranslateMatrix(2, 0, 2), 
		utils.multiplyMatrices(utils.MakeRotateYMatrix(180), utils.MakeScaleNuMatrix(2, 1, 1))
	);

	// Positioned in 1,-1,2.5. Yaw=-30, Pitch = 45 Roll = -15, Scaled with the following factors: 0.8 (x), 0.75 (y), 1.2 (z)
	var A5 =  [1.0, 0.0, 0.0, 0.0,
			   0.0, 1.0, 0.0, 0.0,
			   0.0, 0.0, 1.0, 0.0,
			   0.0, 0.0, 0.0, 1.0];

	A5 = utils.multiplyMatrices( utils.MakeTranslateMatrix(1, -1, 2.5),
			utils.multiplyMatrices( utils.MakeRotateYMatrix(-30),
				utils.multiplyMatrices( utils.MakeRotateXMatrix(45),
					utils.multiplyMatrices( utils.MakeRotateZMatrix(-15), utils.MakeScaleNuMatrix(0.8, 0.75, 1.2))))
	);
	return [A1, A2, A3, A4, A5];
}