import React from "react";
import { Flex, Box, Heading, Divider, Circle } from "@chakra-ui/react";
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Tooltip,
} from "@chakra-ui/react";

function FilterBox() {
  return (
    <Flex flexDir="column" rowGap="30px">
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
            همه دسته ها
          </Heading>
          <Divider marginBottom="20px" />
        </div>
      </Box>
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
            قیمت
          </Heading>
          <Divider marginBottom="70px" />
          <RangeSlider aria-label={["min", "max"]} defaultValue={[0, 30]} >
            <RangeSliderTrack
              bg="rgba(87, 93, 251, 0.11)"
              height="10px"
              borderRadius="5px"
            >
              <RangeSliderFilledTrack bg="rgba(87, 93, 251, 1)" />
            </RangeSliderTrack>
            <RangeSliderThumb index={0}>
              <Circle boxSize={6} bg="white">
                <Circle boxSize={4} bg="rgba(87, 93, 251, 1)"></Circle>
              </Circle>
            </RangeSliderThumb>
            <Flex>

            <Tooltip
              hasArrow
              arrowSize={7}
              placement="top"
              isOpen
              bg="primary"
              label="tooltip"
              borderRadius="12px"
              padding="10px"
              fontSize="12px"
            >
              <RangeSliderThumb index={1}>
                <Circle boxSize={6} bg="white">
                  <Circle boxSize={4} bg="rgba(87, 93, 251, 1)"></Circle>
                </Circle>
              </RangeSliderThumb>
            </Tooltip>
            </Flex>
          </RangeSlider>
        </div>
      </Box>
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
            تعداد صفحه
          </Heading>
          <Divider marginBottom="70px" />
          <RangeSlider aria-label={["min", "max"]} defaultValue={[0, 30]}>
            <RangeSliderTrack
              bg="rgba(87, 93, 251, 0.11)"
              height="10px"
              borderRadius="5px"
            >
              <RangeSliderFilledTrack bg="rgba(87, 93, 251, 1)" />
            </RangeSliderTrack>
            <RangeSliderThumb index={0}>
              <Circle boxSize={6} bg="white">
                <Circle boxSize={4} bg="rgba(87, 93, 251, 1)"></Circle>
              </Circle>
            </RangeSliderThumb>
            <RangeSliderThumb index={1}>
              <Circle boxSize={6} bg="white">
                <Circle boxSize={4} bg="rgba(87, 93, 251, 1)"></Circle>
              </Circle>
            </RangeSliderThumb>
          </RangeSlider>
        </div>
      </Box>
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
            زبان ها
          </Heading>
          <Divider marginBottom="20px" />
        </div>
      </Box>
    </Flex>
  );
}

export default FilterBox;
