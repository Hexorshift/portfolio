import type { Metadata, Viewport } from "next";
import { Provider } from "@/components/ui/provider";
import { Lexend } from "next/font/google";
import { Box } from "@chakra-ui/react";
import Footer from "@/customComponents/Footer";

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Abu Chowdhury - Aspiring Software Engineer",
  description:
    "Hello! My name is Abu Chowdhury, and I am an aspiring software engineer. I enjoy working with various technologies and primarily focus on full-stack development.",
  twitter: {
    title: "Abu Chowdhury - Aspiring Software Engineer",
    description:
      "Hello! My name is Abu Chowdhury, and I am an aspiring software engineer. I enjoy working with various technologies and primarily focus on full-stack development.",
    images: "https://abuc.me/overview.png",
    card: "summary_large_image"
  },
  openGraph: {
    type: "website",
    url: "https://abuc.me",
    siteName: "Abu Chowdhury",
    title: "Abu Chowdhury - Aspiring Software Engineer",
    description:
      "Hello! My name is Abu Chowdhury, and I am an aspiring software engineer. I enjoy working with various technologies and primarily focus on full-stack development.",
    images: "https://abuc.me/overview.png"
  }
};

export const viewport: Viewport = {
  themeColor: "#38b6ff"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={lexend.className} suppressHydrationWarning>
      <body>
        <Provider>
          <Box maxW="960px" mx="auto" py="3.5" px="1">
            {children}
            <Footer />
          </Box>
        </Provider>
      </body>
    </html>
  );
}
