'use client';

import type { FC } from 'react';
import { Box } from '@chakra-ui/react';
import { Canvas } from '@react-three/fiber';
import { Stars, OrbitControls, ScrollControls, Scroll } from '@react-three/drei';
import Title from './SpaceItems/Title';

const SpaceScene: FC = () => {
	return (
		<Box width='100%' height='100vh'>
			<Canvas shadows camera={{ position: [0, 0, 10] }} style={{ width: '100%', height: '100%', background: 'black' }}>
				<ambientLight intensity={0.5} />
				<pointLight position={[10, 10, 10]} />
				<Title />
				<ScrollControls pages={2}>
					<Scroll>
						<Stars />
					</Scroll>
					{/* <Scroll html></Scroll> */}
				</ScrollControls>
				<OrbitControls makeDefault enableRotate={false} enableZoom={false} />
			</Canvas>
		</Box>
	);
};

export default SpaceScene;
