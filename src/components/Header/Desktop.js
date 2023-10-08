import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { keyframes } from "@emotion/react";
import { Text, HStack, Box, IconButton, useMediaQuery } from "@chakra-ui/react";

const spin = keyframes`
from {
  transform: rotateY(0deg);
}
to {
  transform: rotateY(180deg);
}
`;

const Desktop = ({ socials, handleClick }) => {
  return (
    <HStack px={16} py={4} justifyContent="space-between" alignItems="center">
      {/* // Show the social icons when the screen size is larger than mobile */}
      <nav>
        <HStack spacing={6} justifyContent="center">
          {socials.map((item) => (
            <Text
              as="a"
              key={item.url}
              href={item.url}
              target="_blank"
              transition="transform .5s"
              _hover={{ transform: "rotateY(180deg)" }}
              // _hover={{ animation: `${spin} 0.3s linear ` }}
              w="100%"
              h="100%"
            >
              <FontAwesomeIcon icon={item.icon} size="2x" />
            </Text>
          ))}

          <Text
            as="a"
            href="https://bionluk.com/kemaldikkulak"
            target="_blank"
            transition="transform .5s"
            _hover={{ transform: "rotateY(180deg)" }}
            // _hover={{ animation: `${spin} 0.3s linear ` }}
            w="100%"
            h="100%"
            size="2x"
            // color="#cf3893"
            fontWeight={600}
            fontSize="25px"
            fontStyle="italic"
            m={0}
          >
            bi
          </Text>
        </HStack>
      </nav>
      <nav>
        <HStack spacing={8}>
          <a
            onClick={(e) => handleClick(e, "projects")}
            href="/#projects-section"
          >
            Servisler
          </a>
          <a
            onClick={(e) => handleClick(e, "contactme")}
            href="/#contactme-section"
          >
            İletişim
          </a>
        </HStack>
      </nav>
    </HStack>
  );
};

export default Desktop;
