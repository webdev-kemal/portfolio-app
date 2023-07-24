import React from "react";
import { Avatar, Heading, VStack, Button } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { useTheme } from "../context/themeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import {
  faGit,
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

const greeting = "iş birliği için formu doldurun";
const bio1 = "dev.kemal </>";
const bio2 = "Gözden Geçirebilirsin!";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor="#2A4365"
    >
      <VStack>
        {/* <Avatar
          name={greeting}
          size="xl"
          src={`https://i.pravatar.cc/150?img=7`}
        ></Avatar> */}
        {/* <Heading as="h3" size="sm" marginBottom={4}>
          {greeting}
        </Heading> */}
        <Heading as="h1">{bio1}</Heading>
        {/* <Heading>{bio2}</Heading> */}
      </VStack>

      <VStack>
        {/* <Button colorScheme="blackAlpha" onClick={toggleTheme}>
          <>{theme === "light" ? "Karanlık Mod" : "Aydınlık Mod"}&#160;</>
          {theme === "light" ? (
            <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>
          )}
        </Button> */}
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;