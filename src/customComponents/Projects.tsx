import { Flex, Heading, Card, Text } from "@chakra-ui/react";

const Projects = () => {
  return (
    <Flex mt="8%" flexDir={["column", "column", "row"]} justifyContent="space-between" alignItems="start">
      <Heading as="h2" width={["100%", "100%", "25%"]} fontSize="3xl" fontWeight="bold">
        PROJECTS
      </Heading>
      <Card.Root p="1" width={["100%", "100%", "75%"]}>
        <Text>Coming soon...</Text>
      </Card.Root>
    </Flex>
  );
};

export default Projects;
