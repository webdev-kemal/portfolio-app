import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Text, HStack, IconButton, useMediaQuery } from "@chakra-ui/react";

const Desktop = ({ socials, handleClick }) => {
  return (
    <HStack px={16} py={4} justifyContent="space-between" alignItems="center">
      {/* // Show the social icons when the screen size is larger than mobile */}
      <nav>
        <HStack spacing={6}>
          {socials.map((item) => (
            <Text
              as="a"
              key={item.url}
              href={item.url}
              target="_blank"
              transition="transform 0.5s"
              _hover={{ transform: "rotateY(180deg)" }}
              w="100%"
              h="100%"
            >
              <FontAwesomeIcon icon={item.icon} size="2x" />
            </Text>
          ))}
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