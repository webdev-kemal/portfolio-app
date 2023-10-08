import React, { useEffect, useRef } from "react";
import { VStack, Box } from "@chakra-ui/react";
import { gsap } from "gsap";
import { useTheme } from "../context/themeContext";

/**
 * Illustrates the use of children prop and spread operator
 */
const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  const { theme, toggleTheme } = useTheme();
  const bgRef = useRef(null);

  useEffect(() => {
    const mask = document.querySelector("#mask");

    if (theme === "dark") {
      gsap.set(mask, {
        width: 0,
        height: 0,
        borderRadius: "100%",
        backgroundColor: "#65647C",
      });
      gsap.to(mask, {
        duration: 0.6,
        width: "2200px",
        height: "2200px",
        borderRadius: "0%",
        ease: "power2.in",
      });
    } else {
      gsap.set(mask, {
        //old green DAF7A6
        backgroundColor: "#EEEEEE",
        width: 0,
        height: 0,
        borderRadius: "100%",
      });
      gsap.to(mask, {
        duration: 0.6,
        width: "2200px",
        height: "2200px",
        borderRadius: "0%",
        ease: "power2.in",
      });
    }
  }, [theme]);

  useEffect(() => {
    setTimeout(() => {
      if (theme === "dark") {
        // bgRef.current.style.backgroundColor = "#16161d";
        bgRef.current.style.backgroundColor = "#65647C";
      } else {
        bgRef.current.style.backgroundColor = "#EEEEEE";
      }
    }, 600);
  }, [theme]);

  return (
    <VStack
      // backgroundColor={boxProps.backgroundColor}
      ref={bgRef}
      color={theme === "dark" ? "white" : "black"}
      // backgroundColor={theme === "dark" ? "black" : "white"}
      // transition="2s"
      overflow="hidden"
    >
      <VStack
        maxWidth={{ base: "1280px" }}
        minHeight="100vh"
        {...boxProps}
        pos="relative"
      >
        <div
          id="mask"
          style={{
            position: "absolute",
            zIndex: 1,
            // backgroundColor: "#000000",
          }}
        />
        <Box zIndex="10">{children}</Box>
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
