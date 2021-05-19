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

function buildGeometry() {
	var i;
	var parts = 36.0;
	var dparts = 0.5/parts;
	var position = 0;
	// Draws a pyramid --- To complete for the assignment. This is just the one in Assignment 13, where two 0.1, 0.1 UV components have been added to the vertices definitions. Such number must be replaced (differently for each vertexes), to obtain a proper Egyptian Pyramid
		var vert1 = [[0.0,1.0,0.0, 0.0, 0.4472,-0.8944, 0.625, 0.5],[ 1.0,-1.0,-1.0, 0.0, 0.4472,-0.8944, 0.5, 0.25],[-1.0,-1.0,-1.0, 0.0, 0.4472,-0.8944, 0.75, 0.25], //Back face
				 [0.0,1.0,0.0, 0.8944, 0.4472,0.0, 0.625, 0.5],[ 1.0,-1.0, 1.0, 0.8944, 0.4472,0.0, 0.5, 0.25],[ 1.0,-1.0,-1.0, 0.8944, 0.4472,0.0, 0.75, 0.25], // Left face
				 [0.0,1.0,0.0, 0.0, 0.4472,0.8944, 0.625, 0.25],[-1.0,-1.0, 1.0, 0.0, 0.4472,0.8944, 0.5, 0.0],[ 1.0,-1.0, 1.0, 0.0, 0.4472,0.8944, 0.75, 0.0], // Front face
				 [0.0,1.0,0.0, -0.8944, 0.4472,0.0, 0.875, 0.5],[-1.0,-1.0,-1.0, -0.8944, 0.4472,0.0, 0.75, 0.25],[-1.0,-1.0, 1.0, -0.8944, 0.4472,0.0, 1.0, 0.25], // Right face
				 [-1.0,-1.0,-1.0, 0.0,-1.0,0.0, 0.75,0.0],[1.0,-1.0,-1.0, 0.0,-1.0,0.0, 1.0,0.0], [1.0,-1.0,1.0, 0.0,-1.0,0.0, 1.0,0.25], [-1.0,-1.0,1.0, 0.0,-1.0,0.0, 0.75,0.25] // Bottom face
				];
	var ind1 = [0, 1, 2,  3, 4, 5,  6, 7, 8,  9, 10, 11,  12, 13, 14,  12, 14, 15];
	var color1 = [0.0, 0.0, 1.0];
	
	addMesh(vert1, ind1, color1);
	
	// Draws a cube -- To do for the assignment.
	var vert2 = [ // Position 1 (0 to 7)
		[-1.0,-1.0,0.0, 0.0, 0.0,1.0, 0.125, 0.875], [1.0,-1.0,0.0, 0.0, 0.0,1.0, 0.25, 0.875], [1.0,1.0,0.0, 0.0, 0.0,1.0, 0.25, 1.0], [-1.0,1.0,0.0, 0.0, 0.0,1.0, 0.125, 1.0], //Front face
		[-1.0,-1.0,-2.0, 0.0, 0.0,-1.0, 0.125, 0.75], [1.0,-1.0,-2.0, 0.0, 0.0,-1.0, 0.25, 0.75], [1.0,1.0,-2.0, 0.0, 0.0,-1.0, 0.25, 0.625], [-1.0,1.0,-2.0, 0.0, 0.0,-1.0, 0.125, 0.625],// Back face
		// Position 2 ( 8 to 15)
		[-1.0,-1.0,0.0, 0.0, -1.0 ,0.0, 0.125, 0.875], [1.0,-1.0,0.0, 0.0, -1.0, 0.0, 0.25, 0.875], [1.0,1.0,0.0, 0.0, 1.0,0.0, 0.25, 0.5], [-1.0,1.0,0.0, 0.0, 1.0,0.0, 0.125, 0.5],  //Top face and Bottom face mixe up
		[-1.0,-1.0,-2.0, 0.0, -1.0,0.0, 0.125, 0.75], [1.0,-1.0,-2.0, 0.0, -1.0, 0.0, 0.25, 0.75], [1.0,1.0,-2.0, 0.0, 1.0,0.0, 0.25, 0.625], [-1.0,1.0,-2.0, 0.0, 1.0,0.0, 0.125, 0.625],
		// Position 3 (16 to 23)
		[-1.0,-1.0,0.0, -1.0, 0.0,0.0, 0.0, 0.75], [1.0,-1.0,0.0, 1.0, 0.0,0.0, 0.373, 0.75], [1.0,1.0,0.0, 1.0, 0.0,0.0, 0.375, 0.625], [-1.0,1.0,0.0, -1.0, 0.0,0.0, 0.0, 0.625],
		[-1.0,-1.0,-2.0, -1.0, 0.0,0.0, 0.125, 0.75], [1.0,-1.0,-2.0, 1.0, 0.0,0.0, 0.25, 0.75], [1.0,1.0,-2.0, 1.0, 0.0,0.0, 0.25, 0.625], [-1.0,1.0,-2.0, -1.0, 0.0,0.0, 0.125, 0.625]];
	var ind2 = [0, 1, 2,  0, 2, 3,  17, 21, 22,  17, 22, 18,  20, 16, 19,  20, 19, 23,  9, 8, 12,  9, 12, 13,  10, 15, 11,  10, 14, 15,  5, 4, 7,  5, 7, 6];

	var color2 = [0.0, 1.0, 1.0];
	addMesh(vert2, ind2, color2);
	
	
	// Draws a Cylinder --- To do for the assignment
	var vert3 = [[0.0, 1.5, 0.0, 0.0, 1.0, 0.0, 0.625, 0.875]];
	k = 1;
	// Top circle
	for (i = 0; i < 36; i++) {
		x = Math.sin(i/18.0*Math.PI);
		z = Math.cos(i/18.0*Math.PI)
		vert3[k++] = [x, 1.5, z, 0.0, 1.0, 0.0, 0.625 + z * 0.125, 0.875 + x* 0.125]; 
		//x e z invertiti nella UV mapping per avere la texture come nel pdf dell'assignment (ruotata di 180 gradi)
	}
	// Top Center
	for (i = 0; i < 36; i++) {
		x = Math.sin(i/18.0*Math.PI);
		y = 1.5;
		z = Math.cos(i/18.0*Math.PI);
		norm = CilinderNorm(i);
		vert3[k++] = [x, y, z, norm[0], norm[1], norm[2], 0.5 + position, 0.75];
		// Srotolo la texture aumentando la posizione di un 36esimo della lunghezza totale
		position = position + dparts;
	}
	// Bottom Center
	position = 0;
	for (i = 0; i < 36; i++) {
		x = Math.sin(i/18.0*Math.PI);
		y = -1.5;
		z = Math.cos(i/18.0*Math.PI);
		norm = CilinderNorm(i);
		vert3[k++] = [x, y, z, norm[0], norm[1], norm[2], 0.5 + position, 0.5];
		position = position + dparts;
	}
	// Bottom Circle
	for (i = 0; i < 36; i++) {
		x = Math.sin(i/18.0*Math.PI);
		z = Math.cos(i/18.0*Math.PI)
		vert3[k++] = [x, -1.5, z, 0.0, -1.0, 0.0, 0.875 + x * 0.125, 0.875 + z * 0.125];
	}
	vert3[k++] = [0.0, -1.5, 0.0, 0.0, -1.0, 0.0, 0.875, 0.875];

	var ind3 = [];
	k = 0;
	// Top Circle
	for (i = 0; i < 36; i++) {
		ind3[k++] = 0;
		ind3[k++] = i + 1;
		ind3[k++] = (i + 1) % 36 + 1;
	}
	// Center rectangolar
	for(i = 0; i < 36; i++) {
		ind3[k++] = i + 73;
		ind3[k++] = (i + 1) % 36 + 37;
		ind3[k++] = i + 37;

		ind3[k++] = (i + 1) % 36 + 37;
		ind3[k++] = i + 73;
		ind3[k++] = (i + 1) % 36 + 73;
	}
	// Lower cicrle
	for(i = 0; i < 36; i++) {
		ind3[k++] = vert3.length -1;
		ind3[k++] = (i + 1) % 36 + 109;
		ind3[k++] = i + 109;
	}

	var color3 = [0.0, 1.0, 1.0];
	addMesh(vert3, ind3, color3);
}