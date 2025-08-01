import { Flex, Heading, Text, Menu, Portal, IconButton, Box } from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import NextLink from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <Flex justifyContent="space-between" alignItems="flex-start">
      <Flex flexDir="row" alignItems="center" gap={3}>
        <Image
          style={{ width: "128px", borderRadius: "100%" }}
          src="/headshot.jpeg"
          alt="headshot"
          width={256}
          height={256}
        />
        <Box>
          <Heading as="h1" fontSize="3xl" fontWeight="bold">
            Abu Chowdhury
          </Heading>
          <Text>Aspiring Software Enginner</Text>
        </Box>
      </Flex>
      <Menu.Root>
        <Menu.Trigger asChild>
          <IconButton variant="outline" size="md" borderRadius="xl">
            <RxHamburgerMenu />
          </IconButton>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content borderRadius="xl">
              {[
                { name: "About Me" },
                { name: "Skills" },
                { name: "Education" },
                { name: "Experience" },
                { name: "Projects" },
                { name: "Certificates" }
              ].map((link, index) => {
                return (
                  <Menu.Item key={index} value={link.name} borderRadius="xl">
                    <NextLink href={`/#${link.name}`}>{link.name}</NextLink>
                  </Menu.Item>
                );
              })}
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </Flex>
  );
};

export default Header;
