import projects from "@/projects";
import NextLink from "next/link";
import Section from "./Section";
import { Flex, Card, Text, Image } from "@chakra-ui/react";

const Projects = () => {
  return (
    <Section heading="Projects">
      <Flex
        flexDir={{ base: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
        gap={3}
        wrap="wrap"
      >
        {projects.map((project, index) => {
          return (
            <Card.Root
              key={index}
              data-state="open"
              _open={{ animationName: "fade-in, scale-in", animationDuration: "300ms" }}
              flexDir="column"
              justifyContent="space-between"
              width="350px"
              overflow="hidden"
              borderRadius="xl"
            >
              {project.link ? (
                <NextLink href={project.link} target="_blank">
                  <Image src={project.img} alt={project.name} width="350px" height="200px" />
                </NextLink>
              ) : (
                <Image src={project.img} alt={project.name} width="350px" height="200px" />
              )}
              <Card.Body p="1">
                <Flex justifyContent="space-between">
                  {project.link ? (
                    <NextLink href={project.link} target="_blank" style={{ color: "#3182ce" }}>
                      {project.name}
                    </NextLink>
                  ) : (
                    <Text>{project.name}</Text>
                  )}
                  <Text>{project.date}</Text>
                </Flex>
                <Flex justifyContent="space-between">
                  <Text>{project.stack.join(", ")}</Text>
                  {project.github ? (
                    <NextLink href={project.github} target="_blank" style={{ color: "#3182ce" }}>
                      GitHub
                    </NextLink>
                  ) : (
                    ""
                  )}
                </Flex>
              </Card.Body>
            </Card.Root>
          );
        })}
      </Flex>
    </Section>
  );
};

export default Projects;
