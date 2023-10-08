import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Text,
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";
import { useMediaQuery } from "@chakra-ui/react";
import DefaultFullScreen from "./DefaultFullScreen";
import { useTheme } from "../context/themeContext";

const LandingSection = () => {
  const { bgColur, theme } = useTheme();
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);
      if (response.type === "success") {
        formik.resetForm();
      }
    }
  }, [response]);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      type: "",
      comment: "",
    },
    onSubmit: (values) => {
      submit(null, values);
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Zorunlu alan"),
      email: Yup.string()
        .email("Geçerli bir mail girin")
        .required("Zorunlu alan"),
      type: Yup.string(),
      comment: Yup.string().min(20, "En az 20 harf yazın").required("Zorunlu"),
    }),
  });

  return (
    <DefaultFullScreen
      // backgroundColor={theme === "light" ? "#ffcc99" : "#DE8971"}
      backgroundColor={theme === "light" ? "#EEEEEE" : "#65647C"}
    >
      <Box py={16} spacing={8} color={theme === "light" ? "black" : "white"}>
        <VStack
          w="100%"
          minWidth={{
            base: "330px",
            // xs: "360px",
            sm: "360px",
            md: "380px",
            lg: "420px",
            xl: "600px",
          }}
          alignItems="flex-start"
          px={2}
        >
          {/* <Text>{isLargerThan1280 ? "desktop" : "mobile"}</Text> */}
          <Heading as="h1" mb={5} id="contactme-section">
            Bana ulaşın
          </Heading>
          <Box rounded="md" w="100%">
            <form onSubmit={formik.handleSubmit}>
              <VStack spacing={4}>
                <FormControl
                  isInvalid={formik.touched.name && Boolean(formik.errors.name)}
                >
                  <FormLabel htmlFor="name">İsminiz</FormLabel>
                  <Input
                    id="name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    border="1px solid"
                  />
                  <FormErrorMessage>
                    {formik.touched.name && formik.errors.name}
                  </FormErrorMessage>
                </FormControl>
                <FormControl
                  isInvalid={
                    formik.touched.email && Boolean(formik.errors.email)
                  }
                >
                  <FormLabel htmlFor="email">E-postanız</FormLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    border="1px solid"
                  />
                  <FormErrorMessage>
                    {formik.touched.email && formik.errors.email}
                  </FormErrorMessage>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="type">Rica türü</FormLabel>
                  <Select
                    id="type"
                    name="type"
                    value={formik.values.type}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    border="1px solid"
                  >
                    <option value="standart" color="black">
                      Seçiniz
                    </option>
                    <option value="freelance" color="black">
                      Freelance iş teklifi
                    </option>
                    <option value="instagram" color="black">
                      Promosyon
                    </option>
                    <option value="ders" color="black">
                      Özel ders
                    </option>
                    <option value="other">Diğer</option>
                  </Select>
                </FormControl>
                <FormControl
                  isInvalid={
                    formik.touched.comment && Boolean(formik.errors.comment)
                  }
                >
                  <FormLabel htmlFor="comment">Mesajınız</FormLabel>
                  <Textarea
                    id="comment"
                    name="comment"
                    height={250}
                    value={formik.values.comment}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    border="1px solid"
                  />
                  <FormErrorMessage>
                    {formik.touched.comment && formik.errors.comment}
                  </FormErrorMessage>
                </FormControl>
                <Button
                  type="submit"
                  colorScheme="#16161d"
                  width="full"
                  // backgroundColor="#cf3893"
                  backgroundColor={bgColur}
                  isLoading={isLoading}
                >
                  Gönder
                </Button>
              </VStack>
            </form>
          </Box>
        </VStack>
      </Box>
    </DefaultFullScreen>
  );
};

export default LandingSection;
