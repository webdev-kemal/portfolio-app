import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Web Tasarımı",
    description:
      "Mobile-first responsive web tasarımınızı yapar, yumuşak geçişleri ve kullanıcı etkileşimi olan arayüzler oluştururum.",
    getImageSrc: () => require("../images/photo1.jpg"),
  },
  {
    title: "Sosyal Medya",
    description:
      "Canva, Photoshop ve video düzenleme uygulamalarına hakimim, ayrıca dijital reklam ve pazarlama işlerinizi de yaparım.",
    getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    title: "SEO Yazarlığı ",
    description:
      "Türkçe, İngilizce ve Fransızca olarak Google'da sizi öne çıkartacak içerik üretirim. Özgün, anahtar kelimelerin olduğu bloglar yaratırım.",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
  {
    title: "E-Ticaret Entegre",
    description:
      "Websitenize herhangi bir platformda sanal pos, kargo, trendyol/hepsiburada veya google adwords gibi entegrasyonları yaparım.",
    getImageSrc: () => require("../images/photo4.jpg"),
  },
];

const ProjectsSection = () => {
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
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
