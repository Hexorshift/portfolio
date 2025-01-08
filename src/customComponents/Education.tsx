import { Flex, Heading, Card, Box, Text } from "@chakra-ui/react";

const Education = () => {
  return (
    <Flex
      id="Education"
      mt="5%"
      flexDir={["column", "column", "row"]}
      justifyContent="space-between"
      alignItems="start"
    >
      <Heading as="h2" fontSize="3xl" fontWeight="bold">
        EDUCATION
      </Heading>
      <Card.Root width={["100%", "100%", "75%"]} p="1">
        <Flex flexDir={["column", "column", "row"]} justifyContent="space-between" alignItems="baseline">
          <Box>
            <Text fontSize="xl" fontWeight="bold">
              CUNY Queens College
            </Text>
            <Text>Computer Science, Bachelor of Arts</Text>
          </Box>
          <Text>Expected graduation: 2026</Text>
        </Flex>
        <Box mt="2">
          <Text fontWeight="bold">Relevant Courses:</Text>
          <Text>
            Algorithmic Problem Solving, Object-oriented Programming in Java/C++, Discrete Structures, Assembly
            Language, Computer Architecture, Data Structures, Theory of Computation
          </Text>
        </Box>
      </Card.Root>
    </Flex>
  );
};

export default Education;
