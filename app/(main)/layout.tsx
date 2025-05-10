import "../../public/styles/globals.css";

import React, { ReactNode } from "react";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
