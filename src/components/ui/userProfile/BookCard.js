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
                {props.price===0?"رایگان": new Intl.NumberFormat().format(props.price)}
                </span>
                <span className="text-[#C8C8C8] text-[12px]">{props.price===0?"":"تومان"}</span>
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
  );
}

export default BookCard;
