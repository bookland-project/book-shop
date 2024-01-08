import React, { useState } from "react";
import {
	Avatar,
	Button,
	Flex,
	Icon,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Td,
	Text,
	Tr,
	useColorModeValue,
} from "@chakra-ui/react";
import { FaEllipsisV } from "react-icons/fa";

function TablesTableRow(props) {
	const {
		logo,
		bookname,
		author,
		date,
		translatorname,
		language,
		numberofpages,
	} = props;
	const textColor = useColorModeValue("gray.700", "white");

	const [isModalOpen, setIsModalOpen] = useState(false);

	const [clickedRow, setClickedRow] = useState(null);

	const openModal = () => {
		setIsModalOpen(true);
		setClickedRow({ bookname, author, date });
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setClickedRow(null);
	};

	return (
		<>
			<Tr>
				<Td style={{ width: "200px" }}>
					<Flex
						justifyContent="center"
						align="center"
						py=".8rem"
						flexWrap="nowrap"
					>
						<Text
							fontSize="md"
							color={textColor}
							fontWeight="bold"
							minWidth="100%"
							textAlign="center"
						>
							{bookname}
						</Text>
					</Flex>
				</Td>
				<Td style={{ width: "200px" }}>
					<Flex
						justifyContent="center"
						align="center"
						py=".8rem"
						flexWrap="nowrap"
					>
						<Flex direction="column">
							<Text
								fontSize="md"
								color={textColor}
								fontWeight="bold"
								minWidth="100%"
								textAlign="center"
							>
								{author}
							</Text>
							{translatorname === null && (
								<Text
									fontSize="sm"
									color="gray.400"
									textAlign="center"
									fontWeight="normal"
								>
									{translatorname}
								</Text>
							)}
						</Flex>
					</Flex>
				</Td>

				<Td>
					<Text
						fontSize="md"
						color={textColor}
						fontWeight="bold"
						pb=".5rem"
						textAlign="center"
					>
						{new Date(date).toLocaleDateString("fa-IR", {
							year: "numeric",
						})}
					</Text>
				</Td>
				<Td>
					<Text
						fontSize="md"
						color={textColor}
						fontWeight="bold"
						pb=".5rem"
						textAlign="center"
					>
						{numberofpages} صفحه
					</Text>
				</Td>
				<Td>
					<Text
						fontSize="md"
						color={textColor}
						fontWeight="bold"
						pb=".5rem"
						textAlign="center"
					>
						{language}
					</Text>
				</Td>
				<Td>
					<Button p="0px" bg="transparent" variant="no-hover">
						<Text
							fontSize="md"
							color="gray.400"
							fontWeight="bold"
							cursor="pointer"
						>
							Delete
						</Text>
					</Button>
				</Td>
				<Td>
					<Button p="0px" bg="transparent" variant="no-hover">
						<Text
							fontSize="md"
							color="gray.400"
							fontWeight="bold"
							cursor="pointer"
						>
							Edit
						</Text>
					</Button>
				</Td>
				<Td>
					<Button p="0px" bg="transparent" onClick={openModal}>
						<Icon
							as={FaEllipsisV}
							color="gray.400"
							cursor="pointer"
						/>
					</Button>
				</Td>
			</Tr>

			{/* Modal */}
			<Modal isOpen={isModalOpen} onClose={closeModal}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Book Details</ModalHeader>
					<ModalBody>
						<Text>Book Name: {clickedRow?.bookname}</Text>
						<Text>Author: {clickedRow?.author}</Text>
						<Text>Date: {clickedRow?.date}</Text>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme="blue" mr={3} onClick={closeModal}>
							Close
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}

export default TablesTableRow;
