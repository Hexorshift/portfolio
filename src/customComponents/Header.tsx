import { Flex, Box, Heading, Text, Image, Link } from "@chakra-ui/react";
import NextImage from "next/image";

const Header = () => {
  return (
    <Flex mt="3%" flexDir="row" flexWrap="wrap" justifyContent="space-between" alignItems="center">
      <Box>
        <Heading as="h1" fontSize="5xl" fontWeight="bold">
          Abu Chowdhury
        </Heading>
        <Text mt="3" mb="8%" as="h2" fontSize="2xl">
          Aspiring Software Enginner
        </Text>
      </Box>
      {/* <Image asChild width="128px">
        <NextImage
          style={{ borderRadius: "10%" }}
          width="1024"
          height="1024"
          src="https://cdn.discordapp.com/avatars/526449871671001098/6f6dfe91fbe58fbb4a629435e91d1666.webp?size=1024"
          alt="Abu Chowdhury Image"
        />
      </Image> */}
      <Flex flexDir="column">
        <Link href="/#AboutMe">About Me</Link>
        <Link href="/#Skills">Skills</Link>
        <Link href="/#Education">Education</Link>
        <Link href="/#Experience">Experience</Link>
        <Link href="/#Projects">Projects</Link>
      </Flex>
    </Flex>
  );
};

export default Header;
