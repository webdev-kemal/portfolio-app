import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { useTheme } from "../context/themeContext";

const Footer = () => {
  const { bgColur } = useTheme();

  return (
    <Box backgroundColor={bgColur}>
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
          {/* <p>Okan • © 2023</p> */}
          <p>dev.kemal • © 2023</p>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
