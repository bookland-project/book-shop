import React from "react";
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Tooltip,
  Flex,
  Box,
  Heading,
  Divider,
  Circle,
} from "@chakra-ui/react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from "@chakra-ui/react";

function RangeFilter(props) {
  const [sliderValue, setSliderValue] = React.useState(props.header==="قیمت"?20000:100);
  const [showTooltip, setShowTooltip] = React.useState(false);
  return (
    <Box
      backgroundColor="white"
      borderRadius="16px"
      paddingX="14px"
      paddingTop="20px"
      paddingBottom="50px"
    >
      <div>
        <Heading
          fontFamily="Vazirmatn"
          fontSize="16px"
          fontWeight="semibold"
          color="primary"
          marginBottom="20px"
        >
          {props.header}
        </Heading>
        <Divider marginBottom="50px" />
        <Slider
          id="slider"
          defaultValue={props.header==="قیمت"?20000:100}
          min={+props.min}
          max={+props.max}
          onChange={(v) => setSliderValue(v)}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          onChangeEnd={(val) => props.setRange(val)}
        >
          <SliderMark value={+props.min} mt="5" ml="-2.5" fontSize="12px" color="rgba(200, 200, 200, 1)">
            {+props.min}
          </SliderMark>
          <SliderMark value={+props.max} mt="5"  fontSize="12px" color="rgba(200, 200, 200, 1)">
            {props.header==="قیمت"?props.max+" تومان":props.max}
          </SliderMark>
          <SliderTrack
            bg="rgba(87, 93, 251, 0.11)"
            height="10px"
            borderRadius="5px"
          >
            <SliderFilledTrack bg="primary" />
          </SliderTrack>
          <Tooltip
            hasArrow
            bg="primary"
            color="white"
            borderRadius="12px"
            padding="10px"
            minW="50px"
            textAlign="center"
            placement="top"
            isOpen={showTooltip}
            label={`${sliderValue}`}
          >
            <SliderThumb>
              <Circle boxSize={6} bg="white">
                <Circle boxSize={4} bg="rgba(87, 93, 251, 1)" />
              </Circle>
            </SliderThumb>
          </Tooltip>
        </Slider>
      </div>
    </Box>
  );
}

export default RangeFilter;
