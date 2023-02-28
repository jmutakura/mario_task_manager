import {
	Flex,
	Heading,
	Box,
	Text,
	Spacer,
	HStack,
	Button,
} from '@chakra-ui/react';

export default function Navbar() {
	return (
		<Flex as='nav' p='10px' alignItems='center'>
			<Heading as='h1'>Task Manager</Heading>
			<Spacer />

			<HStack spacing='20px'>
				<Box bg='gray.200' p='10px'>
					M
				</Box>
				<Text>Mario@email.com</Text>
				<Button colorScheme='green'>Logout</Button>
			</HStack>
		</Flex>
	);
}
