import { Flex, Heading, Box, Text, Card, Image } from "@chakra-ui/react";
import NextImage from "next/image";

const Skills = () => {
  return (
    <Flex id="Skills" mt="5%" flexDir={["column", "column", "row"]} justifyContent="space-between" alignItems="start">
      <Heading as="h2" fontSize="3xl" fontWeight="bold">
        SKILLS
      </Heading>
      <Flex width={["100%", "100%", "75%"]} flexDir="column">
        <Box>
          <Text fontSize="xl" fontWeight="bold">
            Programming Languages
          </Text>
          <Flex flexWrap="wrap">
            {[
              { name: "HTML", img: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
              { name: "CSS", img: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
              { name: "TypeScript", img: "https://cdn.worldvectorlogo.com/logos/typescript.svg" },
              { name: "JavaScript", img: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg" },
              { name: "Java", img: "https://cdn.worldvectorlogo.com/logos/java.svg" },
              { name: "C++", img: "https://cdn.worldvectorlogo.com/logos/c.svg" }
            ].map((lang: { name: string; img: string }, index) => {
              return (
                <Card.Root
                  data-state="open"
                  _open={{
                    animationName: "fade-in, scale-in",
                    animationDuration: "300ms"
                  }}
                  key={index}
                  p="1"
                  flexDir="row"
                  alignItems="center"
                  justifyContent="space-between"
                  my="0.5"
                  mr="2"
                >
                  <Image width="32px" mr="2" asChild>
                    <NextImage
                      style={{ borderRadius: "10%" }}
                      width="256"
                      height="256"
                      src={lang.img}
                      alt={`${lang.name} Logo`}
                    />
                  </Image>
                  <Text>{lang.name}</Text>
                </Card.Root>
              );
            })}
          </Flex>
        </Box>
        <Box width="100%" mt="4">
          <Text fontSize="xl" fontWeight="bold">
            Technologies
          </Text>
          <Flex flexWrap="wrap">
            {[
              { name: "Node.js", img: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
              { name: "Deno", img: "https://cdn.worldvectorlogo.com/logos/deno-1.svg", background: true },
              { name: "React", img: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
              { name: "Next.js", img: "https://cdn.worldvectorlogo.com/logos/next-js.svg", background: true },
              { name: "Electron", img: "https://cdn.worldvectorlogo.com/logos/electron-1.svg" },
              { name: "Chakra UI", img: "https://avatars.githubusercontent.com/u/54212428?s=200" },
              { name: "MongoDB", img: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
              {
                name: "RESTful APIs",
                img: "https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/rest-api-icon.png",
                background: true
              }
            ].map((lib: { name: string; img: string; background?: boolean }, index) => {
              return (
                <Card.Root
                  data-state="open"
                  _open={{
                    animationName: "fade-in, scale-in",
                    animationDuration: "300ms"
                  }}
                  key={index}
                  p="1"
                  flexDir="row"
                  alignItems="center"
                  justifyContent="space-between"
                  my="0.5"
                  mr="2"
                >
                  <Image width="32px" mr="2" background={lib.background ? "white" : ""} asChild>
                    <NextImage
                      style={{ borderRadius: "10%" }}
                      width="256"
                      height="256"
                      src={lib.img}
                      alt={`${lib.name} Logo`}
                    />
                  </Image>
                  <Text>{lib.name}</Text>
                </Card.Root>
              );
            })}
          </Flex>
        </Box>
        <Box width="100%" mt="4">
          <Text fontSize="xl" fontWeight="bold">
            Further Knowledge
          </Text>
          <Flex flexWrap="wrap">
            {[
              { name: "Linux", img: "https://cdn.worldvectorlogo.com/logos/ubuntu-4.svg" },
              { name: "Git", img: "https://cdn.worldvectorlogo.com/logos/git-icon.svg" },
              { name: "AWS", img: "https://cdn.worldvectorlogo.com/logos/aws-2.svg" },
              { name: "Docker", img: "https://cdn.worldvectorlogo.com/logos/docker-4.svg" },
              { name: "Google Workspace", img: "https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg" },
              { name: "Microsoft Office Suite", img: "https://cdn.worldvectorlogo.com/logos/Microsoft-365.svg" }
            ].map((tech: { name: string; img: string }, index) => {
              return (
                <Card.Root
                  data-state="open"
                  _open={{
                    animationName: "fade-in, scale-in",
                    animationDuration: "300ms"
                  }}
                  key={index}
                  p="1"
                  flexDir="row"
                  alignItems="center"
                  justifyContent="space-between"
                  my="0.5"
                  mr="2"
                >
                  <Image width="32px" mr="2" asChild>
                    <NextImage
                      style={{ borderRadius: "10%" }}
                      width="256"
                      height="256"
                      src={tech.img}
                      alt={`${tech.name} Logo`}
                    />
                  </Image>
                  <Text>{tech.name}</Text>
                </Card.Root>
              );
            })}
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Skills;
