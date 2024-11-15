import { Flex, Heading, Card, Text, Box, Link } from "@chakra-ui/react";

const Projects = () => {
  return (
    <Flex id="Projects" mt="8%" flexDir={["column", "column", "row"]} justifyContent="space-between" alignItems="start">
      <Heading as="h2" width={["100%", "100%", "25%"]} fontSize="3xl" fontWeight="bold">
        PROJECTS
      </Heading>
      <Flex flexDir="column" width={["100%", "100%", "75%"]}>
        {[
          {
            name: "Portfolio",
            stack: ["TypeScript", "Next.js", "Chakra UI"],
            date: "October 2024 - Present",
            link: "https://abuc.me",
            github: "https://github.com/Hexorshift/portfolio"
          },
          {
            name: "React Weather App",
            stack: ["TypeScript", "React", "Chakra UI", "RESTful APIs"],
            date: "September 2024",
            link: "https://weather-hexorshift.netlify.app/",
            github: ""
          },
          {
            name: "Mouse Controls",
            stack: ["JavaScript", "Electron", "React", "Chakra UI"],
            date: "January - May 2024",
            link: "https://flightsim.to/file/67688/mouse-controls-use-mouse-as-yoke",
            github: ""
          },
          {
            name: "Axe Doo (Discord Bot)",
            stack: ["JavaScript", "Node.js", "Discord.js", "AWS"],
            date: "December 2023 - Present",
            link: "",
            github: "https://github.com/Hexorshift/Axe-Doo"
          },
          {
            name: "Aka Japan's Website",
            stack: ["JavaScript", "Next.js", "Chakra UI"],
            date: "August 2022",
            link: "https://akajapan.org",
            github: "https://github.com/Hexorshift/aj-front-end"
          },
          {
            name: "Snake Game Clone",
            stack: ["HTML", "CSS", "JavaScript", "p5.js"],
            date: "June 2021",
            link: "https://snake-x.netlify.app/",
            github: ""
          }
        ].map((project: { name: string; stack: string[]; date: string; link?: string; github?: string }, index) => {
          return (
            <Card.Root key={index} p="1" flexDir="column" justifyContent="space-between" my="0.5">
              <Flex justifyContent="space-between">
                {project.link ? (
                  <Link href={project.link} target="_blank" color="blue.500">
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
                  <Link href={project.github} target="_blank" color="blue.500">
                    GitHub
                  </Link>
                ) : (
                  ""
                )}
              </Flex>
            </Card.Root>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Projects;
