import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Box,
  HStack,
  VStack,
  Center,
} from "@chakra-ui/react";
import Link from "next/link";
import Stars from "../Stars";

function AuthorBookItem(props) {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      width="100%"
      borderRadius="20px"
    >
      <Stack width="100%" height="100%">
        <CardBody>
          <HStack
            alignItems="flex-start"
            justifyContent="space-between"
            gap="24px"
          >
            <Link href={`/books/${props.bookid}`}>
              <Image
                src={props.bookcoverimage}
                width="148px"
                height="230px"
                alt="Green double couch with wooden legs"
                borderRadius="12px"
                border="0.5px"
                borderColor="#C8C8C8"
              />
            </Link>
            <Stack spacing="3" rowGap="20px" flexGrow="1">
              <Heading
                fontFamily="Vazirmatn"
                fontWeight="medium"
                fontSize="24px"
              >
                {props.bookname}
              </Heading>
              <Stars book_id={props.book_id}/>     
                 <Stack rowGap="20px" flexGrow="1">
                <span className="text-[16px] font-normal text-[#000015]">
                  زبان:&nbsp;{props.language}
                </span>
                <span className="text-[16px] font-normal text-[#000015]">
                  نویسنده:&nbsp;{props.authorname}
                </span>
                <span className="text-[16px] font-normal text-[#000015]">
                  ناشر:&nbsp;{props.publisher}
                </span>
              </Stack>
            </Stack>
          </HStack>
        </CardBody>
      </Stack>
    </Card>
  );
}

export default AuthorBookItem;
