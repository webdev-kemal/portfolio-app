import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import { useTheme } from "./context/themeContext";

function App() {
  const { theme } = useTheme();

  return (
    <AlertProvider>
      <main id={theme}>
        <LandingSection />
        <ProjectsSection />
        <ContactMeSection />
        <Alert />
      </main>
    </AlertProvider>
  );
}

export default App;
