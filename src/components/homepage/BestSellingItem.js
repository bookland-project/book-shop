import React from 'react'
import { Flex } from '@chakra-ui/react'
import Link from 'next/link'
function BestSellingItem(props) {
  return (
    <Flex flexDirection="column" gap="8px" >
        <Link href={`books/${props.id}`}>
        <div className="w-[204px] h-[317px] rounded overflow-hidden">
                  <img
                    className="w-[204px] h-[317px]"
                    src={props.img}
                  />
                </div>
        </Link>
                
                <Flex gap="8px" flexDir="column">
                  <p className="text-[24px] font-bold text-white">
                    {props.name}
                  </p>
                  <p className="text-[16px] font-normal text-white">
                    {props.author}
                  </p>
                </Flex>
              
              </Flex>
  )
}

export default BestSellingItem