import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import NextLink from "next/link";

const Header = () => {
  return (
    <Flex mt="1%" flexDir="row" flexWrap="wrap" justifyContent="space-between" alignItems="center">
      <Box>
        <Heading as="h1" fontSize="5xl" fontWeight="bold">
          Abu Chowdhury
        </Heading>
        <Text mt="3" mb="5%" as="h2" fontSize="2xl">
          Aspiring Software Enginner
        </Text>
      </Box>

      <Flex flexDir="column">
        <NextLink href="/#AboutMe">About Me</NextLink>
        <NextLink href="/#Skills">Skills</NextLink>
        <NextLink href="/#Education">Education</NextLink>
        <NextLink href="/#Experience">Experience</NextLink>
        <NextLink href="/#Projects">Projects</NextLink>
        <NextLink href="/#Certificates">Certificates</NextLink>
      </Flex>
    </Flex>
  );
};

export default Header;
