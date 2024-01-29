import { Flex, Center, Spinner } from "@chakra-ui/react";
import React from "react";
import HorizontalBookItem from "./HorizontalBookItem";
import useGetBookGroups from "@/react-query/hooks/useGetBookGroups";


function HorizontalBookList(props) {
  const { data, isSuccess } =useGetBookGroups(props.searchKey);
  if (isSuccess&&data.data) {
    const slicedBooks = data.data.slice(0, 4);
    return (
      <Flex width="100%" columnGap="20px" justifyContent="center">
        {slicedBooks.map((book) => (
          <HorizontalBookItem
            id={book.id}
            key={book.id}
            bookname={book.bookname}
            authorname={book.authorname}
            price={book.price}
            language={book.language}
            publisher={book.publisher}
            bookcoverimage={book.bookcoverimage}
          />
        ))}
      </Flex>
    );
  } else {
    return (
      <Center alignItems="center">
        <Spinner
          thickness="4px"
          speed="1s"
          emptyColor="gray.200"
          color="primary"
          size="xl"
        />
      </Center>
    );
  }
}

export default HorizontalBookList;
