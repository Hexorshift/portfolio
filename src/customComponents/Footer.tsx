import { ColorModeButton } from "@/components/ui/color-mode";
import { Box, Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box mt="5%" py="1" borderTop="1px black solid" _dark={{ borderTop: "1px white solid" }}>
      <Flex flexDir="row" justifyContent="space-between" alignItems="center">
        <Text>Abu Chowdhury, {new Date().getFullYear()}</Text>
        <ColorModeButton borderRadius="xl" variant="subtle" />
      </Flex>
    </Box>
  );
};

export default Footer;
