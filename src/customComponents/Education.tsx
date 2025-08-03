import { Flex, Box, Text, Card } from "@chakra-ui/react";
import Section from "./Section";
import Image from "next/image";

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
          <Flex alignItems="center" gap={2}>
            <Image
              src="/qc-logo.png"
              alt="Queens College Logo"
              width={256}
              height={256}
              style={{ width: "48px", height: "48px", borderRadius: "10px" }}
            />
            <Box width="100%">
              <Flex width="100%" justifyContent="space-between" alignItems="baseline">
                <Text fontSize="xl" fontWeight="bold">
                  CUNY Queens College
                </Text>
                <Text>Expected graduation: May 2026</Text>
              </Flex>
              <Text>Computer Science, Bachelor of Arts</Text>
            </Box>
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
