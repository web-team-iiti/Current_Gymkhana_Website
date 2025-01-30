import React from "react";
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import NavbarComponent from "@/components/NavbarComponent";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "IITI Gymkhana Website",
//   description: "Student Gymkhana is the student organization of IIT Indore. The Senate consists of two branches namely the Executive and the Councillors. The elected representatives of the students strive to promote growth and leadership among the students by helping them maximize their talents by coordinating various programs. To promote co-curricular activities and interests. Gymkhana has a number of clubs and groups dedicated to the interests of the students.",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <title>IITI Students` Gymkhana</title>
      <meta name="description" content="Student Gymkhana is the student organization of IIT Indore. The Senate consists of two branches namely the Executive and the Councillors. The elected representatives of the students strive to promote growth and leadership among the students by helping them maximize their talents by coordinating various programs. To promote co-curricular activities and interests. Gymkhana has a number of clubs and groups dedicated to the interests of the students." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <Providers>
          <NavbarComponent />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
