import React, { useState } from 'react'
import {
    HStack,
    VStack,
    Button,
    Heading,
    Text,
    Link,
    Input,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
  } from "@chakra-ui/react";
  import { useDisclosure } from "@chakra-ui/react";
import useGetWalletInfo from '@/react-query/hooks/useGetWalletInfo';
import useGetDiscount from '@/react-query/hooks/useGetDiscount';
import { useRef } from 'react';
import useBuyBook from '@/react-query/hooks/useBuyBook';

function BuyModal(props) {
  const discountRef=useRef()
  const {data}=useGetWalletInfo()
  const[newPrice,setNewPrice]=useState(props.price)
  const[discountId,setDiscountId]=useState(null)
  const[percent,setDisountPercent]=useState(0)
  const{mutate:calculateDiscount}=useGetDiscount(setNewPrice,setDiscountId,setDisountPercent)
  const { isOpen, onOpen, onClose } = useDisclosure();
  const{mutate}=useBuyBook(onClose)

  
  
  const discountHandler=()=>{
    calculateDiscount({code:discountRef.current.value,amount:props.price})
  }
  const buyHandler=()=>{
    mutate({book_Id:props.bookId,discount_Id:discountId})
  }
  return (
    <>
    <button
            onClick={onOpen}
            className="w-full h-[49px] bg-primary rounded-xl px-[44px] py-[10px] text-white text-[16px] font-medium"
          >
            خرید
          </button>
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
       <ModalOverlay />
       <ModalContent py={8} px={4}>
        <ModalHeader className="text-primary">پرداخت</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
         <VStack align="stretch" gap={4}>
          <Heading fontSize="md">دارایی حساب شما :</Heading>
          <HStack justify="space-between">
           <Text className={data && data.data===0?"#C8C8C8":"text-green-500"}>{data?data.data:0} تومان</Text>
           <Link href={"/user/wallet"} fontSize="xs" color="blue.500">
            شارژ حساب
           </Link>
          </HStack>
          <HStack borderTopWidth={1} borderBottomWidth={1} py={4}>
           <Input ref={discountRef} placeholder="کد تخفیف" />
           <Button _hover={{ backgroundColor: "#333" , color:"white" }} onClick={discountHandler} bg="#333" color="white" px={6}>
            اعمال کد
           </Button>
          </HStack>
          <HStack justify="space-between">
           <Text>نام کتاب</Text>
           <Text>کتاب من</Text>
          </HStack>
          <HStack justify="space-between">
           <Text>قیمت</Text>
           <Text>{props.price} تومان</Text>
          </HStack>
          <HStack justify="space-between" borderBottomWidth={1} pb={2}>
           <Text>درصد تخفیف</Text>
           <Text>{percent}</Text>
          </HStack>
          <HStack justify="space-between">
           <Heading fontSize="md">جمع کل</Heading>
           <Heading fontSize="md">{newPrice} تومان</Heading>
          </HStack>
          <button
            onClick={buyHandler}
            className="w-full h-[49px] bg-primary rounded-xl px-[44px] py-[10px] text-white text-[16px] font-medium"
          >
            خرید
          </button>
         </VStack>
        </ModalBody>
       </ModalContent>
      </Modal>
    </>
  )
}

export default BuyModal