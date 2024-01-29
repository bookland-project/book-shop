import { Center, Flex, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import BookDetailCard from "@/components/bookDetails/BookDetailCard";
import BookDescription from "@/components/bookDetails/BookDescription";
import Comment from "@/components/bookDetails/Comment";
import BookBuy from "@/components/bookDetails/BookBuy";
import BookDetail from "./BookDetail";
import useGetBookInformation from "@/react-query/hooks/useGetBookInformation";
import { useRouter } from "next/router";
import AuthorBooks from "./authorBooks";
import CustomCardContainer from "../ui/bookDetail/CustomCardContainer";
import SuggestBooks from "./suggestBooks";
import Navbar from "../ui/searchBox/Navbar";


function BookDetails() {
  const router=useRouter();
  const { data, isLoading, isSuccess, isError } = useGetBookInformation(router.query);

  if (isLoading || isError) {
    return (
      <div className="w-full min-h-screen">
        <div className="mx-auto w-[90%] h-screen py-[50px]">
          <CustomCardContainer>
            <Center alignItems="center">
              {isLoading && (
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="primary"
                  size="xl"
                />
              )}
              {isError && <Text>مشکلی رخ داده است.</Text>}
            </Center>
          </CustomCardContainer>
        </div>
      </div>
    );
  }
  if(isSuccess){

    return (
      <div className="w-full">
        <Navbar/>
        <div className="mx-auto w-[90%] h-full py-[50px]">
          <Flex height="full" gap="20px">
            <Flex flexDir="column" width="65%" gap="46px">
              <BookDetailCard data={data.data[0]} />
              <BookDescription data={data.data[0]} />
              <AuthorBooks author={data.data[0].authorname} />
              <SuggestBooks bookId={data.data[0].book_id}/>
              <Comment bookId={data.data[0].book_id} />
            </Flex>
            <div className="w-[35%] relative">
              <BookBuy data={data.data[0]} />
              <BookDetail data={data.data[0]} />
            </div>
          </Flex>
        </div>
      </div>
    );
  }
}

export default BookDetails;
