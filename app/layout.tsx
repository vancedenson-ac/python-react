import NavigationBar from "@/components/NavigationBar";
import Provider from "./Provider";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vance Denson",
  description: "Fullstack Stackfull",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light ">
      <body className={inter.className}>
        <Provider>
          <div className="flex flex-col relative h-full">

          <NavigationBar />
          {children}
          <Footer />
          </div>
        </Provider>
      </body>
    </html>
  );
}
