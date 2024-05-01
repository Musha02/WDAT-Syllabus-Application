import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";
import { UserProvider } from '@auth0/nextjs-auth0/client';

const epilogue = Epilogue({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Syllabus Application",
  description: "Design by: Ahamed Musharraf"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <UserProvider>
        <body
          className={` ${epilogue.className}  ${
            process.env.NODE_ENV == "development" ? "debug-screens" : ""
          }`}
        >
          {children}
        </body>
      </UserProvider>
    </html>
  );
}
