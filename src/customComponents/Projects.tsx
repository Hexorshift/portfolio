import { Flex, Heading, Card, Text, Image, Link } from "@chakra-ui/react";
import NextLink from "next/link";

const Projects = () => {
  return (
    <Flex id="Projects" mt="5%" flexDir={["column", "column", "row"]} justifyContent="space-between" alignItems="start">
      <Heading as="h2" fontSize="3xl" fontWeight="bold">
        PROJECTS
      </Heading>
      <Flex flexDir="row" flexWrap="wrap" justifyContent="space-between" width={["100%", "100%", "75%"]}>
        {[
          {
            name: "Portfolio",
            stack: ["TypeScript", "Next.js", "Chakra UI"],
            date: "October 2024",
            link: "https://abuc.me",
            github: "https://github.com/Hexorshift/portfolio",
            img: "https://i.ibb.co/ft9mRyG/Screenshot-2025-01-06-145959.png"
          },
          {
            name: "React Weather App",
            stack: ["TypeScript", "React", "Chakra UI", "RESTful APIs"],
            date: "September 2024",
            link: "https://weather-hexorshift.netlify.app/",
            github: "",
            img: "https://i.ibb.co/QnYRb6X/Screenshot-2025-01-08-120454.png"
          },
          {
            name: "Mouse Controls",
            stack: ["JavaScript", "Electron", "React", "Chakra UI"],
            date: "January 2024",
            link: "https://flightsim.to/file/67688/mouse-controls-use-mouse-as-yoke",
            github: "",
            img: "https://cdn.flightsim.to/images/26/mouse-controls-use-mouse-as-yoke-740471-1715031874-SxwmJ.jpg?width=1400"
          },
          {
            name: "Axe Doo (Discord Bot)",
            stack: ["JavaScript", "Node.js", "Discord.js", "AWS"],
            date: "December 2023",
            link: "",
            github: "https://github.com/Hexorshift/Axe-Doo",
            img: "https://cdn.discordapp.com/avatars/900931654749667358/0ce1c16d95f60996afbac577afed6930.png?size=1024"
          },
          {
            name: "Aka Japan's Website",
            stack: ["JavaScript", "Next.js", "Chakra UI"],
            date: "August 2022",
            link: "https://akajapan.org",
            github: "https://github.com/Hexorshift/aj-front-end",
            img: "https://i.ibb.co/G0DMxkH/Screenshot-2025-01-08-121340.png"
          },
          {
            name: "Snake Game Clone",
            stack: ["HTML", "CSS", "JavaScript", "p5.js"],
            date: "June 2021",
            link: "https://snake-x.netlify.app/",
            github: "",
            img: "https://i.ibb.co/zXcbwBn/Screenshot-2025-01-08-121620.png"
          }
        ].map(
          (
            project: { name: string; stack: string[]; date: string; link?: string; github?: string; img?: string },
            index
          ) => {
            return (
              <Card.Root
                data-state="open"
                _open={{
                  animationName: "fade-in, scale-in",
                  animationDuration: "300ms"
                }}
                size="sm"
                key={index}
                flexDir="column"
                justifyContent="space-between"
                my="1"
                width="350px"
                overflow="hidden"
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
                      <Link href={project.link} target="_blank" color="blue.500" _focus={{ outline: "none" }}>
                        {project.name}
                      </Link>
                    ) : (
                      <Text>{project.name}</Text>
                    )}
                    <Text>{project.date}</Text>
                  </Flex>
                  <Flex justifyContent="space-between">
                    <Text>{project.stack.join(", ")}</Text>
                    {project.github ? (
                      <Link href={project.github} target="_blank" color="blue.500" _focus={{ outline: "none" }}>
                        GitHub
                      </Link>
                    ) : (
                      ""
                    )}
                  </Flex>
                </Card.Body>
              </Card.Root>
            );
          }
        )}
      </Flex>
    </Flex>
  );
};

export default Projects;
