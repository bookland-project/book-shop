import BooksList from "../BooksList";
import useGetMyBooks from "@/react-query/hooks/useGetMyBooks";
import Sidebar from "@/components/Sidebar.js";
import { Spinner,Center } from "@chakra-ui/react";
import Navbar from "@/components/ui/searchBox/Navbar";

function MyBooks() {
	const { data, isLoading, isError } = useGetMyBooks();

	if (isLoading) {
		return (
			<Sidebar pageName="books">
				<Center alignItems="center" h="full">

				<Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="primary"
                  size="xl"
                />
				</Center>
			</Sidebar>
		);
	}
	if (isError) {
		return (
			<Sidebar pageName="books">
				<p>Something went wrong...</p>
			</Sidebar>
		);
	}
	return (
		<>
		<Navbar/>
		<Sidebar pageName="books">
			<BooksList type="mybooks" booksArray={data.data} />
		</Sidebar>
		</>
	);
}

export default MyBooks;
