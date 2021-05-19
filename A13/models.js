function SphereNormal (r, j, i) {
	dj_1 =  Math.cos(j/18.0*Math.PI) * Math.sin(i/18.0*Math.PI);
	dj_2 = - Math.sin(j/18.0*Math.PI);
	dj_3 =  Math.cos(i/18.0*Math.PI) * Math.cos(j/18.0*Math.PI);
	di_1 =  Math.sin(j/18.0*Math.PI) * Math.cos(i/18.0*Math.PI);
	di_2 = 0;
	di_3 = - Math.sin(j/18.0*Math.PI) * Math.sin(i/18.0*Math.PI);

	productVect = [di_2*dj_3 - di_3*dj_2,
				   di_3*dj_1 - di_1*dj_3,
				   di_1*dj_2 - di_2*dj_1];

	magnitude = Math.sqrt(productVect[0]*productVect[0] + productVect[1]*productVect[1] + productVect[2]*productVect[2]);
	res = [productVect[0]/magnitude, productVect[1]/magnitude, productVect[2]/magnitude];
	return res
}

function CilinderNorm (i) {
	dx = Math.sin(i/18.0*Math.PI);
	dz = Math.cos(i/18.0*Math.PI);
	res = [dx, 0.0, dz];
	return res
}

function WaveFigure(i, j) {
	dj_1 =  0.0;
	dj_2 =  -(Math.sin(i/10.0) * Math.sin(j/10.0))/10.0;
	dj_3 = 0.1
	di_1 = 0.1
	di_2 = (Math.cos(i/10.0) * Math.cos(j/10.0))/10.0;
	di_3 = 0.0;

	productVect = [di_2*dj_3 - di_3*dj_2,
				   di_3*dj_1 - di_1*dj_3,
				   di_1*dj_2 - di_2*dj_1];

	magnitude = Math.sqrt(productVect[0]*productVect[0] + productVect[1]*productVect[1] + productVect[2]*productVect[2]);
	res = [productVect[0]/magnitude, productVect[1]/magnitude, productVect[2]/magnitude];
	return res
}

