import { Suspense, useRef, useMemo, forwardRef, useImperativeHandle } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Environment, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const Room = () => {
  const floorRef = useRef();
  
  return (
    <group position={[0, -1, 0]}>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#d4c4b0" roughness={0.8} />
      </mesh>
      
      {/* Back Wall */}
      <mesh position={[0, 2, -5]} receiveShadow>
        <planeGeometry args={[10, 6]} />
        <meshStandardMaterial color="#e8e0d5" roughness={0.9} />
      </mesh>
      
      {/* Left Wall */}
      <mesh rotation={[0, Math.PI / 2, 0]} position={[-5, 2, 0]} receiveShadow>
        <planeGeometry args={[10, 6]} />
        <meshStandardMaterial color="#f0e8dd" roughness={0.9} />
      </mesh>
    </group>
  );
};

const Sofa = () => {
  return (
    <Float speed={0.5} rotationIntensity={0} floatIntensity={0.1}>
      <group position={[0, -0.5, 0]}>
        {/* Sofa Base */}
        <mesh position={[0, 0.3, 0]} castShadow>
          <boxGeometry args={[3, 0.5, 1.2]} />
          <meshStandardMaterial color="#8a7355" roughness={0.7} />
        </mesh>
        
        {/* Sofa Back */}
        <mesh position={[0, 0.8, -0.45]} castShadow>
          <boxGeometry args={[3, 0.8, 0.3]} />
          <meshStandardMaterial color="#8a7355" roughness={0.7} />
        </mesh>
        
        {/* Left Armrest */}
        <mesh position={[-1.4, 0.5, 0]} castShadow>
          <boxGeometry args={[0.2, 0.6, 1.2]} />
          <meshStandardMaterial color="#8a7355" roughness={0.7} />
        </mesh>
        
        {/* Right Armrest */}
        <mesh position={[1.4, 0.5, 0]} castShadow>
          <boxGeometry args={[0.2, 0.6, 1.2]} />
          <meshStandardMaterial color="#8a7355" roughness={0.7} />
        </mesh>
        
        {/* Cushions */}
        <mesh position={[-0.6, 0.65, 0.1]} castShadow>
          <boxGeometry args={[0.9, 0.2, 0.8]} />
          <meshStandardMaterial color="#c9a962" roughness={0.6} />
        </mesh>
        <mesh position={[0.6, 0.65, 0.1]} castShadow>
          <boxGeometry args={[0.9, 0.2, 0.8]} />
          <meshStandardMaterial color="#c9a962" roughness={0.6} />
        </mesh>
      </group>
    </Float>
  );
};

const CoffeeTable = () => {
  return (
    <Float speed={0.3} rotationIntensity={0} floatIntensity={0.05}>
      <group position={[0, -0.7, 1.5]}>
        {/* Table Top */}
        <mesh position={[0, 0.4, 0]} castShadow>
          <boxGeometry args={[1.5, 0.08, 0.8]} />
          <meshStandardMaterial color="#3d3228" roughness={0.4} metalness={0.1} />
        </mesh>
        
        {/* Table Legs */}
        {[[-0.6, 0.2, -0.3], [0.6, 0.2, -0.3], [-0.6, 0.2, 0.3], [0.6, 0.2, 0.3]].map((pos, i) => (
          <mesh key={i} position={pos} castShadow>
            <cylinderGeometry args={[0.04, 0.04, 0.4]} />
            <meshStandardMaterial color="#c9a962" roughness={0.3} metalness={0.8} />
          </mesh>
        ))}
        
        {/* Decorative Items on Table */}
        <mesh position={[-0.3, 0.55, 0]} castShadow>
          <cylinderGeometry args={[0.12, 0.1, 0.25]} />
          <meshStandardMaterial color="#d4c4b0" roughness={0.5} />
        </mesh>
        <mesh position={[0.3, 0.52, 0.1]} castShadow>
          <sphereGeometry args={[0.08]} />
          <meshStandardMaterial color="#c9a962" roughness={0.2} metalness={0.9} />
        </mesh>
      </group>
    </Float>
  );
};

