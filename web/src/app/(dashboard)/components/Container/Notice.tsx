import type { FC } from 'react';
import { Box, IconButton, CloseIcon, Image, Flex, Text, Link, useColorModeValue } from '@/components/ChakraProvider';

export type NoticeProps = {
	//
};
const Notice: FC<NoticeProps> = () => {
	const bgColor = useColorModeValue('blackAlpha.500', 'blackAlpha.500');
	const borderColor = useColorModeValue('lightGrey', 'darkGrey');
	return <></>;
};

export default Notice;
