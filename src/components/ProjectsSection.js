import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, useMediaQuery } from "@chakra-ui/react";
import Card from "./Card";

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
    title: "E-Ticaret Entegrasyonu",
    description:
      "Websitenize herhangi bir platformda sanal pos, trendyol/hepsiburada veya Google adwords gibi entegrasyonları yaparım.",
  },
  {
    title: "OpenAI Saas",
    description:
      "Websitenize OpenAI api ile yapay zeka chatbotu, veya diğer gömülü uygulamaları uçtan uca yazar ve implemente ederim.",
  },
  {
    title: "Sürdürülebilirlik",
    description:
      "İş ne olursa olsun yeşil yasayı dikkate alarak ilerlerim. Sadelik, geri dönüşüm ve tasarruf sözümü tutmak için emek harcarım.",
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
      "Canva, Photoshop ve video düzenleme uygulamalarıyla içerik üretir, ayrıca dijital reklam ve reklam analiz işlerinizi de yaparım.",
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
  const [isLargerThanMobile] = useMediaQuery("(min-width: 768px)");
  // minWidth={{
  //   base: "200px",
  //   sm: "100px",
  //   md: "200px",
  //   lg: "400px",
  //   xl: "600px",
  // }}

  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Hizmetlerim
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns={{
          sm: "repeat(1,minmax(0,1fr))",
          md: "repeat(2,minmax(0,1fr))",
        }}
        gridGap={{ base: "8", sm: "4", md: "6", lg: "8" }}
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
    </FullScreenSection>
  );
};

export default ProjectsSection;
