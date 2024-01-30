import Image from "next/image";
import { Flex } from "@chakra-ui/react";
import image from "/public/assets/images/Objects.png";
import Navbar from "@/components/ui/searchBox/Navbar";

function CallUs() {
  return (
    <>
    <Navbar/>
    <div className="bg-white rounded-[20px] py-[40px] px-[100px] w-[80%] mx-auto mt-[80px]">
      <Flex justifyContent="space-between" alignItems="center">
        <Flex flexDir="column" width="50%" gap="30px">
          <p className="text-[30px] font-medium">راه‌های ارتباطی بوکلند</p>
          <Flex flexDir="column" gap="20px">
            <p>
            تلفن: 09214491645  - 09301327634
            </p>
            <p>
            ساعات کاری: شنبه تا چهارشنبه از ساعت 8 الی 17:00
            </p>
            <p>
            آدرس: تبریز، رشدیه، پالادیوم، طبقه سوم
            </p>
           
          </Flex>
        </Flex>
        <div className="">
          <Image src={image} width="200" height="200" />
        </div>
      </Flex>
    </div>
    </>
  );
}

export default CallUs;
