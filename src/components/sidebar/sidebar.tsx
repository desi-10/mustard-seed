"use client";
import {
  BarChart,
  ClipboardList,
  Menu,
  Settings,
  UsersRound,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const Sidebar = () => {
  const links = [
    { title: "Dashboard", href: "/home", icon: <BarChart /> },
    { title: "Records", href: "/records", icon: <ClipboardList /> },
    { title: "Users", href: "/users", icon: <UsersRound /> },
    { title: "Settings", href: "/settings", icon: <Settings /> },
  ];
  const [toggleSidebar, setToggleSidebar] = React.useState(false);
  const pathname = usePathname();

  return (
    <aside
      className={`${
        toggleSidebar ? "w-[5%]" : "w-[8%]"
      } bg-blue-900 flex  pt-5 h-screen overflow-y-auto transition-all duration-300`}
    >
      <div className="w-full">
        <TooltipProvider skipDelayDuration={300}>
          <Tooltip>
            <TooltipTrigger asChild>
              <div
                onClick={() => setToggleSidebar(!toggleSidebar)}
                className="mb-20 mt-7  flex space-x-2 justify-center bg-white text-blue-900 p-4 w-fit mx-auto cursor-pointer rounded-lg"
              >
                <Menu />
                {!toggleSidebar && <p>Menu</p>}
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Menu</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <section className="text-white text-sm">
          {links.map((link) => (
            <Link href={link.href} key={link.title}>
              <section className="relative">
                <motion.div
                  className={`${
                    link.href === pathname ? " text-blue-900" : ""
                  }  w-full p-4 relative z-10  transition-all duration-300 `}
                >
                  <TooltipProvider skipDelayDuration={300}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div
                          className={`flex items-center space-x-2 ${
                            toggleSidebar ? "justify-center" : ""
                          }`}
                        >
                          {link.icon}

                          {!toggleSidebar && <p>{link.title}</p>}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent side="right">
                        <p>{link.title}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </motion.div>
                <AnimatePresence>
                  {link.href === pathname && (
                    <motion.div
                      layoutId="sidebar"
                      className="absolute top-0 right-0 h-full w-full  border-r-4 bg-white border-amber-400"
                    ></motion.div>
                  )}
                </AnimatePresence>
              </section>
            </Link>
          ))}
        </section>
      </div>
    </aside>
  );
};

export default Sidebar;
