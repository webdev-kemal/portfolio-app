import React, { useEffect, useRef } from "react";
import {
  Avatar,
  Heading,
  VStack,
  Button,
  Box,
  Text,
  Link,
} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { useTheme } from "../context/themeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
// import InstagramEmbed from "react-instagram-embed";

const greeting = "Kemal Dikkulak";
const bio1 = "goksoydil.com";
const bio2 = "lingslide.com";
const desc1 =
  "React (Chakra) + Django + AWS ve sanal pos ile yayınladığım kurs yükleme ve satın alma sitesi.";
const desc2 = "lorem17lorem15lorem15lorem15";

// Implement the UI for the Blogs component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const Blogs = () => {
  const { theme, toggleTheme, hasJustTriggered } = useTheme();
  const avatarRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    gsap.to(avatarRef.current, {
      y: 17, // move up and down by 20px
      duration: 1, // duration of one way
      rotation: -6,

      repeat: -1, // repeat indefinitely
      yoyo: true, // reverse the animation on each alternate repetition
      ease: "power1.inOut", // smooth start and end
    });
  }, []);

  const instagramEmbedLink = "https://www.instagram.com/p/CyF0w16tLtJ/";

  return (
    <div>
      <FullScreenSection
        justifyContent="center"
        alignItems="center"
        // ref={bgRef}
        // backgroundColor="#2A4365" //old green
        // backgroundColor="#16161d"
      >
        <VStack>
          <Avatar
            ref={avatarRef}
            name={greeting}
            size="2xl"
            // src={`https://i.pravatar.cc/150?img=7`}
            src={`https://i.ibb.co/dmkR92H/kemaldikkulak.png" alt="removal-ai-cbbed5af-b367-4c12-a22e-d1928b38e819-logom`}
          ></Avatar>
          {/* <Heading as="h3" size="sm" marginBottom={4}>
              {greeting}
            </Heading> */}
          {/* <Heading as="h1">{bio1}</Heading> */}
          <Heading as="h1" to={bio1}>
            {bio1}
          </Heading>
          <Text as="p">{desc1}</Text>
          <Heading as="h1">{bio2}</Heading>
          <Text as="p">{desc2}</Text>
        </VStack>
        <VStack>
          <Button
            colorScheme="transparent"
            onClick={toggleTheme}
            disabled={hasJustTriggered}
            mt={5}
            fontSize="30px"
            // size="lg"
          >
            {/* <> */}
            {/* {theme === "light" ? "Karanlık Mod" : "Aydınlık Mod"}&#160;</> */}
            {theme === "light" ? (
              <FontAwesomeIcon color="black" icon={faMoon}></FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>
            )}
          </Button>
        </VStack>
      </FullScreenSection>
    </div>
  );
};

export default Blogs;
