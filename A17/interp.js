// Returns the transform matrix obtained interpolating the given positions and angles
function InterpMat(
				tx1, ty1, tz1, rx1, ry1, rz1,
			    tx2, ty2, tz2, rx2, ry2, rz2,
			    a) {
	// tx1, ty1, tz1	-> Initial position
	// rx1, ry1, rz1	-> Initial rotation (in Euler angles)
	// tx2, ty2, tz2	-> Final position
	// rx2, ry2, rz2	-> Final rotation (in Euler angles)
	// a (in 0..1 range)	-> Interpolation coefficient
	//
	// return the interpolated transform matrix with the given position and rotation

	//Linear interpolation of pisitions:  (1−α)a +αb
	var lerp = utils.MakeTranslateMatrix((1-a)*tx1+ a*tx2, (1-a)*ty1+ a*ty2, (1-a)*tz1+ a*tz2);

	// Generate the quaternions from the rotations
	var q_in = Quaternion.fromEuler(utils.degToRad(rz1), utils.degToRad(rx1), utils.degToRad(ry1), 'ZXY');
	var q_fin = Quaternion.fromEuler(utils.degToRad(rz2), utils.degToRad(rx2), utils.degToRad(ry2), 'ZXY');
	
	// Perform complete slerp amoung q_in and q_fin with interpolation coef. a
	q_slerp = q_in.slerp(q_fin)(a); 	

	out = utils.multiplyMatrices(lerp, q_slerp.toMatrix4());
	
	return out;			   
}