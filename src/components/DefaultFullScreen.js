import React, { useEffect, useRef } from "react";
import { VStack, Box } from "@chakra-ui/react";

/**
 * Illustrates the use of children prop and spread operator
 */
const DefaultFullScreen = ({ children, customBg, ...boxProps }) => {
  return (
    <VStack
      // backgroundColor={boxProps.backgroundColor}
      //   minWidth="100vh"
      // backgroundColor={theme === "dark" ? "black" : "white"}
      // transition="2s"
      overflow="hidden"
      {...boxProps}
    >
      <VStack
        maxWidth={{ base: "1280px" }}
        // minWidth="100vh"
        minHeight="100vh"
        {...boxProps}
        pos="relative"
      >
        <Box>{children}</Box>
      </VStack>
    </VStack>
  );
};

export default DefaultFullScreen;
