import React from "react";
import CustomCardContainer from "@/components/ui/bookDetail/CustomCardContainer";
import { Divider, HStack, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { Flex } from "@chakra-ui/react";
import HorizontalBookList from "./HorizontalBookList";

function HorizontalBooks(props) {
    return (
      <CustomCardContainer pt="30px" pr="20px" pl="20px" pb="20px">
        <HStack justifyContent="space-between">
          <Heading fontFamily="Vazirmatn" fontSize="24px" fontWeight="semibold">
            {props.header}
          </Heading>
          <Flex>
            <Link
              href={`filter/group?group=${props.searchKey}`}
              className="font-normal text-[16px] leading-[25px] text-primary text-right "
            >
              مشاهده همه &#8598;
            </Link>
          </Flex>
        </HStack>
        <Divider borderBottomColor="rgb(226, 232, 240)" />
        <HorizontalBookList searchKey={props.searchKey}/>
      </CustomCardContainer>
    );
}

export default HorizontalBooks;