const FloorLamp = () => {
  return (
    <Float speed={0.4} rotationIntensity={0} floatIntensity={0.08}>
      <group position={[2.5, 0, -2]}>
        {/* Base */}
        <mesh position={[0, -0.9, 0]} castShadow>
          <cylinderGeometry args={[0.25, 0.3, 0.1]} />
          <meshStandardMaterial color="#c9a962" roughness={0.3} metalness={0.8} />
        </mesh>
        
        {/* Pole */}
        <mesh position={[0, 0.3, 0]} castShadow>
          <cylinderGeometry args={[0.03, 0.03, 2.4]} />
          <meshStandardMaterial color="#c9a962" roughness={0.3} metalness={0.8} />
        </mesh>
        
        {/* Lamp Shade */}
        <mesh position={[0, 1.4, 0]} castShadow>
          <cylinderGeometry args={[0.25, 0.35, 0.4, 32, 1, true]} />
          <meshStandardMaterial color="#f5f0e8" roughness={0.8} side={THREE.DoubleSide} />
        </mesh>
        
        {/* Light */}
        <pointLight position={[0, 1.3, 0]} intensity={0.8} color="#ffeedd" distance={5} />
      </group>
    </Float>
  );
};

const Plant = () => {
  return (
    <Float speed={0.6} rotationIntensity={0.1} floatIntensity={0.1}>
      <group position={[-2.5, -0.5, -1]}>
        {/* Pot */}
        <mesh position={[0, -0.3, 0]} castShadow>
          <cylinderGeometry args={[0.2, 0.15, 0.4]} />
          <meshStandardMaterial color="#8a7355" roughness={0.7} />
        </mesh>
        
        {/* Plant Leaves */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <mesh
            key={i}
            position={[
              Math.cos((angle * Math.PI) / 180) * 0.15,
              -0.05 + i * 0.05,
              Math.sin((angle * Math.PI) / 180) * 0.15,
            ]}
            rotation={[0.3, (angle * Math.PI) / 180, 0.2]}
            castShadow
          >
            <sphereGeometry args={[0.08, 8, 8]} />
            <meshStandardMaterial color="#4a6741" roughness={0.6} />
          </mesh>
        ))}
      </group>
    </Float>
  );
};

const CameraController = forwardRef(({ autoRotate }, ref) => {
  const controlsRef = useRef();
  const { camera } = useThree();
  
  useImperativeHandle(ref, () => ({
    zoomIn: () => {
      if (controlsRef.current) {
        const currentDistance = camera.position.length();
        const newDistance = Math.max(4, currentDistance - 1);
        camera.position.normalize().multiplyScalar(newDistance);
      }
    },
    zoomOut: () => {
      if (controlsRef.current) {
        const currentDistance = camera.position.length();
        const newDistance = Math.min(12, currentDistance + 1);
        camera.position.normalize().multiplyScalar(newDistance);
      }
    }
  }));
  
  return (
    <OrbitControls
      ref={controlsRef}
      enableZoom={true}
      enablePan={false}
      minDistance={4}
      maxDistance={12}
      minPolarAngle={Math.PI / 6}
      maxPolarAngle={Math.PI / 2.2}
      autoRotate={autoRotate}
      autoRotateSpeed={0.3}
    />
  );
});

CameraController.displayName = 'CameraController';

const RoomScene = forwardRef(({ className = '', autoRotate = true }, ref) => {
  const controllerRef = useRef();
  
  useImperativeHandle(ref, () => ({
    zoomIn: () => controllerRef.current?.zoomIn(),
    zoomOut: () => controllerRef.current?.zoomOut()
  }));
  
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        shadows
        camera={{ position: [5, 3, 6], fov: 35 }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight
            position={[5, 8, 5]}
            intensity={0.8}
            castShadow
            shadow-mapSize={[1024, 1024]}
          />
          <pointLight position={[-3, 3, 2]} intensity={0.3} color="#ffeedd" />
          
          <Room />
          <Sofa />
          <CoffeeTable />
          <FloorLamp />
          <Plant />
          
          <Environment preset="apartment" />
          <CameraController ref={controllerRef} autoRotate={autoRotate} />
        </Suspense>
      </Canvas>
    </div>
  );
});

RoomScene.displayName = 'RoomScene';

export default RoomScene;
