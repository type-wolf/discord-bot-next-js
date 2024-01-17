'use client';

import type { FC, ReactNode } from 'react';
import { Box, Card, VStack, HStack, Text, Divider, Stat, StatLabel, StatNumber, StatHelpText, StatArrow } from '@chakra-ui/react';
import RvIconContainer from './IconContainer';

export type RvIconStatProps = {
	icon?: ReactNode;
	label: string;
	number: number;
	unit?: string;
	arrowType?: 'increase' | 'decrease' | undefined;
	arrowNumber?: number;
	arrowUnit?: string;
	helperText?: string;
};

const RvIconStat: FC<RvIconStatProps> = ({ icon, label, number, unit, arrowType, arrowNumber, arrowUnit, helperText }) => {
	const color = 'whiteAlpha.800';
	const borderColor = 'box.borderColor.dark.hover';
	const bgColor = 'box.bg.dark.default';
	return (
		<Box position='relative' w='100%' h='150px'>
			<Card h='150px' bg={bgColor} borderWidth='1px' borderRadius='0.5rem' borderColor={borderColor}>
				<Stat>
					<VStack pt={2} pl={6} pr={6}>
						<HStack w='100%' justifyContent='flex-end'>
							<VStack h='70px' alignItems='start' mt={3}>
								<StatLabel
									color={color}
									fontWeight='bold'
									fontSize={{ sm: '18px', md: '18px', lg: '16px', xl: '16px' }}
								>
									{label}
								</StatLabel>
								<HStack>
									<StatNumber color={color} fontWeight='bold'>
										{number}
									</StatNumber>
									<Text color={color} fontWeight='bold' fontSize={16} mt={1}>
										{unit}
									</Text>
								</HStack>
							</VStack>
						</HStack>
						<Divider borderColor={borderColor} opacity={0.1} />
						{arrowNumber && arrowType && (
							<HStack w='100%' justifyContent='space-between'>
								<StatHelpText color={color} fontWeight='bold' mt={1}>
									{helperText}
								</StatHelpText>
								<HStack spacing={-1}>
									<StatArrow type={arrowType} />
									<Text color={color} fontWeight='bold'>
										{arrowNumber}
									</Text>
									<StatHelpText color={color} fontWeight='bold' ml={1} mt={2}>
										{arrowUnit}
									</StatHelpText>
								</HStack>
							</HStack>
						)}
					</VStack>
				</Stat>
				<RvIconContainer>{icon}</RvIconContainer>
			</Card>
		</Box>
	);
};

export default RvIconStat;
