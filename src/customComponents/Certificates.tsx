import { Flex, Heading, Card, Text, Box, Image } from "@chakra-ui/react";
import NextImage from "next/image";

const Certificates = () => {
  return (
    <Flex
      id="Certificates"
      mt="5%"
      flexDir={["column", "column", "row"]}
      justifyContent="space-between"
      alignItems="start"
    >
      <Heading as="h2" width={["100%", "100%", "25%"]} fontSize="3xl" fontWeight="bold">
        CERTIFICATES
      </Heading>
      <Card.Root p="1" width={["100%", "100%", "75%"]}>
        <Flex flexDir={["column", "column", "row"]} justifyContent="space-between" alignItems="baseline">
          <Box>
            <Text fontSize="xl" fontWeight="bold">
              CodePath Intermediate Cybersecurity Course
            </Text>
            <Text>Credential ID 263167</Text>
          </Box>
          <Text>November 2024</Text>
        </Flex>
        <Text>
          Acquired hands-on experience in Blue Team defense strategies, including SOC operations, endpoint monitoring
          with SIEMs and HIDS, network monitoring, and vulnerability scanning. Developed skills in incident response,
          triage, containment, recovery, and utilizing threat intelligence frameworks like MITRE ATT&CK for threat
          analysis.
        </Text>
      </Card.Root>
    </Flex>
  );
};

export default Certificates;
