import { Flex, Heading, Card, Box, Text, List } from "@chakra-ui/react";

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
          <Flex flexDir={["column", "column", "row"]} justifyContent="space-between" alignItems="baseline">
            <Box>
              <Text fontSize="xl" fontWeight="bold">
                Tajerian Lab
              </Text>
              <Text>Research Intern</Text>
            </Box>
            <Text>July - August 2023</Text>
          </Flex>
          <List.Root as="ol" listStyle="decimal" px="5">
            <List.Item mb="1">
              Conducted research on the brain's vascular perfusion following peripheral nerve trauma alongside graduate
              students, contributing to a deeper understanding of nerve injury impacts
            </List.Item>
            <List.Item mb="1">
              Operated RWD RFLSI III Laser Speckle Imaging System and software to gather precise data on blood flow,
              enhancing the accuracy of research findings, and learned to use various RWD apparatus for comprehensive
              analysis
            </List.Item>
            <List.Item mb="1">
              Wrote a research paper and presented the findings to faculty, worked with other interns in a team, and
              attended weekly research findings meetings
            </List.Item>
            <List.Item>
              Leveraged Microsoft Excel to record and analyze experimental results, track progress, and manage precise
              timekeeping for research experiments
            </List.Item>
          </List.Root>
        </Card.Root>
        <Card.Root mt="3" p="1">
          <Flex flexDir={["column", "column", "row"]} justifyContent="space-between" alignItems="baseline">
            <Box>
              <Text fontSize="xl" fontWeight="bold">
                QSI Computer Science Club
              </Text>
              <Text>Developer Mentor</Text>
            </Box>
            <Text>September 2021 - June 2022</Text>
          </Flex>
          <List.Root as="ol" listStyle="decimal" px="5">
            <List.Item mb="1">
              Took the initiative to establish the club from the ground up, recruited 20+ members, built projects using
              various tools and frameworks
            </List.Item>
            <List.Item mb="1">
              Taught backend, frontend, and game development using HTML/CSS/JavaScript, Node.js and React
            </List.Item>
            <List.Item mb="1">Developed and maintained a website to represent the club using Next.js</List.Item>
            <List.Item>
              Attended the Queens College and QSI Club Leadership Conference in June 2023, gaining insights into
              effective club management and leadership strategies
            </List.Item>
          </List.Root>
        </Card.Root>
      </Flex>
    </Flex>
  );
};

export default Experience;
