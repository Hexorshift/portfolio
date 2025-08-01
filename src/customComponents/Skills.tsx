import { Flex, Box, Text, Card, Image } from "@chakra-ui/react";
import NextImage from "next/image";
import Section from "./Section";

interface Technology {
  name: string;
  img: string;
  background?: boolean;
}

const Skills = () => {
  const programmingLanguagesAndDatabases: Technology[] = [
    { name: "HTML", img: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
    { name: "CSS", img: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
    { name: "TypeScript", img: "https://cdn.worldvectorlogo.com/logos/typescript.svg" },
    {
      name: "JavaScript",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/500px-JavaScript-logo.png"
    },
    { name: "Java", img: "https://cdn.worldvectorlogo.com/logos/java.svg" },
    { name: "PHP", img: "https://www.php.net//images/logos/new-php-logo.svg" },
    { name: "Dart", img: "https://cdn.worldvectorlogo.com/logos/dart.svg" },
    { name: "MySQL", img: "https://cdn.worldvectorlogo.com/logos/mysql-logo-pure.svg" },
    { name: "MongoDB", img: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" }
  ];
  const frameworks: Technology[] = [
    { name: "Node.js", img: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
    { name: "Deno", img: "https://cdn.worldvectorlogo.com/logos/deno-1.svg", background: true },
    {
      name: "Bun",
      img: "https://bun.sh/logo.svg",
      background: true
    },
    { name: "React", img: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
    { name: "Next.js", img: "https://cdn.worldvectorlogo.com/logos/next-js.svg", background: true },
    { name: "Electron", img: "https://cdn.worldvectorlogo.com/logos/electron-1.svg" },
    { name: "Chakra UI", img: "https://avatars.githubusercontent.com/u/54212428?s=200" },
    { name: "Laravel", img: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg" },
    {
      name: "RESTful APIs",
      img: "https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/rest-api-icon.png",
      background: true
    }
  ];
  const furtherKnowledge: Technology[] = [
    { name: "Linux", img: "https://cdn.worldvectorlogo.com/logos/ubuntu-4.svg" },
    { name: "Git", img: "https://cdn.worldvectorlogo.com/logos/git-icon.svg" },
    { name: "AWS", img: "https://cdn.worldvectorlogo.com/logos/aws-2.svg" },
    { name: "Docker", img: "https://cdn.worldvectorlogo.com/logos/docker-4.svg" },
    { name: "Google Workspace", img: "https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg" },
    { name: "Microsoft Office Suite", img: "https://cdn.worldvectorlogo.com/logos/Microsoft-365.svg" }
  ];

  const TechnologyCard = ({ technology }: { technology: Technology }) => {
    return (
      <Card.Root
        height="50px"
        data-state="open"
        _open={{ animationName: "fade-in, scale-in", animationDuration: "300ms" }}
        borderRadius="xl"
      >
        <Card.Body p="2" style={{ height: "100%" }}>
          <Flex flexDir="row" gap="1" alignItems="center" style={{ height: "100%" }}>
            <NextImage
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "10%",
                background: technology.background ? "white" : ""
              }}
              width={32}
              height={32}
              src={technology.img}
              alt={`${technology.name} Logo`}
            />
            <Text>{technology.name}</Text>
          </Flex>
        </Card.Body>
      </Card.Root>
    );
  };

  return (
    <Section heading="Skills">
      <Flex flexDir="column" gap="3">
        <Box>
          <Text fontSize="xl" fontWeight="bold">
            Programming Languages and Databases
          </Text>
          <Flex flexWrap="wrap" gap={2}>
            {programmingLanguagesAndDatabases.map((technology, index) => (
              <TechnologyCard key={index} technology={technology} />
            ))}
          </Flex>
        </Box>
        <Box>
          <Text fontSize="xl" fontWeight="bold">
            Frameworks
          </Text>
          <Flex flexWrap="wrap" gap={2}>
            {frameworks.map((technology, index) => {
              return <TechnologyCard key={index} technology={technology} />;
            })}
          </Flex>
        </Box>
        <Box>
          <Text fontSize="xl" fontWeight="bold">
            Further Knowledge
          </Text>
          <Flex flexWrap="wrap" gap={2}>
            {furtherKnowledge.map((technology, index) => {
              return <TechnologyCard key={index} technology={technology} />;
            })}
          </Flex>
        </Box>
      </Flex>
    </Section>
  );
};

export default Skills;
