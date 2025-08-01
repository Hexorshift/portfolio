import { Flex, Box, Text, Card } from "@chakra-ui/react";
import Section from "./Section";

const Education = () => {
  const courses = [
    "Algorithmic Problem Solving",
    "Object-oriented Programming in Java/C++",
    "Discrete Structures",
    "Assembly Language",
    "Computer Architecture",
    "Data Structures",
    "Theory of Computation"
  ];
  return (
    <Section heading="Education">
      <Card.Root borderRadius="xl">
        <Card.Body p="2">
          <Flex justifyContent="space-between" alignItems="baseline">
            <Box>
              <Text fontSize="xl" fontWeight="bold">
                CUNY Queens College
              </Text>
              <Text>Computer Science, Bachelor of Arts</Text>
            </Box>
            <Text>Expected graduation: May 2026</Text>
          </Flex>
          <Box mt="2">
            <Text fontWeight="bold">Relevant Courses:</Text>
            <Text>{courses.join(", ")}</Text>
          </Box>
        </Card.Body>
      </Card.Root>
    </Section>
  );
};

export default Education;
