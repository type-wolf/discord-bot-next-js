'use client';

import type { FC, ReactNode } from 'react';
import { Box, Card, Divider, Stat, StatArrow, StatHelpText, StatLabel, StatNumber, VStack, HStack, Text } from '@chakra-ui/react';
import RvStatContainer from './StatContainer';
import type { RvIconStatProps } from './IconStat';

export type RvChartStatProps = RvIconStatProps & {
	chart?: ReactNode;
	footerText?: string;
};

const RvChartStat: FC<RvChartStatProps> = (props) => {
	const { icon, chart, label, number, unit, arrowType, arrowNumber, arrowUnit, helperText, footerText } = props;
	const color = 'whiteAlpha.800';
	const borderColor = 'box.borderColor.dark.hover';
	const bgColor = 'box.bg.dark.default';
	return (
		<Box position='relative' w='100%' h='330px'>
			<Card h='330px' bg={bgColor} borderWidth='1px' borderRadius='0.5rem' borderColor={borderColor}>
				<Box h='190px' />
				<HStack pt={4} pl={6} pr={6}>
					<Stat>
						<VStack h='100%'>
							<HStack w='100%' justifyContent='space-between'>
								<VStack alignItems='start'>
									<HStack>
										{icon}
										<StatLabel
											color={color}
											fontWeight='bold'
											fontSize={{ sm: '18px', md: '18px', lg: '16px', xl: '18px' }}
										>
											{label}
										</StatLabel>
									</HStack>
									<StatHelpText color={color}>{helperText}</StatHelpText>
								</VStack>
								<HStack>
									<StatNumber color={color} fontSize={30}>
										{number}
									</StatNumber>
									{unit && (
										<StatHelpText color='whiteAlpha.500' fontWeight='bold' mt={3}>
											{unit}
										</StatHelpText>
									)}
								</HStack>
							</HStack>
							<Divider borderColor={borderColor} mt={1} opacity={0.1} />
							{arrowNumber && arrowType && (
								<HStack w='100%' justifyContent='space-between'>
									<StatHelpText color='whiteAlpha.500' mt={1}>
										{footerText}
									</StatHelpText>
									<HStack spacing={-1} mb={1}>
										<StatArrow type={arrowType} />
										<Text color={color} fontWeight='bold'>
											{arrowNumber}
										</Text>
										<StatHelpText color='whiteAlpha.500' fontWeight='bold' ml={1} mt={2}>
											{arrowUnit}
										</StatHelpText>
									</HStack>
								</HStack>
							)}
						</VStack>
					</Stat>
				</HStack>
			</Card>
			<RvStatContainer>{chart}</RvStatContainer>
		</Box>
	);
};

export default RvChartStat;
