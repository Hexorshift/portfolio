import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider";
import { Lexend } from "next/font/google";

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Abu Chowdhury - Aspiring Software Engineer",
  description:
    "Hello! My name is Abu Chowdhury, and I am an aspiring software engineer. I enjoy working with various technologies and primarily focus on full-stack development.",
  themeColor: "#38b6ff",
  twitter: {
    title: "Abu Chowdhury - Aspiring Software Engineer",
    description:
      "Hello! My name is Abu Chowdhury, and I am an aspiring software engineer. I enjoy working with various technologies and primarily focus on full-stack development.",
    images: "https://i.imghippo.com/files/fl4330aw.png",
    card: "summary_large_image"
  },
  openGraph: {
    type: "website",
    url: "https://abuc.me",
    siteName: "Abu Chowdhury - Aspiring Software Engineer",
    title: "Abu Chowdhury - Aspiring Software Engineer",
    description:
      "Hello! My name is Abu Chowdhury, and I am an aspiring software engineer. I enjoy working with various technologies and primarily focus on full-stack development.",
    images: "https://i.imghippo.com/files/fl4330aw.png"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={lexend.className} suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
