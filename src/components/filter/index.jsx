import React, { useState } from "react";
import { Flex } from "@chakra-ui/react";
import FilteredList from "./FilteredList";
import FilterBox from "./FilterBox";
import Navbar from "../ui/searchBox/Navbar";

function Filter() {
  const[priceRange,setPriceRange]=useState();
  const[pageRange,setPageRange]=useState();
  const[language,setLanguage]=useState();
  const[category,setCategory]=useState();
  return (
    <div className="w-full">
      <Navbar/>
      <Flex flexDir="column" width="80%" marginX="auto" paddingY="50px" gap="40px">
        <Flex width="full" gap="20px">
          <div  className="w-[20%]">
            <FilterBox setPriceRange={setPriceRange} setPageRange={setPageRange} setLanguage={setLanguage} setCategory={setCategory} category={category} language={language}/>
          </div>
          <div className="w-[80%]">
            <FilteredList priceRange={priceRange} pageRange={pageRange} category={category} language={language}/>
          </div>
        </Flex>
      </Flex>
    </div>
  );
}

export default Filter;
