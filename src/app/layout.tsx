import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider";
import { Lexend } from "next/font/google";

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Abu Chowdhury - Aspiring Software Engineer",
  description: "Welcome to my portfolio!"
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
