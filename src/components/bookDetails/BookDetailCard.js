import { Flex, Image, Stack, Heading, HStack } from "@chakra-ui/react";
import CustomCardContainer from "../ui/bookDetail/CustomCardContainer";
import Stars from "./Stars";

import useGetBookCategory from "@/react-query/hooks/useGetBookCategory";
import Like from "../ui/bookDetail/Like";
import Cookies from "js-cookie";

function BookDetailCard(props) {
  const { data } = useGetBookCategory(props.data.book_id);
  const token=Cookies.get("token")

  return (
    <CustomCardContainer minH="315px" pt="30px" pr="20px" pl="20px" pb="30px">
      <Flex>
        <div className="w-[250px] h-[339px] absolute top-[-12px] rounded-xl overflow-hidden shadow-[2px_3px_14px_0px_#00000038]">
          <Image
            objectFit="fill"
            width="250px"
            height="339px"
            src={props.data.bookcoverimage}
          />
        </div>
        <Flex width="100%" height="100%" marginRight="280px">
          <Stack spacing="3" rowGap="18px" flexGrow="1">
            <Heading
              fontFamily="Vazirmatn"
              fontWeight="extrabold"
              fontSize="24px"
            >
              {props.data.bookname}
            </Heading>
            <Stars book_id={props.data.book_id} />
            <HStack gap="10px">
            {data&&data.data.map((cat) => (
              <div key={Math.random} className="w-[65px] h-[27px] bg-[#575DFB1A] border-[1px] border-primary rounded-lg flex justify-center items-center ">
                <span className="text-primary text-[12px] font-medium">
                  {cat}
                </span>
              </div>
            ))}
            </HStack>

            <Stack rowGap="20px" flexGrow="1">
              <span className="text-[16px] font-medium text-[#000015]">
                زبان:&nbsp;{props.data.language}
              </span>
              <span className="text-[16px] font-medium text-[#000015]">
                نویسنده:&nbsp;{props.data.authorname}
              </span>
              <span className="text-[16px] font-medium text-[#000015]">
                ناشر:&nbsp;{props.data.publisher}
              </span>
            </Stack>
          </Stack>
          {token&&<Like book_id={props.data.book_id} />}
        </Flex>
      </Flex>
    </CustomCardContainer>
  );
}

export default BookDetailCard;
