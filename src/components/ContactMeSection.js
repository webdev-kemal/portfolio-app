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

const LandingSection = () => {
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
      firstName: "",
      email: "",
      type: "",
      comment: "",
    },
    onSubmit: (values) => {
      submit(null, values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      type: Yup.string(),
      comment: Yup.string()
        .min(25, "Must be at least 25 characters")
        .required("Required"),
    }),
  });

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack
        w="100%"
        minWidth={{
          base: "350px",
          sm: "330px",
          md: "380px",
          lg: "420px",
          xl: "600px",
        }}
        alignItems="flex-start"
      >
        {/* <Text>{isLargerThan1280 ? "desktop" : "mobile"}</Text> */}
        <Heading as="h1" mb={5} id="contactme-section">
          Bana ulaşın
        </Heading>
        <Box rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl
                isInvalid={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
              >
                <FormLabel htmlFor="firstName">İsminiz</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FormErrorMessage>
                  {formik.touched.firstName && formik.errors.firstName}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={formik.touched.email && Boolean(formik.errors.email)}
              >
                <FormLabel htmlFor="email">E-postanız</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FormErrorMessage>
                  {formik.touched.email && formik.errors.email}
                </FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Rica türünüz</FormLabel>
                <Select
                  id="type"
                  name="type"
                  value={formik.values.type}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="hireMe" color="black">
                    Freelance iş teklifi
                  </option>
                  <option value="openSource" color="black">
                    İnstagram iş birliği
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
                />
                <FormErrorMessage>
                  {formik.touched.comment && formik.errors.comment}
                </FormErrorMessage>
              </FormControl>
              <Button
                type="submit"
                colorScheme="purple"
                width="full"
                isLoading={isLoading}
              >
                Gönder
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
