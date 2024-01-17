'use client';

import { useRef } from 'react';
import type { FC } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useGLTF, useScroll } from '@react-three/drei';

const Rocket: FC = () => {
	const rocketRef = useRef<any>();
	const { scene } = useGLTF('universe/rocket.glb');
	// const { width, height } = useThree((state) => state.viewport);
	// const { range } = useScroll();

	useFrame(() => {});

	return (
		<group dispose={null}>
			<primitive ref={rocketRef} scale={[0.3, 0.3, 0.3]} object={scene} />
		</group>
	);
};

export default Rocket;
