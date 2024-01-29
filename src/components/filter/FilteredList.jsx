import HorizontalBookItem from "@/components/homepage/horizontalBookList/HorizontalBookItem";
import useGetAuthorBooks from "@/react-query/hooks/useGetAuthorBooks";
import useGetBookGroups from "@/react-query/hooks/useGetBookGroups";
import useGetCategoryBooks from "@/react-query/hooks/useGetCategoryBooks";
import { useRouter } from "next/router";
import React from "react";
import { Flex } from "@chakra-ui/react";

function FilteredList(props) {
  const router = useRouter();
  const { data: groupData, isSuccess } = useGetBookGroups(router.query.group);
  const { data: authorData, isSuccess: authorIsSuccess } = useGetAuthorBooks(
    router.query.author
  );
  const { data: categoryData, isSuccess: categoryIsSuccess } = useGetCategoryBooks(router.query.category);

  if (isSuccess) {
    let filteredGroupData = groupData.data;
    if (props.priceRange) {
      filteredGroupData = filteredGroupData.filter(
        (data) => data.price <= props.priceRange
      );
    }
    if (props.pageRange) {
      filteredGroupData = filteredGroupData.filter(
        (data) => data.numberofpages <= props.pageRange
      );
    }
    
    if (props.language) {
      filteredGroupData = filteredGroupData.filter(
        (data) => data.language === props.language
      );
      console.log(filteredGroupData)
    }
    return (
      <Flex
        width="full"
        columnGap="10px"
        rowGap="20px"
        wrap="wrap"
      >
        {filteredGroupData?.map((book) => (
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
  }
  if (categoryIsSuccess) {
    let filteredCategoryData = categoryData.data;
    if (props.priceRange) {
      filteredCategoryData = filteredCategoryData.filter(
        (data) => data.price <= props.priceRange
      );
    }
    if (props.pageRange) {
      filteredCategoryData = filteredCategoryData.filter(
        (data) => data.numberofpages <= props.pageRange
      );
    }
    if (props.language) {
      filteredCategoryData = filteredCategoryData.filter(
        (data) => data.language === props.language
      );
    }
    return (
      <Flex
      width="full"
        columnGap="10px"
        rowGap="20px"
        wrap="wrap">
        {filteredCategoryData?.map((book) => (
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
  }
  if (authorIsSuccess) {
    let filteredAuthorData = authorData.data;
    if (props.priceRange) {
      filteredAuthorData = filteredAuthorData.filter(
        (data) => data.price <= props.priceRange
      );
    }
    if (props.pageRange) {
      filteredAuthorData = filteredAuthorData.filter(
        (data) => data.numberofpages <= props.pageRange
      );
    }
    if (props.language) {
      filteredAuthorData = filteredAuthorData.filter(
        (data) => data.language === props.language
      );
    }
    return (
      <Flex
      width="full"
        columnGap="10px"
        rowGap="20px"
        wrap="wrap">
        {filteredAuthorData?.map((book) => (
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
  }
}

export default FilteredList;
