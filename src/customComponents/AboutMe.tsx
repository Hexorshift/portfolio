import { Card, Text } from "@chakra-ui/react";
import Section from "./Section";

const AboutMe = () => {
  return (
    <Section heading="About Me">
      <Card.Root borderRadius="xl">
        <Card.Body p="2">
          <Text>
            Hello! My name is Abu Chowdhury, and I am an aspiring software engineer based in New York City. I enjoy
            working with various technologies and primarily focus on full-stack development.
          </Text>
        </Card.Body>
      </Card.Root>
    </Section>
  );
};

export default AboutMe;
