import AboutMe from "@/customComponents/AboutMe";
import Skills from "@/customComponents/Skills";
import Education from "@/customComponents/Education";
import Experience from "@/customComponents/Experience";
import Projects from "@/customComponents/Projects";
import Header from "@/customComponents/Header";
import Certificates from "@/customComponents/Certificates";
import { SimpleGrid } from "@chakra-ui/react";

export default function Home() {
  return (
    <SimpleGrid gap={{ base: "8" }}>
      <Header />
      <AboutMe />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Certificates />
    </SimpleGrid>
  );
}
