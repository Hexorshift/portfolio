import Section from "./Section";
import { Flex, Text, Box, Card } from "@chakra-ui/react";

const Certificates = () => {
  return (
    <Section heading="Certificates">
      <Card.Root borderRadius="xl">
        <Card.Body p="2">
          <Box>
            <Flex justifyContent="space-between" alignItems="baseline">
              <Text fontWeight="bold">CodePath Intermediate Cybersecurity Course</Text>
              <Text>November 2024</Text>
            </Flex>
            <Text>Credential Id: 263167</Text>
          </Box>
          <Text>
            Acquired hands-on experience in Blue Team defense strategies, including SOC operations, endpoint monitoring
            with SIEMs and HIDS, network monitoring, and vulnerability scanning. Developed skills in incident response,
            triage, containment, recovery, and utilizing threat intelligence frameworks like MITRE ATT&CK for threat
            analysis.
          </Text>
        </Card.Body>
      </Card.Root>
    </Section>
  );
};

export default Certificates;
