import HorizontalBookItem from "@/components/homepage/horizontalBookList/HorizontalBookItem";
import useGetAuthorBooks from "@/react-query/hooks/useGetAuthorBooks";
import useGetBookGroups from "@/react-query/hooks/useGetBookGroups";
import useGetCategoryBooks from "@/react-query/hooks/useGetCategoryBooks";
import { useRouter } from "next/router";
import React from "react";
import { Flex } from "@chakra-ui/react";

function FilterList() {
  const router = useRouter();
  const{data:groupData,isSuccess}=useGetBookGroups(router.query.group)
  const{data:authorData,isSuccess:authorIsSuccess}=useGetAuthorBooks(router.query.author)
  const{data:categoryData,isSuccess:categoryIsSuccess}=useGetCategoryBooks(router.query.category)
  if (isSuccess){
    return (
      <Flex width="full" columnGap="10px" rowGap="20px" wrap="wrap" justifyContent="space-between">
        {groupData.data.map((book) => 
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
        )}
      </Flex>
    );
  }
  if (categoryIsSuccess){
    return (
      <Flex>
        {categoryData.data.map((book) => 
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
        )}
      </Flex>
    );
  }
  if(authorIsSuccess) {
    return (
      <Flex>
        {authorData.data.map((book) => 
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
        )}
      </Flex>
    );
  }
}

export default FilterList;
