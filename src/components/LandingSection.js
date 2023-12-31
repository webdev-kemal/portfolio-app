import React, { useEffect, useRef } from "react";
import { Avatar, Heading, VStack, Button, Box, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { useTheme } from "../context/themeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";

const greeting = "Kemal Dikkulak";
const bio1 = "dev.kemal </>";
const bio2 = "Web Geliştiricisi & Fransızca Öğretmeni";
const bio3 =
  "React, Redux, Axios, REST API, Linux, Git, CI, Django, Docker, AWS, EC2, S3";
// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => {
  const { theme, toggleTheme, hasJustTriggered } = useTheme();
  const avatarRef = useRef(null);
  const bgRef = useRef(null);

  const navigate = useNavigate();

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
          <Heading as="h1">{bio1}</Heading>
          <Text as="p">{bio2}</Text>
          <Box bg="rgba(0,0,0,0.2)" w="70%">
            <Text textAlign={"center"} w="90%" mx="auto" as="h4">
              {bio3}
            </Text>
          </Box>
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
          {/* <Link
            as="a"
            onClick={() => {
              navigate("/blogs");
            }}
            _hover={{ cursor: "pointer" }}
          >
            Projelerim
          </Link> */}
        </VStack>
      </FullScreenSection>
    </div>
  );
};

export default LandingSection;
