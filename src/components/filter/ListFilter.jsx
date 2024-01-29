import React from 'react'
import {
    Box,
    Heading,
    Divider,
  } from "@chakra-ui/react";

function ListFilter(props) {
  return (
    <Box
    backgroundColor="white"
    borderRadius="16px"
    paddingX="14px"
    paddingY="24px"
  >
    <div>
      <Heading
        fontFamily="Vazirmatn"
        fontSize="16px"
        fontWeight="semibold"
        color="primary"
        marginBottom="20px"
      >
        {props.header}
      </Heading>
      <Divider marginBottom="20px" />
      <div>
        <ul className='flex flex-col gap-[12px]'>
            {props.list.map(item=><a className='cursor-pointer' key={Math.random}><li onClick={()=>props.setFilter(item)} className={`${props.language===item?"font-semibold text-black before:content-['>']":"font-medium text-[16px] text-[#515457]"}`} >{item}</li></a>)}
        </ul>
      </div>
    </div>
  </Box>
  )
}

export default ListFilter