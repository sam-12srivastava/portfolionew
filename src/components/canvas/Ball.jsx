// import React from 'react';
// import {
//   javascript,
//   typescript,
//   html,
//   css,
//   reactjs,
//   redux,
//   tailwind,
//   nodejs,
//   mongodb,
//   git,
//   figma,
//   docker,
//   threejs
// } from '.././constants';

// const technologies = [
//   { name: 'HTML', icon: html },
//   { name: 'CSS', icon: css },
//   { name: 'JavaScript', icon: javascript },
//   { name: 'React', icon: reactjs },
//   { name: 'Node.js', icon: nodejs },
//   { name: 'Tailwind', icon: tailwind },
//   { name: 'Redux', icon: redux},
//   { name: 'mongoDb', icon: mongodb },
//   { name: 'Git', icon: git },
//   { name: 'Figma', icon: figma},
//   { name: 'Threejs', icon: threejs },
//   { name: 'Docker', icon: docker },
//   { name: 'Typescript', icon: typescript },
  
// ];

// const Ball = () => {
//   return (
//     <div>
//       <h2>Technologies</h2>
//       <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
//         {technologies.map((tech) => (
//           <div key={tech.name} style={{ textAlign: 'center' }}>
//             <img src={tech.icon} alt={tech.name} style={{ width: '50px', height: '50px' }} />
//             <p>{tech.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Ball;
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;