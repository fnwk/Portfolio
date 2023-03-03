import noise from "../../../common/noise";

const vertexShader = `
  ${noise}

  varying vec2 vUv;
  uniform float uTime;

  void main() {
    vUv = uv;

    float horizontalMove = uTime * 0.02;
    float noise = snoise(vec3(vUv.x * 6. + horizontalMove, vUv.y * 10., uTime * 0.01)) * 12.;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(position.xy, position.z + noise, 1.0);
  }
`;

const fragmentShader = `
  ${noise}

  varying vec2 vUv;

  uniform float uTime;
  uniform vec3 uColors[4];

  void main() {
    vec3 color = uColors[0];

    float horizontalMove = uTime * 0.1;
    float verticalMove = uTime * 0.3;

    
    float noise = snoise(vec3(vUv.x * 4. + horizontalMove, vUv.y * 6. + verticalMove, uTime * 0.1));

    for(int i = 1; i < 4; i++) {
      color = mix(color, uColors[i], smoothstep(0.2 * float(i - 1), 0.2 * float(i), noise - 0.2));
    }

    gl_FragColor = vec4(color, 1.);
  }
`;

export { vertexShader, fragmentShader };
