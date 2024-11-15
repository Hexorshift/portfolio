import { Flex, Heading, Card, Box, Text } from "@chakra-ui/react";

const Experience = () => {
  return (
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
  );
};

export default Experience;
