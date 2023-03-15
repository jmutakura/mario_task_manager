import { EditIcon, ViewIcon } from '@chakra-ui/icons';
import {
	Text,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	SimpleGrid,
	Flex,
	Box,
	Heading,
	HStack,
	Button,
	Divider,
	Avatar,
} from '@chakra-ui/react';
import { useLoaderData } from 'react-router-dom';

export default function Dashboard() {
	const tasks = useLoaderData();
	console.log(tasks);

	return (
		<SimpleGrid spacing={10} minChildWidth={300}>
			{tasks &&
				tasks['tasks'].map((task) => (
					<Card
						key={task.id}
						borderTop='8px'
						borderColor='green.400'
						bg='white'
					>
						<CardHeader>
							<Flex gap={5}>
								<Avatar src={task.img} />
								<Box>
									<Heading as='h3' size='sm'>
										{task.title}
									</Heading>
									<Text>by: {task.author}</Text>
								</Box>
							</Flex>
						</CardHeader>

						<CardBody color='gray.500'>
							<Text>{task.description}</Text>
						</CardBody>

						<Divider borderColor='gray.200' />

						<CardFooter>
							<HStack>
								<Button leftIcon={<ViewIcon />}>Watch</Button>
								<Button leftIcon={<EditIcon />}>Comment</Button>
							</HStack>
						</CardFooter>
					</Card>
				))}
		</SimpleGrid>
	);
}

export const taskLoader = async () => {
	const res = await fetch('../../data/db.json', {
		headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
	});
	const json_res = await res.json();

	return json_res;
};
