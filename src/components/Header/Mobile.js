import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../../context/themeContext";
import { IconButton, Grid, Text, Link, VStack } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Divider,
  Box,
  Spacer,
} from "@chakra-ui/react";

const socials = [
  {
    name: "Instagram",

    url: "https://www.instagram.com/dev.kemal/",
  },
  {
    name: "Linkedin",

    url: "https://www.linkedin.com/in/mustafa-kemal-okan-dikkulak-b35251286/",
  },
  {
    name: "Bionluk",

    url: "https://bionluk.com/kemaldikkulak",
  },
  {
    name: "Github",

    url: "https://github.com/webdev-kemal",
  },
  {
    name: "Projelerim",

    url: "/blogs",
  },
];

const Mobile = ({ handleClick }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { theme, bgColur } = useTheme();
  return (
    <Grid
      templateColumns="1fr 5fr 1fr"
      gap={6}
      px={8}
      py={4}
      alignItems="center"
    >
      {/* IconButton on the left */}
      <IconButton
        icon={
          <FontAwesomeIcon
            icon={faBars}
            size="2x"
            color={theme === "light" ? "#ffffff" : "#ffffff"}
          />
        }
        aria-label="Toggle navigation"
        onClick={onOpen}
        backgroundColor="transparent"
      />

      {/* Centered Text logo */}
      <Text
        fontSize="xl"
        textAlign="center"
        color={theme === "light" ? "#ffffff" : "#ffffff"}
      >
        dev.kemal
      </Text>

      {/* Empty column */}
      <div />

      <Drawer
        placement="left"
        onClose={onClose}
        isOpen={isOpen}
        backgroundColor={"green"}
      >
        <DrawerOverlay>
          <DrawerContent
            bg={theme === "light" ? bgColur : "#16161d"}
            color={theme === "light" ? "#ffffff" : "#ffffff"}
            p={3}
            spacing={2}
          >
            <DrawerCloseButton
              color={theme === "light" ? "#ffffff" : "#ffffff"}
              p={5}
              size="2xl"
            />
            {/* <DrawerHeader
              fontSize="2.25em"
              color={theme === "light" ? "#000000" : "#ffffff"}
              mb={6}
            >
              Menu
            </DrawerHeader> */}
            <DrawerBody fontSize="2xl">
              <VStack py={10} spacing={4} h="100%">
                {socials.map((item) => (
                  <>
                    <Link
                      key={item.url}
                      href={item.url}
                      isExternal
                      w="100%"
                      fontSize="26px"
                      fontWeight="bold"
                      _focus={{ backgroundColor: "white", color: "black" }}
                    >
                      {item.name}
                    </Link>
                  </>
                ))}
                <Divider orientation="horizontal" />

                <Text
                  as="a"
                  w="100%"
                  textalign="left"
                  onClick={(e) => handleClick(e, "projects")}
                  href="/#projects-section"
                  fontSize="23px"
                >
                  Servisler
                </Text>
                <Text
                  as="a"
                  w="100%"
                  textalign="left"
                  onClick={(e) => handleClick(e, "contactme")}
                  href="/#contactme-section"
                  fontSize="23px"
                >
                  İletişim
                </Text>

                <Spacer />
                <Text textalign="left" w="100%" fontSize="18px">
                  Kemal Dikkulak
                  <br />
                  Galatasaray Üniversitesi
                </Text>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Grid>
  );
};

export default Mobile;
