import { Flex, Heading, Card, Box, Text } from "@chakra-ui/react";

const Experience = () => {
  return (
    <Flex
      id="Experience"
      mt="8%"
      flexDir={["column", "column", "row"]}
      justifyContent="space-between"
      alignItems="start"
    >
      <Heading as="h2" width={["100%", "100%", "25%"]} fontSize="3xl" fontWeight="bold">
        EXPERIENCE
      </Heading>
      <Flex flexDir="column" width={["100%", "100%", "75%"]}>
        <Card.Root p="1">
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
              <Text mb="1">
                ● Conducted research characterizing the brain vascular perfusion following peripheral nerve trauma
                alongside graduate students at Queens College
              </Text>
              <Text mb="1">
                ● Operated RWD RFLSI III Laser Speckle Imaging System and software, learned to use various RWD apparatus
              </Text>
              <Text>● Wrote a research paper and presented the findings of the research to faculty and others</Text>
              <Text>● Worked with other interns in a team and attended weekly research findings meetings</Text>
            </Box>
          </Flex>
        </Card.Root>
        <Card.Root mt="3" p="1">
          <Flex flexDir="column">
            <Flex flexDir={["column", "column", "row"]} justifyContent="space-between" alignItems="baseline">
              <Box>
                <Text fontSize="xl" fontWeight="bold">
                  QSI Computer Science Club
                </Text>
                <Text>Founder & Mentor</Text>
              </Box>
              <Text>September 2021 - June 2022</Text>
            </Flex>
            <Box mt="2">
              <Text mb="1">
                ● Took the initiative to establish the club from the ground up, recruited 20+ members, built projects
                using various tools and frameworks
              </Text>
              <Text mb="1">
                ● Taught backend, frontend, and game development using HTML/CSS/JavaScript, Node.js and React
              </Text>
              <Text>● Developed and maintained a website to represent the club using Next.js</Text>
              <Text>● Attended the Queens College and QSI Club Leadership Conference in June 2023</Text>
            </Box>
          </Flex>
        </Card.Root>
      </Flex>
    </Flex>
  );
};

export default Experience;
