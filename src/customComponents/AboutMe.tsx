import { Flex, Heading, Card, Text } from "@chakra-ui/react";

const AboutMe = () => {
  return (
    <Flex id="AboutMe" mt="5%" flexDir={["column", "column", "row"]} justifyContent="space-between" alignItems="start">
      <Heading as="h2" fontSize="3xl" fontWeight="bold">
        ABOUT ME
      </Heading>
      <Card.Root p="1" width={["100%", "100%", "75%"]}>
        <Text>
          Hello! My name is Abu Chowdhury, and I am an aspiring software engineer. I enjoy working with various
          technologies and primarily focus on full-stack development.
        </Text>
      </Card.Root>
    </Flex>
  );
};

export default AboutMe;
