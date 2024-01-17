'use client';

import type { FC, ReactNode, ChangeEventHandler } from 'react';
import { Input, InputGroup, useColorMode } from '@chakra-ui/react';
import { rError, rPrimary } from '../theme/colors';

export type RvInputProps = {
	variant?: string;
	isError?: boolean;
	defaultValue?: string;
	rightItem?: ReactNode;
	onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
};

const RvInput: FC<RvInputProps> = ({ variant, isError, defaultValue, rightItem, onChange }) => {
	const colorMode = useColorMode().colorMode;
	const borderColor = isError ? rError[500][colorMode] : undefined;
	const focusBorderColor = isError ? rError[500][colorMode] : rPrimary[500][colorMode];
	return (
		<InputGroup size='lg'>
			<Input
				variant={variant || 'primary.outline'}
				size='lg'
				defaultValue={defaultValue}
				borderColor={borderColor}
				_focus={{ borderColor: focusBorderColor }}
				onChange={onChange}
			/>
			{rightItem}
		</InputGroup>
	);
};

export default RvInput;
