import Navbar from "@/components/navbar/navbar";
import Sidebar from "@/components/sidebar/sidebar";
import {
  BarChart,
  ClipboardList,
  Menu,
  Settings,
  SquareUserRound,
  UsersRound,
} from "lucide-react";
import { IoIosPeople } from "react-icons/io";

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex">
        <Sidebar />
        <main className="w-full h-screen overflow-y-auto bg-gray-100">
          <Navbar />
          <div className="pt-10 px-6">{children}</div>
        </main>
      </body>
    </html>
  );
}
