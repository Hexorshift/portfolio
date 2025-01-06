import { Box } from "@chakra-ui/react";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box maxW="960px" mx="auto" pt="4" px="1">
      <Box>{children}</Box>
      <Footer />
    </Box>
  );
};

export default Layout;
