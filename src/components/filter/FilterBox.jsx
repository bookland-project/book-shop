import React from "react";
import { Flex } from "@chakra-ui/react";
import RangeFilter from "./RangeFilter";
import ListFilter from "./ListFilter";

function FilterBox(props) {

  const languageList = [
    "فارسی",
    "انگلیسی",
    "فرانسوی",
    "آلمانی",
    "ترکی استانبولی",
    "اسپانیایی",
    "ایتالیایی",
    "روسی",
    "چینی",
    "ژاپنی",
  ];
  return (
    <Flex flexDir="column" rowGap="30px">
      <ListFilter header="زبان" setFilter={props.setLanguage} language={props.language} list={languageList} />
      <RangeFilter
        header="قیمت"
        min="0"
        max="200000"
        setRange={props.setPriceRange}
      />
      <RangeFilter
        header="تعداد صفحه"
        min="0"
        max="1000"
        setRange={props.setPageRange}
      />
    </Flex>
  );
}

export default FilterBox;
