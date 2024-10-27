import { Flex, Heading, Text, Box, Image, Card } from "@chakra-ui/react";
import Layout from "@/customComponents/Layout";
import NextImage from "next/image";

export default function Home() {
  return (
    <Layout>
      <Flex mt="3%" flexDir="row" flexWrap="wrap" justifyContent="space-between" alignItems="center">
        <Box>
          <Heading as="h1" fontSize="5xl" fontWeight="bold">
            Abu Chowdhury
          </Heading>
          <Text mt="3" mb="8%" as="h2" fontSize="2xl">
            Aspiring Software Enginner
          </Text>
        </Box>
        <Image asChild width="128px">
          <NextImage
            style={{ borderRadius: "10%" }}
            width="1024"
            height="1024"
            src="https://cdn.discordapp.com/avatars/526449871671001098/6f6dfe91fbe58fbb4a629435e91d1666.webp?size=1024"
            alt="Abu Chowdhury Image"
          />
        </Image>
      </Flex>
      <Flex mt="5%" flexDir={["column", "column", "row"]} justifyContent="space-between" alignItems="start">
        <Heading as="h2" width={["100%", "100%", "25%"]} fontSize="3xl" fontWeight="bold">
          ABOUT ME
        </Heading>
        <Card.Root p="1" width={["100%", "100%", "75%"]}>
          <Text textAlign="justify">
            Hello! My name is Abu Chowdhury, and I am an aspiring software engineer. I enjoy working with various
            technologies and primarily focus on full-stack development.
          </Text>
        </Card.Root>
      </Flex>
      <Flex mt="8%" flexDir={["column", "column", "row"]} justifyContent="space-between" alignItems="start">
        <Heading as="h2" width={["100%", "100%", "25%"]} fontSize="3xl" fontWeight="bold">
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
                    key={index}
                    p="1"
                    flexDir="row"
                    alignItems="center"
                    justifyContent="space-between"
                    my="0.5"
                    mr="2"
                    width="128px"
                  >
                    <Image width="32px" mr="0.5" asChild>
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
                { name: "Electron.js", img: "https://cdn.worldvectorlogo.com/logos/electron-1.svg" },
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
                    key={index}
                    p="1"
                    flexDir="row"
                    alignItems="center"
                    justifyContent="space-between"
                    my="0.5"
                    mr="2"
                    width="128px"
                  >
                    <Image width="32px" mr="0.5" background={lib.background ? "white" : ""} asChild>
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
                { name: "AWS", img: "https://cdn.worldvectorlogo.com/logos/aws-2.svg" }
              ].map((tech: { name: string; img: string }, index) => {
                return (
                  <Card.Root
                    key={index}
                    p="1"
                    flexDir="row"
                    alignItems="center"
                    justifyContent="space-between"
                    my="0.5"
                    mr="2"
                    width="128px"
                  >
                    <Image width="32px" mr="0.5" asChild>
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
      <Flex mt="8%" flexDir={["column", "column", "row"]} justifyContent="space-between" alignItems="start">
        <Heading as="h2" width={["100%", "100%", "25%"]} fontSize="3xl" fontWeight="bold">
          EDUCATION
        </Heading>
        <Card.Root width={["100%", "100%", "75%"]} p="1">
          <Flex flexDir="column">
            <Flex flexDir={["column", "column", "row"]} justifyContent="space-between" alignItems="baseline">
              <Box>
                <Text fontSize="xl" fontWeight="bold">
                  CUNY Queens College
                </Text>
                <Text>Computer Science, Bachelor of Arts</Text>
              </Box>
              <Text>August 2024 - December 2026</Text>
            </Flex>
            <Box mt="2">
              <Text fontWeight="bold">Relevant Courses: </Text>
              <Text>
                Calculus I & II, Object-oriented Programming, Assembly Language, Computer Architecture, Discrete
                Structures
              </Text>
            </Box>
          </Flex>
        </Card.Root>
      </Flex>
      <Flex mt="8%" flexDir={["column", "column", "row"]} justifyContent="space-between" alignItems="start">
        <Heading as="h2" width={["100%", "100%", "25%"]} fontSize="3xl" fontWeight="bold">
          EXPERIENCE
        </Heading>
        <Card.Root p="1" width={["100%", "100%", "75%"]}>
          <Flex flexDir="column">
            <Flex flexDir={["column", "column", "row"]} justifyContent="space-between" alignItems="baseline">
              <Box>
                <Text fontSize="xl" fontWeight="bold">
                  Tajerian Lab
                </Text>
                <Text>CUNY STEM Research Academy Intern</Text>
              </Box>
              <Text>July - August 2023</Text>
            </Flex>
            <Box mt="2">
              <Text mb="1">● Conducted research characterizing the brain vascular perfusion</Text>
              <Text mb="1">● Operated RWD RFLSI III Laser Speckle Imaging System and software</Text>
              <Text>● Wrote a research paper and created a poster and PowerPoint presentation to present</Text>
            </Box>
          </Flex>
        </Card.Root>
      </Flex>
      <Flex mt="8%" flexDir={["column", "column", "row"]} justifyContent="space-between" alignItems="start">
        <Heading as="h2" width={["100%", "100%", "25%"]} fontSize="3xl" fontWeight="bold">
          PROJECTS
        </Heading>
        <Flex width={["100%", "100%", "75%"]}></Flex>
      </Flex>
    </Layout>
  );
}
