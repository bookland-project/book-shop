import React, { useEffect } from "react";
import BooksList from "../BooksList";
import useGetBookmarks from "@/react-query/hooks/useGetBookmarks";
import Sidebar from "@/components/Sidebar.js";
import { Spinner,Center } from "@chakra-ui/react";

function MyBookmarks() {
	const { data, isLoading, isError } = useGetBookmarks();
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
			<Sidebar pageName="bookmarks">
				<p>Something went wrong...</p>
			</Sidebar>
		);
	}

	return (
		<Sidebar pageName="bookmarks">
			{!isLoading && <BooksList booksArray={data?.data} />}
		</Sidebar>
	);
}

export default MyBookmarks;
