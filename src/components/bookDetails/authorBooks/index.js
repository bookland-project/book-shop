import React from 'react'
import CustomCardContainer from '@/components/ui/bookDetail/CustomCardContainer'
import { Divider, HStack, Heading } from '@chakra-ui/react'
import Link from "next/link"
import { Flex } from "@chakra-ui/react"
import AuthorBooksList from './AuthorBooksList'

function AuthorBooks(props) {
  return (
    <CustomCardContainer pt="30px" pr="20px" pl="20px" pb="20px">
        <HStack justifyContent="space-between">
        <Heading fontFamily='Vazirmatn' fontSize="24px" fontWeight="semibold">دیگر کتاب های این نویسنده</Heading>
        <Flex >
            <Link href={`/filter/author?author=${props.author}`} className="font-normal text-[16px] leading-[25px] text-primary text-right ">مشاهده همه &#8598;</Link>
        </Flex>
        </HStack>
        <Divider borderBottomColor="rgb(226, 232, 240)"/>
        <AuthorBooksList author={props.author}/>
    </CustomCardContainer>
  )
}

export default AuthorBooks
