//Global vars
initialOrientation = new Quaternion();

// this function returns the world matrix with the updated rotations.
// parameters rvx, rvy and rvz contains a value in the degree that how much the object rotates in the given direction.
function updateWorld(rvx, rvy, rvz) {

	// R = Ry*Rx*Rz = deltaY*deltaX*deltaZ*initialOrientation

	//Converting the angles to rad
	var alpha = (rvx*Math.PI/180);
	var beta = (rvy*Math.PI/180);
	var gamma = (rvz*Math.PI/180);
	
	//To do rotation around vecotr  q = (x, y, z), we create a Quaternion as 
	//Dq = cos(RAD/2) + sin(RAD/2)*(x, y, z) then we multiply on the left q' = Dq*q
	//Encoding of the delta Quaternions
	var deltaX = new Quaternion(Math.cos(alpha/2), Math.sin(alpha/2), 0, 0);
	var deltaY = new Quaternion(Math.cos(beta/2), 0 , Math.sin(beta/2), 0);
	var deltaZ = new Quaternion(Math.cos(gamma/2), 0, 0, Math.sin(gamma/2));

	//Performing the rotation
	var out = deltaY.mul(deltaX).mul(deltaZ).mul(initialOrientation);

	//Updating the initial orientation
	initialOrientation =  deltaY.mul(deltaX).mul(deltaZ).mul(initialOrientation);
	
	return out.toMatrix4();
}

