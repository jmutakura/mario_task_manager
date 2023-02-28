import {
	Flex,
	Heading,
	Box,
	Text,
	Spacer,
	HStack,
	Button,
	useToast,
	Avatar,
	AvatarBadge,
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
				<Avatar src='/img/mario.png'>
					<AvatarBadge width='1.3em' bg='teal.500'>
						<Text fontSize='xs' color='white'>
							5
						</Text>
					</AvatarBadge>
				</Avatar>
				<Text>Mario@email.com</Text>
				<Button colorScheme='green' onClick={showToast}>
					Logout
				</Button>
			</HStack>
		</Flex>
	);
}
