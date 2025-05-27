import { Flex, Box, Heading, Text, Menu, Portal, Button, IconButton } from "@chakra-ui/react";
import NextLink from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <Flex mt="1%" flexDir="row" flexWrap="wrap" justifyContent="space-between" alignItems="flex-start">
      <Box>
        <Heading as="h1" fontSize="3xl" fontWeight="bold">
          Abu Chowdhury
        </Heading>
        <Text mt="3" mb="5%" as="h2" fontSize="xl">
          Aspiring Software Enginner
        </Text>
      </Box>
      <Menu.Root>
        <Menu.Trigger asChild>
          <IconButton variant="outline" size="sm">
            <RxHamburgerMenu />
          </IconButton>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              <Menu.Item value="about-me">
                <NextLink href="/#AboutMe">About Me</NextLink>
              </Menu.Item>
              <Menu.Item value="skills">
                <NextLink href="/#Skills">Skills</NextLink>
              </Menu.Item>
              <Menu.Item value="education">
                <NextLink href="/#Education">Education</NextLink>
              </Menu.Item>
              <Menu.Item value="experience">
                <NextLink href="/#Experience">Experience</NextLink>
              </Menu.Item>
              <Menu.Item value="projects">
                <NextLink href="/#Projects">Projects</NextLink>
              </Menu.Item>
              <Menu.Item value="certificates">
                <NextLink href="/#Certificates">Certificates</NextLink>
              </Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </Flex>
  );
};

export default Header;
