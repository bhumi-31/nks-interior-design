import { useRef, useState, useCallback, useEffect } from 'react';

/**
 * ImageDistortion - Creates a ripple/distortion effect on images
 * Premium effect used by top design studios
 */
const ImageDistortion = ({
    src,
    alt,
    className = '',
    intensity = 0.02,
    ...props
}) => {
    const canvasRef = useRef(null);
    const imageRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const animationRef = useRef(null);
    const mousePos = useRef({ x: 0.5, y: 0.5 });
    const targetPos = useRef({ x: 0.5, y: 0.5 });

    // Vertex shader
    const vertexShader = `
    attribute vec2 a_position;
    attribute vec2 a_texCoord;
    varying vec2 v_texCoord;
    void main() {
      gl_Position = vec4(a_position, 0.0, 1.0);
      v_texCoord = a_texCoord;
    }
  `;

    // Fragment shader with distortion effect
    const fragmentShader = `
    precision mediump float;
    uniform sampler2D u_image;
    uniform vec2 u_mouse;
    uniform float u_intensity;
    uniform float u_time;
    uniform float u_hover;
    varying vec2 v_texCoord;
    
    void main() {
      vec2 uv = v_texCoord;
      
      // Calculate distance from mouse
      vec2 mouseUV = u_mouse;
      float dist = distance(uv, mouseUV);
      
      // Create ripple effect
      float ripple = sin(dist * 20.0 - u_time * 3.0) * u_intensity * u_hover;
      ripple *= smoothstep(0.5, 0.0, dist);
      
      // Apply distortion
      vec2 direction = normalize(uv - mouseUV);
      uv += direction * ripple;
      
      gl_FragColor = texture2D(u_image, uv);
    }
  `;

    useEffect(() => {
        if (!isLoaded || !canvasRef.current || !imageRef.current) return;

        const canvas = canvasRef.current;
        const gl = canvas.getContext('webgl');

        if (!gl) {
            console.warn('WebGL not supported, falling back to regular image');
            return;
        }

        // Create shaders
        const vs = gl.createShader(gl.VERTEX_SHADER);
        gl.shaderSource(vs, vertexShader);
        gl.compileShader(vs);

        const fs = gl.createShader(gl.FRAGMENT_SHADER);
        gl.shaderSource(fs, fragmentShader);
        gl.compileShader(fs);

        // Create program
        const program = gl.createProgram();
        gl.attachShader(program, vs);
        gl.attachShader(program, fs);
        gl.linkProgram(program);
        gl.useProgram(program);

        // Set up geometry
        const positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
            -1, -1, 1, -1, -1, 1,
            -1, 1, 1, -1, 1, 1,
        ]), gl.STATIC_DRAW);

        const positionLocation = gl.getAttribLocation(program, 'a_position');
        gl.enableVertexAttribArray(positionLocation);
        gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

        // Set up texture coordinates
        const texCoordBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
            0, 1, 1, 1, 0, 0,
            0, 0, 1, 1, 1, 0,
        ]), gl.STATIC_DRAW);

        const texCoordLocation = gl.getAttribLocation(program, 'a_texCoord');
        gl.enableVertexAttribArray(texCoordLocation);
        gl.vertexAttribPointer(texCoordLocation, 2, gl.FLOAT, false, 0, 0);

        // Create texture
        const texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, imageRef.current);

        // Get uniform locations
        const mouseLocation = gl.getUniformLocation(program, 'u_mouse');
        const intensityLocation = gl.getUniformLocation(program, 'u_intensity');
        const timeLocation = gl.getUniformLocation(program, 'u_time');
        const hoverLocation = gl.getUniformLocation(program, 'u_hover');

        let startTime = Date.now();
        let hoverValue = 0;

        // Animation loop
        const render = () => {
            const time = (Date.now() - startTime) / 1000;

            // Smooth mouse following
            mousePos.current.x += (targetPos.current.x - mousePos.current.x) * 0.1;
            mousePos.current.y += (targetPos.current.y - mousePos.current.y) * 0.1;

            // Smooth hover transition
            const targetHover = isHovering ? 1 : 0;
            hoverValue += (targetHover - hoverValue) * 0.1;

            gl.viewport(0, 0, canvas.width, canvas.height);
            gl.uniform2f(mouseLocation, mousePos.current.x, 1 - mousePos.current.y);
            gl.uniform1f(intensityLocation, intensity);
            gl.uniform1f(timeLocation, time);
            gl.uniform1f(hoverLocation, hoverValue);

            gl.drawArrays(gl.TRIANGLES, 0, 6);

            animationRef.current = requestAnimationFrame(render);
        };

        render();

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [isLoaded, isHovering, intensity]);

    const handleMouseMove = useCallback((e) => {
        const rect = canvasRef.current?.getBoundingClientRect();
        if (rect) {
            targetPos.current = {
                x: (e.clientX - rect.left) / rect.width,
                y: (e.clientY - rect.top) / rect.height,
            };
        }
    }, []);

    return (
        <div
            className={`relative overflow-hidden ${className}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            {...props}
        >
            {/* Hidden image for loading */}
            <img
                ref={imageRef}
                src={src}
                alt={alt}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ opacity: isLoaded ? 0 : 1 }}
                crossOrigin="anonymous"
                onLoad={() => setIsLoaded(true)}
            />

            {/* WebGL Canvas */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
                width={800}
                height={600}
                style={{ opacity: isLoaded ? 1 : 0 }}
            />
        </div>
    );
};

export default ImageDistortion;
