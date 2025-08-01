import experiences from "@/experiences";
import Section from "./Section";
import { Flex, List, Text, Timeline } from "@chakra-ui/react";
import { LuCircle } from "react-icons/lu";

const Experience = () => {
  return (
    <Section heading="Experience">
      <Timeline.Root size="md">
        {experiences.map((experience, index) => {
          return (
            <Timeline.Item key={index}>
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator>
                  <LuCircle />
                </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content>
                <Timeline.Title fontSize="xl">{experience.company}</Timeline.Title>
                <Timeline.Description fontSize="md">
                  <Flex flexDir={{ base: "column", md: "row" }} justifyContent="space-between">
                    <Text>{experience.title}</Text>
                    <Text>{experience.date}</Text>
                  </Flex>
                </Timeline.Description>
                <List.Root as="ol" listStyle="decimal" px="5">
                  {experience.responsiblites.map((responsiblity, index) => {
                    return <List.Item key={index}>{responsiblity}</List.Item>;
                  })}
                </List.Root>
              </Timeline.Content>
            </Timeline.Item>
          );
        })}
      </Timeline.Root>
    </Section>
  );
};

export default Experience;
