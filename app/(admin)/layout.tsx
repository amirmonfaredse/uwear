import "../../public/styles/globals.css";

import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export default function RootLayout({ children }: Props) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
