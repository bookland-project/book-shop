import AuthorBookItem from "./AuthorBookItem";
import { Flex, Center, Spinner } from "@chakra-ui/react";
import React from "react";
import filterBooks from "@/helpers/filterBooks";
import useGetAuthorBooks from "@/react-query/hooks/useGetAuthorBooks";

function AuthorBooksList(props) {
  const { data, isSuccess } = useGetAuthorBooks(props.author);
  if (isSuccess) {
    const slicedBooks = data.data.slice(0, 2);
    return (
      <Flex flexDir="column" width="100%" rowGap="20px">
        {slicedBooks.map((book) => (
          <AuthorBookItem
            id={book.bookid}
            key={book.bookid}
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
    return(
    <Center alignItems="center">
      <Spinner
        thickness="4px"
        speed="1s"
        emptyColor="gray.200"
        color="primary"
        size="xl"
      />
    </Center>
    )
  }
}

export default AuthorBooksList;
