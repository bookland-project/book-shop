import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  HStack,
} from "@chakra-ui/react";
import Link from "next/link";
import Like from "../bookDetail/Like";

function BookCard(props) {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      width="100%"
      height="336px"
      borderRadius="20px"
    >
      <Stack width="100%" height="100%">
        <CardBody>
          <HStack
            alignItems="flex-start"
            justifyContent="space-between"
            gap="24px"
          >
            <Link href={`/books/${props.id}`}>
              <Image
                src={props.bookcoverimage}
                width="214px"
                height="295px"
                alt="Green double couch with wooden legs"
                borderRadius="12px"
                border="0.5px"
                borderColor="#C8C8C8"
              />
            </Link>
            <Stack spacing="3" rowGap="20px" flexGrow="1">
              <Heading fontFamily="Vazirmatn" fontWeight="extrabold" fontSize="28px">
                {props.bookname}
              </Heading>
              <HStack alignItems="center">
                <span className="text-[#000015] text-[24px]">
                {props.price===0?"رایگان":props.price}
                </span>
                <span className="text-[#C8C8C8] text-[12px]">{props.data.price===0?"":"تومان"}</span>
              </HStack>
              <Stack rowGap="20px" flexGrow="1">
                <span className="text-[16px] font-medium text-[#000015]">
                  زبان:&nbsp;{props.language}
                </span>
                <span className="text-[16px] font-medium text-[#000015]">
                  نویسنده:&nbsp;{props.authorname}
                </span>
                <span className="text-[16px] font-medium text-[#000015]">
                  ناشر:&nbsp;{props.publisher}
                </span>
              </Stack>
            </Stack>
           {props.type==="favbooks"&&<Like book_id={props.id}/>}
          </HStack>
        </CardBody>
      </Stack>
    </Card>
    // <Card
    //   width="100%"
    //   borderRadius="20px"
    //   padding="24px"
    //   border="0.5px"
    //   borderColor="#000015"
    // >
    //   <CardBody padding="0" rowGap="12px">
    //     <HStack alignItems="flex-start" justifyContent="space-between">
    //       <Link href={`books/${props.id}`}>
    //         <Image
    //           src={props.bookcoverimage}
    //           alt="Green double couch with wooden legs"
    //           borderRadius="12px"
    //           width="214px"
    //           height="336px"
    //           border="0.5px"
    //           borderColor="#C8C8C8"
    //         />
    //       </Link>
    //       <VStack rowGap="8px">
    //         <Box
    //           width="48px"
    //           height="48px"
    //           borderRadius="10px"
    //           border="1px"
    //           borderColor="#C8C8C8"
    //         ></Box>
    //         <span className="text-[12px] font-medium text-[#515457]">لایک</span>
    //       </VStack>
    //     </HStack>

    //   </CardBody>
    // </Card>
  );
}

export default BookCard;
