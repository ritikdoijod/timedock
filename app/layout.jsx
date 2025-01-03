import { Poppins } from "next/font/google";

import "@/app/global.css";
import Sidebar from "@/components/layout/sidebar/sidebar";
import Topbar from "@/components/layout/topbar/topbar";

export const metadata = {
  title: "TimeDock",
  description: "TimeDock is a timesheet frontend application",
};

export const poppins = Poppins({
  weight: ['400', '500', '600', '800'],
  subsets: ['latin']
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Sidebar />
        <main>
          <Topbar />
          {children}
        </main>
      </body>
    </html>
  );
}
