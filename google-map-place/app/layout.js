import { Inter, Raleway } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";
import HeaderNavBar from "./components/HeaderNavBar";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Provider>
          <HeaderNavBar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
