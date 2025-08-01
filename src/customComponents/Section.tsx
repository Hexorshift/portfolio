import { Flex, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

const Section = ({ children, heading }: { children: ReactNode; heading: string }) => {
  return (
    <Flex id={heading} flexDir={{ base: "column", md: "row" }} justifyContent="space-between">
      <Text as="h2" fontSize="2xl" fontWeight="semibold">
        {heading}
      </Text>
      <Flex width={["100%", "100%", "75%"]} flexDir="column">
        {children}
      </Flex>
    </Flex>
  );
};

export default Section;
