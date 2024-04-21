import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dynamic Network",
  description: "Best ISP In Bonpara",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        {
          <>
            <Menu />

            {children}
            <Footer />
          </>
        }
      </body>
    </html>
  );
}
