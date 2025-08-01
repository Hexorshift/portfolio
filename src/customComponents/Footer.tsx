import { ColorModeButton } from "@/components/ui/color-mode";
import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

const Footer = () => {
  return (
    <Box mt="5%" py="1" borderTop="1px black solid" _dark={{ borderTop: "1px white solid" }}>
      <Flex flexDir="row" justifyContent="space-between" alignItems="center">
        <Flex gap="2">
          <Link href="https://github.com/Hexorshift" target="_blank">
            GitHub
          </Link>
          <Link href="https://www.linkedin.com/in/chowdhury-abu/" target="_blank">
            LinkedIn
          </Link>
        </Flex>
        <ColorModeButton borderRadius="xl" />
      </Flex>
      <Text>Abu Chowdhury, {new Date().getFullYear()}</Text>
    </Box>
  );
};

export default Footer;
