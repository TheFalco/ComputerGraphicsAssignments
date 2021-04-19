function shaders() {
// The shader can find the required informations in the following variables:

//vec3 fs_pos;		// Position of the point in 3D space
//
//float SpecShine;		// specular coefficient for both Blinn and Phong
//float DToonTh;		// Threshold for diffuse in a toon shader
//float SToonTh;		// Threshold for specular in a toon shader
//
//vec4 diffColor;		// diffuse color
//vec4 ambColor;		// material ambient color
//vec4 specularColor;		// specular color
//vec4 emit;			// emitted color
//	
//vec3 normalVec;		// direction of the normal vecotr to the surface
//vec3 eyedirVec;		// looking direction
//
//
// Lighr directions can be found into:
//vec3 lightDirA;
//vec3 lightDirB;
//vec3 lightDirC;
//
//and intensity is returned into:
//
//vec4 lightColorA;
//vec4 lightColorB;
//vec4 lightColorC;
//
// Ambient light contribution can be found intop
//
// vec4 ambientLight;

// Lambert diffuse and Ambient material. No specular or emisssion.
var S1 = `
	vec4 LAcontr = clamp(dot(lightDirA, normalVec),0.0,1.0) * lightColorA;
	vec4 LBcontr = clamp(dot(lightDirB, normalVec),0.0,1.0) * lightColorB;
	vec4 LCcontr = clamp(dot(lightDirC, normalVec),0.0,1.0) * lightColorC;
	vec4 diffuse = diffColor * (LAcontr + LBcontr + LCcontr);

	out_color = clamp(diffuse + ambientLight * ambColor, 0.0, 1.0);
`;

// Lambert diffuse and Blinn specular. No ambient and emission.
var S2 = `
	vec4 dLAcontr = clamp(dot(lightDirA, normalVec),0.0,1.0) * lightColorA;
	vec4 dLBcontr = clamp(dot(lightDirB, normalVec),0.0,1.0) * lightColorB;
	vec4 dLCcontr = clamp(dot(lightDirC, normalVec),0.0,1.0) * lightColorC;
	vec4 diffuse = diffColor * (dLAcontr + dLBcontr + dLCcontr);

	vec4 sLAcontr = pow(clamp(dot(normalize(eyedirVec+lightDirA), normalVec),0.0,1.0), SpecShine) * lightColorA;
	vec4 sLBcontr = pow(clamp(dot(normalize(eyedirVec+lightDirB), normalVec),0.0,1.0), SpecShine) * lightColorB;
	vec4 sLCcontr = pow(clamp(dot(normalize(eyedirVec+lightDirC), normalVec),0.0,1.0), SpecShine) * lightColorC;
	vec4 specular = specularColor * (sLAcontr + sLBcontr + sLCcontr);
	out_color = clamp(diffuse + specular, 0.0, 1.0);
`;

// Ambient and Phong specular. No emssion and no diffuse.
var S3 = `
	vec3 reflA = -reflect(lightDirA, normalVec);
	vec3 reflB = -reflect(lightDirB, normalVec);
	vec3 reflC = -reflect(lightDirC, normalVec);
	vec4 sLAcontr = pow(clamp(dot(eyedirVec,reflA), 0.0, 1.0), SpecShine)  * lightColorA;
	vec4 sLBcontr = pow(clamp(dot(eyedirVec,reflB), 0.0, 1.0), SpecShine)  * lightColorB;
	vec4 sLCcontr = pow(clamp(dot(eyedirVec,reflC), 0.0, 1.0), SpecShine)  * lightColorC;
	vec4 specular = specularColor * (sLAcontr + sLBcontr + sLCcontr);

	out_color = clamp(specular + ambientLight * ambColor, 0.0, 1.0);
`;

// Diffuse, ambient, emission and Phong specular.
var S4 = `
	vec4 dLAcontr = clamp(dot(lightDirA, normalVec),0.0,1.0) * lightColorA;
	vec4 dLBcontr = clamp(dot(lightDirB, normalVec),0.0,1.0) * lightColorB;
	vec4 dLCcontr = clamp(dot(lightDirC, normalVec),0.0,1.0) * lightColorC;
	vec4 diffuse = diffColor * (dLAcontr + dLBcontr + dLCcontr);

	vec3 reflA = -reflect(lightDirA, normalVec);
	vec3 reflB = -reflect(lightDirB, normalVec);
	vec3 reflC = -reflect(lightDirC, normalVec);
	vec4 sLAcontr = pow(clamp(dot(eyedirVec,reflA), 0.0, 1.0), SpecShine)  * lightColorA;
	vec4 sLBcontr = pow(clamp(dot(eyedirVec,reflB), 0.0, 1.0), SpecShine)  * lightColorB;
	vec4 sLCcontr = pow(clamp(dot(eyedirVec,reflC), 0.0, 1.0), SpecShine)  * lightColorC;
	vec4 specular = specularColor * (sLAcontr + sLBcontr + sLCcontr);

	out_color = clamp (diffuse + specular + ambientLight * ambColor + emit, 0.0, 1.0);`;

// Ambient, Toon diffuse and and Toon (Blinn based) specular. No emssion.
var S5 = `
	vec4 ddLAcontr;
	vec4 ddLBcontr;
	vec4 ddLCcontr;
	float dLAcontr = dot(lightDirA, normalVec);
	float dLBcontr = dot(lightDirB, normalVec);
	float dLCcontr = dot(lightDirC, normalVec);
	if (dLAcontr < DToonTh)
		ddLAcontr = 0.0 * diffColor * lightColorA;
	else
		ddLAcontr = diffColor * lightColorA;
	if (dLBcontr < DToonTh)
		ddLBcontr = 0.0 * diffColor * lightColorB;
	else
		ddLBcontr = diffColor * lightColorB;
	if (dLCcontr < DToonTh)
		ddLCcontr = 0.0 * diffColor * lightColorC;
	else
		ddLCcontr = diffColor * lightColorC;
	vec4 diffuse = ddLAcontr + ddLBcontr + ddLCcontr;

	vec4 ssLAcontr;
	vec4 ssLBcontr;
	vec4 ssLCcontr;
	float sLAcontr = dot(normalize(eyedirVec+lightDirA), normalVec);
	float sLBcontr = dot(normalize(eyedirVec+lightDirB), normalVec);
	float sLCcontr = dot(normalize(eyedirVec+lightDirC), normalVec);
	if (sLAcontr < SToonTh)
		ssLAcontr = 0.0 * specularColor * lightColorA;
	else
		ssLAcontr = specularColor * lightColorA;
	if (sLBcontr < SToonTh)
		ssLBcontr = 0.0 * specularColor * lightColorB;
	else
		ssLBcontr = specularColor * lightColorB;
	if (sLCcontr < SToonTh)
		ssLCcontr = 0.0 * specularColor * lightColorC;
	else
		ssLCcontr = specularColor * lightColorC;
	vec4 specular = ssLAcontr + ssLBcontr + ssLCcontr;

	out_color = clamp (diffuse + specular + ambientLight * ambColor, 0.0, 1.0);

`;

	return [S1, S2, S3, S4, S5];
}

