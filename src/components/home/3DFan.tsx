import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Cylinder, Box } from "@react-three/drei";
import * as THREE from "three";

interface FanProps {
  color?: string;
  speed?: number;
}

const Fan: React.FC<FanProps> = ({ color = "white", speed = 1 }) => {
  const fanGroup = useRef<THREE.Group>(null);
  const bladeGroup = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (bladeGroup.current) {
      bladeGroup.current.rotation.z += delta * speed;
    }
    if (fanGroup.current) {
      fanGroup.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <group ref={fanGroup}>
      {/* Base */}
      <Cylinder args={[0.5, 0.7, 0.2, 32]} position={[0, -2, 0]}>
        <meshStandardMaterial color={color} />
      </Cylinder>

      {/* Stand */}
      <Cylinder args={[0.1, 0.1, 3, 16]} position={[0, -0.5, 0]}>
        <meshStandardMaterial color={color} />
      </Cylinder>

      {/* Motor housing */}
      <Cylinder args={[0.3, 0.3, 0.4, 32]} position={[0, 0.7, 0]}>
        <meshStandardMaterial color={color} />
      </Cylinder>

      {/* Fan blades */}
      <group ref={bladeGroup} position={[0, 0.7, 0]}>
        {[0, 120, 240].map((rotation, i) => (
          <Box
            key={i}
            args={[0.1, 1.2, 0.02]}
            position={[0, 0.6, 0]}
            rotation={[0, 0, (rotation * Math.PI) / 180]}
          >
            <meshStandardMaterial color={color} />
          </Box>
        ))}
      </group>
    </group>
  );
};

export default Fan;
