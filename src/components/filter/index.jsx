import React from "react";
import { Flex } from "@chakra-ui/react";
import FilterList from "./FilterList";
import FilterBox from "./FilterBox";

function Filter() {
  return (
    <div className="w-full pt-4">
      <Flex flexDir="column" width="80%" marginX="auto" gap="40px">
        <div>
          <p>صفحه اصلی </p>
        </div>
        <Flex width="full" gap="20px">
          <div  className="w-[20%]">
            <FilterBox/>
          </div>
          <div className="w-[80%]">
            <FilterList/>
          </div>
        </Flex>
      </Flex>
    </div>
  );
}

export default Filter;
