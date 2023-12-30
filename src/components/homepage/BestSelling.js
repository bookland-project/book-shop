import React from "react";
import { Flex, Heading } from "@chakra-ui/react";
import useGetBookGroups from "@/react-query/hooks/useGetBookGroups";
import BestSellingItem from "./BestSellingItem";

function BestSelling() {
  const { data, isSuccess } = useGetBookGroups("best-sellers");
  return (
    <div className="bg-[#382F79]">
      <div className="w-[80%] pt-[30px] pb-[50px] mx-auto">
        <Flex flexDirection="column">
          <Heading
            color="white"
            fontSize="30px"
            fontFamily="Vazirmatn"
            fontWeight="medium"
            width="full"
          >
            پرفروش ترین ها
          </Heading>
          <Flex gap="30px" width="full" justifyContent="flex-end">
            {isSuccess&&(data.data.slice(0,3).map(book=><BestSellingItem key={book.id} id={book.id} img={book.bookcoverimage} name={book.bookname} author={book.authorname}/>))}
          </Flex>
        </Flex>
      </div>
    </div>
  );
}

export default BestSelling;
