import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Abu Chowdhury - Aspiring Software Engineer",
    short_name: "Abu Chowdhury - Aspiring Software Engineer",
    description:
      "Hello! My name is Abu Chowdhury, and I am an aspiring software engineer. I enjoy working with various technologies and primarily focus on full-stack development.",
    start_url: "/",
    display: "standalone",
    background_color: "#38b6ff",
    theme_color: "#38b6ff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon"
      }
    ]
  };
}
