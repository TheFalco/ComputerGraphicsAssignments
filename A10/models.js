function toRad(value) {
	return (value * 10 * Math.PI)/180;
}

function buildGeometry() {

	// Draws function y = sin(x) * cos(z) with -3 <= x <= 3 and -3 <= z <= 3.
	///// Creates vertices

	var vert2 = [];
	for (i = -30; i <= 30; i++) {
		for (j = -30; j <= 30; j++) {
			x = i/10;
			z = j/10;
			vert2[(i+30)*61 + (j+30)] = [x, Math.sin(x)*Math.cos(z), z];
		}
	}

	var k = 0;
	////// Creates indices
	var ind2 = [];
	for (i = -30; i < 30; i++) {
		for (j = -30; j < 30; j++) {
			ind2[k++] = 61*(j+30) + (i+30);
			ind2[k++] = 61*(j+30) + (i+30)+1;
			ind2[k++] = 61*((j+30)+1) + (i+30)+1;
			ind2[k++] = 61*(j+30) + (i+30);
			ind2[k++] = 61*((j+30)+1) + (i+30)+1;
			ind2[k++] = 61*((j+30)+1) + (i+30);
		}
	}

	var color2 = [0.0, 0.0, 1.0];

	addMesh(vert2, ind2, color2);

	// Draws a Half Sphere
	///// Center of circle with radius 2
	var vert3 = [[0.0, 2.0,0.0]]; 
	///// Creates vertices
	k = 1;
	//Parametric formula for a sphere of radius 2 centered at (0,0,0)
	for(j = 1; j <= 9; j++) {
		for(i = 0; i < 36; i++) {
			x = 2 * Math.sin(toRad(i)) * Math.sin(toRad(j));
			y = 2 * Math.cos(toRad(j));
			z = 2 * Math.cos(toRad(i)) * Math.sin(toRad(j));
			vert3[k++] = [x, y, z];
		}		
	}

	//Center of the bottom surface
	vert3[vert3.length] = [0, 0, 0]
		
	var ind3 = [];
	//Lateral part
	k = 0;
	for(i = 0; i < 36; i++) {
		for(j = 1; j < 9; j++) {
			ind3[k++] = i + (j-1) * 36 + 1;
			ind3[k++] = i + j * 36 + 1;
			ind3[k++] = (i + 1) % 36 + (j-1) * 36 + 1;

			ind3[k++] = (i + 1) % 36 + (j-1) * 36 + 1;
			ind3[k++] = i + j * 36 + 1;
			ind3[k++] = (i + 1) % 36 + j * 36 + 1;
		}
	}
	//Upper part
	for(i = 0; i < 36; i++) {
		ind3[k++] = 0;
		ind3[k++] = i + 1;
		ind3[k++] = (i + 1) % 36 + 1;
	}
	
	l = vert3.length - 1;

	//Bottom part
	for(i = 0; i < 36; i++) {
		ind3[k++] = l;
		ind3[k++] = l  - 35 + i;
		ind3[k++] = l - 36 + i;
	}

	//Adding the last triangle
	ind3[k++] = l - 1;
	ind3[k++] = l;
	ind3[k++] = l - 36;

	var color3 = [0.0, 1.0, 0.0];
	addMesh(vert3, ind3, color3);
}
