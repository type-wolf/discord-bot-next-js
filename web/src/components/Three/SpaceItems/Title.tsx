import type { FC } from 'react';
import { Center, Text3D } from '@react-three/drei';

const Title: FC = () => {
	const fontSize = 0.5;

	return (
		<Center top>
			<Text3D font='font/Roboto Light_Regular.json' size={fontSize}>
				SEVEN DAO
				<meshStandardMaterial color='white' />
			</Text3D>
		</Center>
	);
};

export default Title;
