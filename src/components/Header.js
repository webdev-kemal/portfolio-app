import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBars } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, useMediaQuery } from "@chakra-ui/react";

import { useTheme } from "../context/themeContext";
import Mobile from "./Header/Mobile";
import Desktop from "./Header/Desktop";

const socials = [
  {
    name: "E-Posta",
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    name: "Github",
    icon: faGithub,
    url: " https://github.com/webdev-kemal",
  },
  {
    name: "Linkedin",
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/adib-mokhtari-43814a216",
  },
  {
    name: "Instagram",
    icon: faInstagram,
    url: "https://www.instagram.com/dev.kemal/",
  },
  {
    name: "Deviant",
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const [isLargerThanMobile] = useMediaQuery("(min-width: 768px)");
  const headerRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    let lastScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headerElement = headerRef.current;
      if (!headerElement) {
        return;
      }
      if (lastScrollPos > currentScrollPos) {
        headerElement.style.transform = "translate(0)";
      } else {
        headerElement.style.transform = "translateY(-150px)";
      }
      lastScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleShit = () => {
    console.log("31");
  };

  const handleClick = (e, anchor) => {
    e.preventDefault();
    const id = `${anchor}-section`;
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      ref={headerRef}
      position={"fixed"}
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform, background-color"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor={theme === "light" ? "#18181b" : "#18181b"}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto" id="header">
        {isLargerThanMobile ? (
          <Desktop socials={socials} handleClick={handleClick} />
        ) : (
          //this is the header but on small screens
          <Mobile socials={socials} handleClick={handleClick} />
        )}
        {/* <nav>
            <HStack spacing={6}>
              {socials.map((item) => (
                <a key={item.url} href={item.url} target="_blank">
                  <FontAwesomeIcon icon={item.icon} size="2x" />
                </a>
              ))}
            </HStack>
          </nav> */}
      </Box>
    </Box>
  );
};
export default Header;

{
  /* <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        <span class="navbar-toggler-icon"></span>
        </button> */
}

<FontAwesomeIcon icon={faBars} size="2x" />;
