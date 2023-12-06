import React from "react";
import {
  Divider,
  HStack,
  VStack,
  Button,
  Center,
  Flex,
  Image,
  Stack,
  Heading,
} from "@chakra-ui/react";
import CustomCardContainer from "../ui/bookDetail/CustomCardContainer";
import { useState } from "react";
import Stars from "./Stars";
import useShowToast from "../ui/useShowToast";
import { useDisclosure } from "@chakra-ui/react";
import useIsBookBought from "@/react-query/hooks/useIsBookBought";

import BuyModal from "../ui/bookDetail/BuyModal";
function BookDetail(props) {
  const { data, isSuccess } = useIsBookBought(props.data.book_id);
  const [isCopied, setCopied] = useState(false);
  const offCode = "welcome";
  const showToast = useShowToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  if(isSuccess&&!data.data){
    return (
      <CustomCardContainer
        pt="20px"
        pb="20px"
        pr="16px"
        pl="16px"
        position="sticky"
        top="5px"
        marginTop="46px"
      >
        <Flex gap="28px">
          <div className="rounded-xl overflow-hidden w-[300px] h-[250px]">
            <Image
              width="170px"
              height="250px"
              objectFit="fill"
              src={props.data.bookcoverimage}
            />
          </div>
          <Flex width="100%">
            <Stack spacing="3" rowGap="18px" flexGrow="1">
              <Heading
                fontFamily="Vazirmatn"
                fontWeight="extrabold"
                fontSize="28px"
              >
                {props.data.bookname}
              </Heading>
              <Stars />
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
          </Flex>
        </Flex>
        <Divider borderBottomColor="rgb(226, 232, 240)" />
        <VStack gap="20px">
          <HStack justifyContent="space-between" width="100%">
            <span className="text-[24px] font-extrabold">قیمت:</span>
            <HStack gap="5px">
              <span className="text-[24px] font-extrabold">
                {props.data.price}
              </span>
              <span className="text-[12px] font-extrabold text-[#C8C8C8]">
                تومان
              </span>
            </HStack>
          </HStack>
          <BuyModal />
          <button className="w-full h-[49px] rounded-xl px-[44px] py-[10px] bg-white border-[1px] border-[#C8C8C8] text-[16px] font-medium text-[#000015]">
            مشاهده نمونه
          </button>
          <Divider />
          <HStack>
            <HStack>
              <svg
                width="68"
                height="68"
                viewBox="0 0 68 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.1"
                  d="M65.6699 34.0001C65.6699 36.0001 62.7999 37.7801 62.4099 39.7201C62.0199 41.6601 63.9999 44.4201 63.2399 46.2501C62.4799 48.0801 59.1499 48.6201 58.0399 50.2501C56.9299 51.8801 57.7199 55.1801 56.2999 56.6001C54.8799 58.0201 51.6199 57.2201 49.9499 58.3301C48.2799 59.4401 47.7899 62.7701 45.9499 63.5401C44.1099 64.3101 41.4099 62.3201 39.4199 62.7101C37.4299 63.1001 35.7199 66.0001 33.6699 66.0001C31.6199 66.0001 29.8899 63.1201 27.9999 62.7401C26.1099 62.3601 23.3099 64.3301 21.4699 63.5701C19.6299 62.8101 19.0999 59.4801 17.4699 58.3601C15.8399 57.2401 12.4599 58.0001 10.9999 56.6301C9.53992 55.2601 10.3899 51.9501 9.26992 50.2801C8.14992 48.6101 4.82992 48.1201 4.05992 46.2801C3.28992 44.4401 5.27992 41.7401 4.88992 39.7501C4.49992 37.7601 1.66992 36.0501 1.66992 34.0001C1.66992 31.9501 4.54992 30.2201 4.92992 28.2801C5.30992 26.3401 3.33992 23.5801 4.09992 21.7501C4.85992 19.9201 8.19992 19.3801 9.30992 17.7501C10.4199 16.1201 9.62992 12.8201 11.0399 11.4001C12.4499 9.98006 15.7199 10.7801 17.3899 9.67006C19.0599 8.56006 19.5599 5.23006 21.3899 4.46006C23.2199 3.69006 25.9999 5.65006 27.9999 5.26006C29.9999 4.87006 31.6199 2.00006 33.6699 2.00006C35.7199 2.00006 37.4599 4.88006 39.3899 5.26006C41.3199 5.64006 44.0899 3.67006 45.9199 4.43006C47.7499 5.19006 48.2899 8.53006 49.9199 9.64006C51.5499 10.7501 54.8499 9.96006 56.2699 11.3701C57.6899 12.7801 56.8899 16.0501 58.0099 17.7201C59.1299 19.3901 62.4399 19.8901 63.2099 21.7201C63.9799 23.5501 61.9899 26.2601 62.3799 28.2501C62.7699 30.2401 65.6699 32.0001 65.6699 34.0001Z"
                  fill="#D62737"
                  stroke="#D62737"
                  stroke-width="3"
                  stroke-miterlimit="10"
                />
                <path
                  d="M65.6699 34.0001C65.6699 36.0001 62.7999 37.7801 62.4099 39.7201C62.0199 41.6601 63.9999 44.4201 63.2399 46.2501C62.4799 48.0801 59.1499 48.6201 58.0399 50.2501C56.9299 51.8801 57.7199 55.1801 56.2999 56.6001C54.8799 58.0201 51.6199 57.2201 49.9499 58.3301C48.2799 59.4401 47.7899 62.7701 45.9499 63.5401C44.1099 64.3101 41.4099 62.3201 39.4199 62.7101C37.4299 63.1001 35.7199 66.0001 33.6699 66.0001C31.6199 66.0001 29.8899 63.1201 27.9999 62.7401C26.1099 62.3601 23.3099 64.3301 21.4699 63.5701C19.6299 62.8101 19.0999 59.4801 17.4699 58.3601C15.8399 57.2401 12.4599 58.0001 10.9999 56.6301C9.53992 55.2601 10.3899 51.9501 9.26992 50.2801C8.14992 48.6101 4.82992 48.1201 4.05992 46.2801C3.28992 44.4401 5.27992 41.7401 4.88992 39.7501C4.49992 37.7601 1.66992 36.0501 1.66992 34.0001C1.66992 31.9501 4.54992 30.2201 4.92992 28.2801C5.30992 26.3401 3.33992 23.5801 4.09992 21.7501C4.85992 19.9201 8.19992 19.3801 9.30992 17.7501C10.4199 16.1201 9.62992 12.8201 11.0399 11.4001C12.4499 9.98006 15.7199 10.7801 17.3899 9.67006C19.0599 8.56006 19.5599 5.23006 21.3899 4.46006C23.2199 3.69006 25.9999 5.65006 27.9999 5.26006C29.9999 4.87006 31.6199 2.00006 33.6699 2.00006C35.7199 2.00006 37.4599 4.88006 39.3899 5.26006C41.3199 5.64006 44.0899 3.67006 45.9199 4.43006C47.7499 5.19006 48.2899 8.53006 49.9199 9.64006C51.5499 10.7501 54.8499 9.96006 56.2699 11.3701C57.6899 12.7801 56.8899 16.0501 58.0099 17.7201C59.1299 19.3901 62.4399 19.8901 63.2099 21.7201C63.9799 23.5501 61.9899 26.2601 62.3799 28.2501C62.7699 30.2401 65.6699 32.0001 65.6699 34.0001Z"
                  stroke="#D62737"
                  stroke-width="3"
                  stroke-miterlimit="10"
                />
                <path
                  d="M14.9673 39.9484H15.0376C15.2954 39.9484 15.6157 39.8312 15.9985 39.5968C16.3892 39.3546 16.772 39.0382 17.147 38.6476C17.6313 38.1476 18.0142 37.6163 18.2954 37.0538C18.5845 36.4835 18.729 35.9523 18.729 35.4601C18.729 34.3898 18.1626 33.7413 17.0298 33.5148C16.811 33.4835 16.6548 33.4366 16.561 33.3741C16.4673 33.3038 16.4204 33.1984 16.4204 33.0577C16.4204 32.9015 16.6079 32.6632 16.9829 32.3429C17.5454 31.8507 17.9829 31.3156 18.2954 30.7374C18.6157 30.1515 18.7759 29.5656 18.7759 28.9796C18.7759 28.3546 18.647 28.0421 18.3892 28.0421C18.1782 28.0421 17.9165 28.2101 17.604 28.546C17.2915 28.8741 16.9907 29.296 16.7017 29.8116C16.4204 30.3273 16.2095 30.8351 16.0688 31.3351C16.022 31.507 15.9751 31.6202 15.9282 31.6749C15.8813 31.7218 15.8149 31.7452 15.729 31.7452C15.5024 31.7452 15.2212 31.5695 14.8853 31.2179C14.4087 30.7101 14.1704 30.1945 14.1704 29.671C14.1704 29.0695 14.4126 28.4718 14.897 27.8781C15.3892 27.2843 16.0259 26.8038 16.8071 26.4366C17.5884 26.0695 18.3892 25.8859 19.2095 25.8859C19.8735 25.8859 20.479 26.0148 21.0259 26.2726C21.5728 26.5304 21.9985 26.8898 22.3032 27.3507C22.6079 27.8038 22.7603 28.3156 22.7603 28.8859C22.7603 29.9249 22.311 30.757 21.4126 31.382C20.9438 31.7023 20.3618 32.007 19.6665 32.296V32.3429C20.7681 32.4054 21.5962 32.6515 22.1509 33.0812C22.7056 33.5109 22.9829 34.1124 22.9829 34.8859C22.9829 35.2452 22.897 35.6437 22.7251 36.0812C22.561 36.5109 22.3228 36.9562 22.0103 37.4171C21.7056 37.8702 21.3384 38.3234 20.9087 38.7765C19.9712 39.7687 18.9517 40.546 17.8501 41.1085C16.7485 41.6632 15.6899 41.9406 14.6743 41.9406C13.7056 41.9406 12.897 41.632 12.2485 41.0148C11.6079 40.3976 11.2876 39.6241 11.2876 38.6945C11.2876 38.0616 11.5024 37.4288 11.9321 36.796C12.3696 36.1632 12.9321 35.6476 13.6196 35.2491C14.3071 34.8429 14.9946 34.6398 15.6821 34.6398C15.9712 34.6398 16.1157 34.7452 16.1157 34.9562C16.1157 35.0421 15.9946 35.1866 15.7524 35.3898C15.729 35.4132 15.7017 35.4406 15.6704 35.4718C15.647 35.4952 15.6196 35.5226 15.5884 35.5538C15.2837 35.9054 15.0454 36.3429 14.8735 36.8663C14.7095 37.3898 14.6274 37.9366 14.6274 38.507C14.6274 39.0695 14.7407 39.5499 14.9673 39.9484ZM33.3071 26.3898H33.4243C33.8462 26.3898 34.2485 26.5812 34.6313 26.964C35.022 27.3468 35.3306 27.8585 35.5571 28.4991C35.7837 29.1398 35.897 29.8116 35.897 30.5148C35.897 31.2257 35.7954 32.0187 35.5923 32.8937C35.3892 33.7609 35.1157 34.5968 34.772 35.4015C34.436 36.2062 34.0259 36.9874 33.5415 37.7452C33.0649 38.5031 32.5688 39.132 32.0532 39.632C30.8345 40.8663 29.5884 41.4835 28.3149 41.4835C27.4634 41.4835 26.7134 41.2726 26.0649 40.8507C25.4165 40.421 24.9165 39.8156 24.5649 39.0343C24.2134 38.2452 24.0376 37.3429 24.0376 36.3273C24.0376 34.5773 24.4009 32.9015 25.1274 31.2999C25.8618 29.6906 26.8306 28.3898 28.0337 27.3976C29.2368 26.4054 30.4751 25.9093 31.7485 25.9093C32.3657 25.9093 32.8853 26.0695 33.3071 26.3898ZM32.2524 26.9406L32.4634 26.8234L32.4165 26.7765C31.9165 26.7843 31.4009 27.0382 30.8696 27.5382C30.3462 28.0304 29.8735 28.6671 29.4517 29.4484C29.0298 30.2296 28.686 31.1124 28.4204 32.0968C28.1548 33.0812 28.022 34.0109 28.022 34.8859C28.022 35.5187 28.1313 36.171 28.3501 36.8429C28.5767 37.507 28.8579 38.0616 29.1938 38.507C29.5376 38.9523 29.8657 39.1749 30.1782 39.1749C30.4204 39.1749 30.6743 39.0148 30.9399 38.6945C31.2056 38.3663 31.4478 37.9054 31.6665 37.3116C31.8931 36.7413 32.0884 36.1437 32.2524 35.5187C32.4165 34.8937 32.5415 34.2765 32.6274 33.6671C32.7134 33.0577 32.7563 32.5031 32.7563 32.0031C32.7563 31.214 32.6274 30.464 32.3696 29.7531C32.1196 29.0343 31.7915 28.5031 31.3853 28.1593C31.3071 28.1046 31.2681 28.0499 31.2681 27.9952C31.2681 27.8156 31.5962 27.464 32.2524 26.9406ZM43.104 24.8781C43.1665 24.8468 43.229 24.8312 43.2915 24.8312C43.5337 24.8312 43.7681 24.9718 43.9946 25.2531C44.2212 25.5343 44.4087 25.8976 44.5571 26.3429C44.7056 26.7804 44.7798 27.2179 44.7798 27.6554C44.7798 28.4132 44.6196 29.2531 44.2993 30.1749C43.9868 31.0968 43.5806 31.9406 43.0806 32.7062C42.5806 33.464 42.0532 34.0382 41.4985 34.4288C40.9204 34.8273 40.2798 35.0265 39.5767 35.0265C38.7876 35.0265 38.1196 34.7062 37.5728 34.0656C37.0337 33.4171 36.7642 32.6163 36.7642 31.6632C36.7642 30.9835 36.8657 30.2765 37.0688 29.5421C37.272 28.8077 37.5532 28.1124 37.9126 27.4562C38.272 26.7999 38.6665 26.2609 39.0962 25.839C39.5337 25.4249 40.0298 25.0968 40.5845 24.8546C41.1392 24.6124 41.6821 24.4913 42.2134 24.4913C42.5493 24.4913 42.8462 24.6202 43.104 24.8781ZM42.3071 25.2179L42.4009 25.1593L42.354 25.1124C41.9712 25.1906 41.6118 25.4093 41.2759 25.7687C40.7915 26.2999 40.3696 27.0421 40.0103 27.9952C39.6587 28.9484 39.4829 29.8195 39.4829 30.6085C39.4829 31.0304 39.5532 31.4679 39.6938 31.921C39.8423 32.3663 40.0259 32.7413 40.2446 33.046C40.4712 33.3429 40.686 33.4913 40.8892 33.4913C41.061 33.4913 41.2446 33.3663 41.4399 33.1163C41.6431 32.8585 41.8228 32.5187 41.979 32.0968C42.4712 30.8312 42.7173 29.6788 42.7173 28.6398C42.7173 28.0851 42.6392 27.5812 42.4829 27.1281C42.3267 26.6749 42.1157 26.3312 41.8501 26.0968C41.7563 26.0031 41.7095 25.9327 41.7095 25.8859C41.7095 25.7843 41.8774 25.5929 42.2134 25.3116C42.229 25.296 42.2446 25.2804 42.2603 25.2648C42.2759 25.2491 42.2915 25.2335 42.3071 25.2179ZM54.7173 34.0187C54.7798 34.0031 54.8501 33.9952 54.9282 33.9952C55.1626 33.9952 55.397 34.1281 55.6313 34.3937C55.8657 34.6593 56.0532 35.007 56.1938 35.4366C56.3423 35.8585 56.4165 36.2999 56.4165 36.7609C56.4165 37.2218 56.3501 37.7491 56.2173 38.3429C56.0845 38.9366 55.9048 39.5109 55.6782 40.0656C55.4517 40.6124 55.1821 41.1398 54.8696 41.6476C54.5649 42.1554 54.2485 42.5812 53.9204 42.9249C53.1313 43.7531 52.2915 44.1671 51.4009 44.1671C50.5181 44.1671 49.811 43.8624 49.2798 43.2531C48.7485 42.6437 48.4829 41.8468 48.4829 40.8624C48.4829 39.9484 48.6274 39.0499 48.9165 38.1671C49.2134 37.2843 49.6118 36.507 50.1118 35.8351C50.6118 35.1632 51.1782 34.632 51.811 34.2413C52.4438 33.8507 53.1001 33.6554 53.7798 33.6554C54.2954 33.6554 54.6079 33.7765 54.7173 34.0187ZM54.1196 34.3116V34.3585L54.0728 34.3116C53.7837 34.3741 53.5649 34.4484 53.4165 34.5343C53.2681 34.6202 53.1001 34.7765 52.9126 35.0031C52.4673 35.5187 52.0845 36.1749 51.7642 36.9718C51.3501 38.0109 51.1431 39.0031 51.1431 39.9484C51.1431 40.7999 51.4048 41.5499 51.9282 42.1984C52.1938 42.5343 52.4048 42.7023 52.561 42.7023C52.7095 42.7023 52.8892 42.5656 53.1001 42.2921C53.311 42.0187 53.4985 41.671 53.6626 41.2491C53.8813 40.6866 54.0532 40.1085 54.1782 39.5148C54.311 38.921 54.3774 38.4015 54.3774 37.9562C54.3774 36.589 54.0103 35.6202 53.2759 35.0499C53.7134 34.6671 53.9946 34.421 54.1196 34.3116ZM44.4985 34.5226L44.7095 34.1827C45.0063 33.7296 45.4673 33.0187 46.0923 32.0499C46.7251 31.0812 47.3501 30.1554 47.9673 29.2726C48.5845 28.3898 49.022 27.7687 49.2798 27.4093C49.5454 27.0421 49.7915 26.7179 50.0181 26.4366C50.6353 25.6632 51.1626 25.1359 51.6001 24.8546C51.8892 24.6437 52.1782 24.5382 52.4673 24.5382C52.6938 24.5382 52.9048 24.6046 53.1001 24.7374C53.2954 24.8702 53.4517 25.0538 53.5688 25.2882C53.6938 25.5226 53.7563 25.7531 53.7563 25.9796C53.7563 26.2374 53.6938 26.5148 53.5688 26.8116C53.4517 27.1007 53.2681 27.4484 53.0181 27.8546C52.7681 28.2609 52.3657 28.8585 51.811 29.6476C51.7485 29.7413 51.6704 29.8546 51.5767 29.9874C51.4907 30.1124 51.4399 30.1827 51.4243 30.1984L51.0259 30.8077L50.6392 31.3351C48.3188 34.6476 46.0688 37.6476 43.8892 40.3351C43.4907 40.8429 43.1001 41.2804 42.7173 41.6476C42.1938 42.1945 41.7056 42.4679 41.2524 42.4679C41.0024 42.4679 40.7876 42.3859 40.6079 42.2218C40.4282 42.0656 40.3384 41.8741 40.3384 41.6476C40.3384 41.257 41.397 39.4171 43.5142 36.1281C43.5923 36.0109 43.6704 35.8859 43.7485 35.7531C43.8267 35.6202 43.9165 35.4679 44.0181 35.296L44.4985 34.5226Z"
                  fill="#D62737"
                />
              </svg>
  
              <p className="text-[20px] font-normal">
                تخفیف با کد “welcome” با اولین خریدتان از بوکلند
              </p>
            </HStack>
            <Center
              width="48px"
              height="48px"
              padding="20px"
              borderRadius="10px"
              border="1px"
              borderColor="#C8C8C8"
              overflow="hidden"
            >
              <Button
                // title={isCopied?"!Copied":"!Copy to clipboard"}
                _hover={{ backgroundColor: "white" }}
                bgColor="white"
                w="16px"
                h="16px"
                p="5px"
                onClick={() => {
                  navigator.clipboard.writeText(offCode);
                  setCopied(true);
                  showToast("کد تخفیف با موفقیت کپی شد.", "success");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill={isCopied ? "#00000" : "none"}
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke={isCopied ? "#ffff" : "currentColor"}
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                  />
                </svg>
              </Button>
            </Center>
          </HStack>
        </VStack>
      </CustomCardContainer>
    );
  }
}

export default BookDetail;