function buildGeometry() {
	// Draws a pyramid --- Already done, just for inspiration
	var vert1 = [[0.0,1.0,0.0, 0.0, 0.4472,-0.8944],[ 1.0,-1.0,-1.0, 0.0, 0.4472,-0.8944],[-1.0,-1.0,-1.0, 0.0, 0.4472,-0.8944],
				 [0.0,1.0,0.0, 0.8944, 0.4472,0.0],[ 1.0,-1.0, 1.0, 0.8944, 0.4472,0.0],[ 1.0,-1.0,-1.0, 0.8944, 0.4472,0.0], 
				 [0.0,1.0,0.0, 0.0, 0.4472,0.8944],[-1.0,-1.0, 1.0, 0.0, 0.4472,0.8944],[ 1.0,-1.0, 1.0, 0.0, 0.4472,0.8944], 
				 [0.0,1.0,0.0, -0.8944, 0.4472,0.0],[-1.0,-1.0,-1.0, -0.8944, 0.4472,0.0],[-1.0,-1.0, 1.0, -0.8944, 0.4472,0.0], 
				 [-1.0,-1.0,-1.0, 0.0,-1.0,0.0],[1.0,-1.0,-1.0, 0.0,-1.0,0.0], [1.0,-1.0,1.0, 0.0,-1.0,0.0], [-1.0,-1.0,1.0, 0.0,-1.0,0.0],
				];
	var ind1 = [0, 1, 2,  3, 4, 5,  6, 7, 8,  9, 10, 11,  12, 13, 14,  12, 14, 15];
	var color1 = [0.0, 0.0, 1.0];
	addMesh(vert1, ind1, color1);
	
	// Draws a cube -- To do for the assignment.
	var vert2 = [ // Position 1 (0 to 7)
				 [-1.0,-1.0,0.0, 0.0, 0.0,1.0], [1.0,-1.0,0.0, 0.0, 0.0,1.0], [1.0,1.0,0.0, 0.0, 0.0,1.0], [-1.0,1.0,0.0, 0.0, 0.0,1.0],
				 [-1.0,-1.0,-2.0, 0.0, 0.0,-1.0], [1.0,-1.0,-2.0, 0.0, 0.0,-1.0], [1.0,1.0,-2.0, 0.0, 0.0,-1.0], [-1.0,1.0,-2.0, 0.0, 0.0,-1.0],
				 // Position 2 ( 8 to 15)
				 [-1.0,-1.0,0.0, 0.0, -1.0 ,0.0], [1.0,-1.0,0.0, 0.0, -1.0, 0.0], [1.0,1.0,0.0, 0.0, 1.0,0.0], [-1.0,1.0,0.0, 0.0, 1.0,0.0],
				 [-1.0,-1.0,-2.0, 0.0, -1.0,0.0], [1.0,-1.0,-2.0, 0.0, -1.0, 0.0], [1.0,1.0,-2.0, 0.0, 1.0,0.0], [-1.0,1.0,-2.0, 0.0, 1.0,0.0],
				 // Position 3 (16 to 23)
				 [-1.0,-1.0,0.0, -1.0, 0.0,0.0], [1.0,-1.0,0.0, 1.0, 0.0,0.0], [1.0,1.0,0.0, 1.0, 0.0,0.0], [-1.0,1.0,0.0, -1.0, 0.0,0.0],
				 [-1.0,-1.0,-2.0, -1.0, 0.0,0.0], [1.0,-1.0,-2.0, 1.0, 0.0,0.0], [1.0,1.0,-2.0, 1.0, 0.0,0.0], [-1.0,1.0,-2.0, -1.0, 0.0,0.0]];
	var ind2 = [0, 1, 2,  0, 2, 3,  17, 21, 22,  17, 22, 18,  20, 16, 19,  20, 19, 23,  9, 8, 12,  9, 12, 13,  10, 15, 11,  10, 14, 15,  5, 4, 7,  5, 7, 6];
	var color2 = [0.0, 1.0, 1.0];
	addMesh(vert2, ind2, color2);
	
	// Draws function y = sin(x) * cos(z) with -3 <= x <= 3 and -3 <= z <= 3 -- To do for the assignment.
	var vert3 = [];
	for (i = -30; i <= 30; i++) {
		for (j = -30; j <= 30; j++) {
			x = i/10;
			z = j/10;
			y = Math.sin(x)*Math.cos(z)
			norm = WaveFigure(i, j);
			vert3[(i+30)*61 + (j+30)] = [x, y, z, -norm[0], -norm[1], -norm[2]];
		}
	}
	var k = 0;
	// Creates indices
	var ind3 = [];
	for (i = -30; i < 30; i++) {
		for (j = -30; j < 30; j++) {
			ind3[k++] = 61*(j+30) + (i+30);
			ind3[k++] = 61*(j+30) + (i+30)+1;
			ind3[k++] = 61*((j+30)+1) + (i+30)+1;
			ind3[k++] = 61*(j+30) + (i+30);
			ind3[k++] = 61*((j+30)+1) + (i+30)+1;
			ind3[k++] = 61*((j+30)+1) + (i+30);
		}
	}
	var color3 = [0.0, 1.0, 1.0];
	addMesh(vert3, ind3, color3);
	
	// Draws a Cylinder --- To do for the assignment
	var vert4 = [[0.0, 1.0, 0.0, 0.0, 1.0, 0.0]];
	k = 1;
	// Top circle
	for (i = 0; i < 36; i++) {
		vert4[k++] = [Math.sin(i/18.0*Math.PI), 1.0, Math.cos(i/18.0*Math.PI), 0.0, 1.0, 0.0];
	}
	// Top Center
	for (i = 0; i < 36; i++) {
		x = Math.sin(i/18.0*Math.PI);
		y = 1;
		z = Math.cos(i/18.0*Math.PI);
		norm = CilinderNorm(i);
		vert4[k++] = [x, y, z, norm[0], norm[1], norm[2]];
	}
	// Bottom Center
	for (i = 0; i < 36; i++) {
		x = Math.sin(i/18.0*Math.PI);
		y = -1;
		z = Math.cos(i/18.0*Math.PI);
		norm = CilinderNorm(i);
		vert4[k++] = [x, y, z, norm[0], norm[1], norm[2]];
	}
	// Bottom Circle
	for (i = 0; i < 36; i++) {
		vert4[k++] = [Math.sin(i/18.0*Math.PI), -1.0, Math.cos(i/18.0*Math.PI), 0.0, -1.0, 0.0];
	}
	vert4[k++] = [0.0, -1.0, 0.0, 0.0, -1.0, 0.0];

	var ind4 = [];
	k = 0;
	// Top Circle
	for (i = 0; i < 36; i++) {
		ind4[k++] = 0;
		ind4[k++] = i + 1;
		ind4[k++] = (i + 1) % 36 + 1;
	}
	// Center rectangolar
	for(i = 0; i < 36; i++) {
		ind4[k++] = i + 73;
		ind4[k++] = (i + 1) % 36 + 37;
		ind4[k++] = i + 37;

		ind4[k++] = (i + 1) % 36 + 37;
		ind4[k++] = i + 73;
		ind4[k++] = (i + 1) % 36 + 73;
	}
	// Lower cicrle
	for(i = 0; i < 36; i++) {
		ind4[k++] = vert4.length -1;
		ind4[k++] = (i + 1) % 36 + 109;
		ind4[k++] = i + 109;
	}

	var color4 = [1.0, 1.0, 0.0];
	addMesh(vert4, ind4, color4);

	// Draws a Sphere --- To do for the assignment.
	var vert5 = [[0.0, 2.0, 0.0, 0.0, 1.0, 0.0]];
	k = 1;
	for(j = 1; j < 18; j++) {
		for(i = 0; i < 36; i++) {
			x = 2 * Math.sin(i/18.0*Math.PI) * Math.sin(j/18.0*Math.PI);
			y = 2 * Math.cos(j/18.0*Math.PI);
			z = 2 * Math.cos(i/18.0*Math.PI) * Math.sin(j/18.0*Math.PI);
			let norm = SphereNormal(2, j, i)
			vert5[k++] = [x, y, z, -norm[0], -norm[1], -norm[2]];
		}
	}
	vert5[k++] = [0.0, -2.0, 0.0, 0.0, -1.0, 0.0]

	k = 0;
	var ind5 = []
	// Lateral part
	for(i = 0; i < 36; i++) {
		for(j = 1; j < 17; j++) {
			ind5[k++] = i + (j-1) * 36 + 1;
			ind5[k++] = i + j * 36 + 1;
			ind5[k++] = (i + 1) % 36 + (j-1) * 36 + 1;

			ind5[k++] = (i + 1) % 36 + (j-1) * 36 + 1;
			ind5[k++] = i + j * 36 + 1;
			ind5[k++] = (i + 1) % 36 + j * 36 + 1;
		}
	}
	// Upper Part
	for(i = 0; i < 36; i++) {
		ind5[k++] = 0;
		ind5[k++] = i + 1;
		ind5[k++] = (i + 1) % 36 + 1;
	}
	// Lower Part
	for(i = 0; i < 36; i++) {
		ind5[k++] = 577;
		ind5[k++] = (i + 1) % 36 + 540;
		ind5[k++] = i + 540;
	}

	var color5 = [1.0, 0.0, 0.0];
	addMesh(vert5, ind5, color5);
}

