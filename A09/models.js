function buildGeometry() {
	var i;
	
	// Draws the outline of letter F (replace the vertices and primitive type)
	var vert1 = [[-3.0, 5.0, 1.0], [3.0, 5.0, 1.0], [3.0, 3.0, 1.0], [-1.0, 3.0, 1.0], [-1.0, 2.0, 1.0], [1.0, 2.0, 1.0], [1.0, 0.0, 1.0], [-1.0, 0.0, 1.0], [-1.0, -5.0, 1.0], [-3.0, -5.0, 1.0]];

	addMesh(vert1, "O", [1.0, 0.0, 0.0]);


	// Draws a filled S-shaped pattern (replace the vertices and primitive type)
	var vert2 = [[-2.5, -3.0, 0.0], [-2.5, -5.0, 0.0], [0.5, -3.0, 0.0], [2.5, -5.0, 0.0], [0.5, -1.0, 0.0], [2.5, 1.0, 0.0], [-2.5, -1.0, 0.0], [-0.5, 1.0, 0.0], [-2.5, 5.0, 0.0], [-0.5, 3.0, 0.0], [2.5, 5.0, 0.0], [2.5, 3.0, 0.0]];

	addMesh(vert2, "S", [0.0, 0.0, 1.0]);


	// Draws a filled pentacong (replace the vertices and primitive type)
	//Formulas for a perfect pentagon with center 0,0 and top vertex 0,1 (scaled by 4 times)
	let c1 = 4*(Math.sqrt(5)-1)/4;
	let c2 = 4*(Math.sqrt(5)+1)/4;
	let s1 = 4*(Math.sqrt(10+2*Math.sqrt(5)))/4;
	let s2 = 4*(Math.sqrt(10-2*Math.sqrt(5)))/4;

	var vert3 = [[0, 0, 1.0], [0.0, 4.0, 1.0], [s1, c1, 1.0], [s2, -c2, 1.0], [-s2, -c2, 1.0], [-s1, c1, 1.0], [0, 4.0, 1.0]];

	addMesh(vert3, "F", [0.0, 1.0, 0.0]);
	
}

