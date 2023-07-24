import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Fixing image to one as images in images folder are returning 404 errors
  // Adding fixed image here, because provided images are not found even when opened in new tab
  return (
    <VStack spacing="0">
      <Box bg="white" w="100%" borderTopRadius="10px">
        <Image src={imageSrc} alt={title} boxSize="100%" borderRadius="10px" />
      </Box>
      <Box bg="white" w="100%" borderBottomRadius="10px" padding="10px">
        <VStack align="left">
          <Heading size="xs" color="black">
            {title}
          </Heading>
          <Text fontSize="xs" color="gray">
            {description}
          </Text>
          <HStack>
            <Text fontSize="xs" color="black">
              Detaylar
            </Text>
            <FontAwesomeIcon icon={faArrowRight} size="xs" color="black" />
          </HStack>
        </VStack>
      </Box>
    </VStack>
  );
};

export default Card;
