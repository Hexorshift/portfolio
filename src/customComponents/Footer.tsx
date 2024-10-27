import { ColorModeButton } from "@/components/ui/color-mode";
import { Box, Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box mt="5%" py="1" borderTop="1px black solid" _dark={{ borderTop: "1px white solid" }}>
      <Flex flexDir="row" justifyContent="space-between" alignItems="center">
        <Box>
          <Link href="https://github.com/Hexorshift" target="_blank" mr="2">
            GitHub
          </Link>
          <Link href="https://www.linkedin.com/in/chowdhury-abu/" target="_blank">
            LinkedIn
          </Link>
        </Box>
        <ColorModeButton />
      </Flex>
      <Text>Abu Chowdhury, {new Date().getFullYear()}</Text>
    </Box>
  );
};

export default Footer;
