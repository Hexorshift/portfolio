import NextLink from "next/link";
import Image from "next/image";
import { Flex, Heading, Text, IconButton, Box, HStack } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <Box>
      <Box mt="2" py="2" borderTop="1px black solid" _dark={{ borderTop: "1px white solid" }}>
        <Flex flexDir="row" justifyContent="flex-end" alignItems="center">
          <Flex gap="2">
            <HStack>
              <NextLink href="https://github.com/Hexorshift" target="_blank">
                <IconButton variant="subtle" borderRadius="xl">
                  <FaGithub />
                </IconButton>
              </NextLink>
            </HStack>
            <HStack>
              <NextLink href="https://www.linkedin.com/in/chowdhury-abu/" target="_blank">
                <IconButton variant="subtle" borderRadius="xl">
                  <FaLinkedin />
                </IconButton>
              </NextLink>
            </HStack>
          </Flex>
        </Flex>
      </Box>
      <Flex flexDir="row" justifyContent="space-between" alignItems="center" gap={3}>
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
    </Box>
  );
};

export default Header;
