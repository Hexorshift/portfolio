"use client";

import {
  Flex,
  Heading,
  Card,
  Text,
  List,
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot
} from "@chakra-ui/react";
import { useState } from "react";

const Experience = () => {
  const [value, setValue] = useState(["third-item"]);

  return (
    <Flex
      id="Experience"
      mt="5%"
      flexDir={["column", "column", "row"]}
      justifyContent="space-between"
      alignItems="start"
    >
      <Heading as="h2" fontSize="3xl" fontWeight="bold">
        EXPERIENCE
      </Heading>
      <Flex flexDir="column" width={["100%", "100%", "75%"]}>
        <Card.Root p="1">
          <AccordionRoot multiple value={value} onValueChange={(e) => setValue(e.value)}>
            {[
              {
                value: "third-item",
                company: "The Difference App",
                title: "Software Engineer Intern",
                date: "March - May 2025",
                responsiblites: [
                  "Developed a group feature for 10,000+ users using Laravel, Flutter, and MySQL, enabling collaborative weight management and tracking",
                  "Collaborated with a cross-functional team of 25+ other interns using Agile methodology and worked closely with stakeholders to gather requirements",
                  "Delivered the feature within a Sprint, actively contributed to daily Scrum meetings to align with project goals, and improve team collaboration"
                ]
              },
              {
                value: "second-item",
                company: "Tajerian Lab",
                title: "Research Intern",
                date: "July - August 2023",
                responsiblites: [
                  "Conducted research on the brain's vascular perfusion following peripheral nerve trauma alongside graduate students, contributing to a deeper understanding of nerve injury impacts",
                  "Operated RWD RFLSI III Laser Speckle Imaging System and software to gather precise data on blood flow, enhancing the accuracy of research findings, and learned to use various RWD apparatus for comprehensive analysis",
                  "Wrote a research paper and presented the findings to faculty, worked with other interns in a team, and attended weekly research findings meetings",
                  "Leveraged Microsoft Excel to record and analyze experimental results, track progress, and manage precise timekeeping for research experiments"
                ]
              },
              {
                value: "first-item",
                company: "QSI Computer Science Club",
                title: "Developer Mentor",
                date: "September 2021 - June 2022",
                responsiblites: [
                  "Took the initiative to establish the club from the ground up, recruited 20+ members, built projects using  various tools and frameworks",
                  "Taught backend, frontend, and game development using HTML/CSS/JavaScript, Node.js and React",
                  "Developed and maintained a website to represent the club using Next.js",
                  "Attended the Queens College and QSI Club Leadership Conference in June 2023, gaining insights into effective club management and leadership strategies"
                ]
              }
            ].map((item, index) => {
              return (
                <AccordionItem key={index} value={item.value}>
                  <AccordionItemTrigger cursor="pointer">
                    <Flex
                      flexDir={["column", "column", "row"]}
                      width="100%"
                      justifyContent="space-between"
                      alignItems="baseline"
                    >
                      <Flex flexDir="column" justifyItems="start" alignItems="start">
                        <Text fontSize="xl" fontWeight="bold">
                          {item.company}
                        </Text>
                        <Text fontSize="sm" color="fg.muted">
                          {item.title}
                        </Text>
                      </Flex>
                      <Text>{item.date}</Text>
                    </Flex>
                  </AccordionItemTrigger>
                  <AccordionItemContent>
                    <List.Root as="ol" listStyle="decimal" px="5">
                      {item.responsiblites.map((responsiblity, index) => {
                        return (
                          <List.Item key={index} mb="1">
                            {responsiblity}
                          </List.Item>
                        );
                      })}
                    </List.Root>
                  </AccordionItemContent>
                </AccordionItem>
              );
            })}
          </AccordionRoot>
        </Card.Root>
      </Flex>
    </Flex>
  );
};

export default Experience;
