import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, useMediaQuery } from "@chakra-ui/react";
import Card from "./Card";
import { useTheme } from "../context/themeContext";
import DefaultFullScreen from "./DefaultFullScreen";

const projects = [
  {
    title: "Web Tasarımı",
    description:
      "Mobile-first responsive web tasarımınızı yapar, yumuşak geçişleri ve kullanıcı etkileşimi olan arayüzler oluştururum.",
    // getImageSrc: () => require("../images/photo1.jpg"),
  },
  {
    title: "Sosyal Medya",
    description:
      "Canva, Photoshop ve video düzenleme uygulamalarına hakimim, ayrıca dijital reklam ve takip işlerinizi de yaparım.",
    // getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    title: "SEO Yazarlığı ",
    description:
      "Türkçe, İngilizce ve Fransızca Google'da sizi öne çıkartacak içerik üretirim. Özgün, anahtar kelimelerle blog yazarım.",
  },
  {
    title: "Grafik Tasarımı",
    description:
      "Size profesyonel, markanızda kullanabileceğiniz logo, tasarım paleti ve reklam panosu oluştururum.",
  },
  // {
  //   title: "OpenAI Saas",
  //   description:
  //     "Websitenize OpenAI api ile yapay zeka chatbotu, veya diğer gömülü uygulamaları uçtan uca yazar ve implemente ederim.",
  // },
  // {
  //   title: "E-Ticaret Entegrasyonu",
  //   description:
  //     "Websitenize herhangi bir platformda sanal pos, trendyol/hepsiburada veya Google adwords gibi entegrasyonları yaparım.",
  // },
  // {
  //   title: "OpenAI Saas",
  //   description:
  //     "Websitenize OpenAI api ile yapay zeka chatbotu, veya diğer gömülü uygulamaları uçtan uca yazar ve implemente ederim.",
  // },
  {
    title: "Unity App",
    description:
      "Unity ile 2D oyun taslağınızı ve kurgunuzu yaparım. Eski Stick Combat Multiplayer oyununu 2023'de baştan yazdım.",
  },
  {
    title: "İngilizce Ders",
    description:
      "Quizlet'te 1 yıldır devam eden İngilizce A1-B2 sınıfımda 100'den fazla set oluşturduk. Özel dersler de veriyorum.",
  },
];

const projectmobile = [
  {
    title: "Web Tasarımı",
    description:
      "Mobile-first responsive web tasarımınızı yapar, yumuşak geçişleri ve kullanıcı etkileşimi olan arayüzler oluştururum.",
    // getImageSrc: () => require("../images/photo1.jpg"),
  },
  {
    title: "Sosyal Medya",
    description:
      "Canva, Photoshop ve video düzenleme uygulamalarıyla içerik üretir, ayrıca dijital reklam ve reklam analiz işlerinizi yaparım.",
    // getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    title: "SEO Yazarlığı ",
    description:
      "Türkçe, İngilizce ve Fransızca dilinde sizi Google'da öne çıkaracak içerik üretir, seçtiğiniz anahtar kelimelerle blog yazarım.",
    // getImageSrc: () => require("../images/photo3.jpg"),
  },
];

const ProjectsSection = () => {
  const { theme, toggleTheme, bgColur } = useTheme();
  const [isLargerThanMobile] = useMediaQuery("(min-width: 768px)");
  // minWidth={{
  //   base: "200px",
  //   sm: "100px",
  //   md: "200px",
  //   lg: "400px",
  //   xl: "600px",
  // }}

  return (
    <DefaultFullScreen
      // backgroundColor="#14532d"
      // backgroundColor="#cf3893"
      backgroundColor={bgColur}
    >
      <Box
        color="white"
        isDarkBackground
        p={8}
        py={16}
        alignItems="flex-start"
        spacing={8}
      >
        <Heading mx="auto" as="h1" mb={5} id="projects-section">
          Hizmetlerim
        </Heading>
        <Box
          display="grid"
          gridTemplateColumns={{
            sm: "repeat(1,minmax(0,1fr))",
            md: "repeat(2,minmax(0,1fr))",
          }}
          gridGap={{ base: "8", sm: "6", md: "6", lg: "8" }}
        >
          {isLargerThanMobile
            ? projects.map((project) => (
                <Card
                  key={project.title}
                  title={project.title}
                  description={project.description}
                />
              ))
            : projectmobile.map((project) => (
                <Card
                  key={project.title}
                  title={project.title}
                  description={project.description}
                />
              ))}
        </Box>
      </Box>
    </DefaultFullScreen>
  );
};

export default ProjectsSection;
