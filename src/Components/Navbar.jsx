import {
	Flex,
	Heading,
	Box,
	Text,
	Spacer,
	HStack,
	Button,
	useToast,
} from '@chakra-ui/react';

export default function Navbar() {
	const toast = useToast();

	const showToast = () => {
		toast({
			title: 'Logged out',
			description: 'Successfully logged out!',
			duration: 5000,
			isClosable: true,
			status: 'success',
			position: 'top',
		});
	};

	return (
		<Flex as='nav' p='10px' mb='40px' alignItems='center'>
			<Heading as='h1'>Task Manager</Heading>
			<Spacer />

			<HStack spacing='20px'>
				<Box bg='gray.200' p='10px'>
					M
				</Box>
				<Text>Mario@email.com</Text>
				<Button colorScheme='green' onClick={showToast}>
					Logout
				</Button>
			</HStack>
		</Flex>
	);
}
