function Anim1(t) {
	// moving car
	var out = utils.multiplyMatrices(utils.MakeScaleMatrix(0.25), utils.MakeTranslateMatrix(t,2,0));
	return out;
}

function Anim2(t) {
	// bumping code
	var out = utils.multiplyMatrices(utils.MakeScaleMatrix(0.25), utils.MakeTranslateMatrix(3, 3 - Math.abs(2*(2*t/2 - Math.floor(2*t/2+1/2))), 0)); //Triangular Wave
	return out;
}

function Anim3(t) {
	// rotating fan
	var out = utils.multiplyMatrices(
		utils.multiplyMatrices(
			utils.multiplyMatrices(utils.MakeScaleMatrix(0.25),utils.MakeTranslateMatrix(2+ 0.5,3+ 0.5,0)
			), utils.MakeRotateZMatrix(360*t)
			), utils.MakeTranslateMatrix(-0.5, -0.5, 0)); // La prima translate (0.5, 0.5) e l'ultima sistemano il centro di rotazione.
	return out;
}

function Anim4(t) {
	// buring flame
	var out = utils.multiplyMatrices(utils.MakeScaleMatrix(1.0/12.0), utils.MakeTranslateMatrix(Math.floor((72*t)%12), 5 - Math.floor((6*t)%6), 0 )); //Floor to keep the value discrete
	return out;
}
