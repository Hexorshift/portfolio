import Link from "next/link";
import experiences from "@/experiences";
import Section from "./Section";
import { Accordion, Avatar, Box, Flex, List, Text, Timeline } from "@chakra-ui/react";

const Experience = () => {
  return (
    <Section heading="Experience">
      <Timeline.Root size="xl" px="1">
        {experiences.map((experience, index) => {
          return (
            <Timeline.Item key={index}>
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator>
                  <Avatar.Root size="md">
                    <Avatar.Image src={experience.logo} />
                    <Avatar.Fallback name={experience.company} />
                  </Avatar.Root>
                </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content mt="-4">
                <Accordion.Root multiple>
                  <Accordion.Item value={experience.company}>
                    <Accordion.ItemTrigger>
                      <Box flex="1">
                        <Text fontSize="xl">{experience.company}</Text>
                        <Flex flexDir={{ base: "column", md: "row" }} justifyContent="space-between" fontSize="md">
                          <Text>{experience.title}</Text>
                          <Text>{experience.date}</Text>
                        </Flex>
                      </Box>
                      <Accordion.ItemIndicator />
                    </Accordion.ItemTrigger>
                    <Accordion.ItemContent>
                      <Accordion.ItemBody>
                        <List.Root as="ol" listStyle="decimal" px="5">
                          {experience.responsiblites.map((responsiblity, index) => {
                            return <List.Item key={index}>{responsiblity}</List.Item>;
                          })}
                        </List.Root>
                      </Accordion.ItemBody>
                    </Accordion.ItemContent>
                  </Accordion.Item>
                </Accordion.Root>
              </Timeline.Content>
            </Timeline.Item>
          );
        })}
      </Timeline.Root>
    </Section>
  );
};

export default Experience;
