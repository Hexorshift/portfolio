import Layout from "@/customComponents/Layout";
import AboutMe from "@/customComponents/AboutMe";
import Skills from "@/customComponents/Skills";
import Education from "@/customComponents/Education";
import Experience from "@/customComponents/Experience";
import Projects from "@/customComponents/Projects";
import Header from "@/customComponents/Header";
import Certificates from "@/customComponents/Certificates";

export default function Home() {
  return (
    <Layout>
      <Header />
      <AboutMe />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Certificates />
    </Layout>
  );
}
