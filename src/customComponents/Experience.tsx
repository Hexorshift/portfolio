import experiences from "@/experiences";
import Section from "./Section";
import { Avatar, Flex, List, Text, Timeline } from "@chakra-ui/react";
import Link from "next/link";

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
              <Timeline.Content>
                <Link href={experience.url} target="_blank">
                  <Timeline.Title textDecor="underline" fontSize="xl">
                    {experience.company}
                  </Timeline.Title>
                </Link>
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
