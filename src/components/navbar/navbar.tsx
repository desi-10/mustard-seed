"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { BellDot, ChevronDown, LogOut, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="w-full sticky top-0 z-50 flex items-center justify-between p-6 bg-white/75  backdrop-blur-md border-b-[1px]">
      <section className="flex items-center space-x-5 text-sm">
        <div className="flex justify-center items-center mb-2">
          <Image src="/assest/cci.png" alt="cci-image" width={30} height={30} />
        </div>
        <h4>Christ Cosmopolitan Incorperated</h4>
      </section>

      <section className="flex items-center space-x-5">
        <span>
          <BellDot className="w-5 h-5" />
        </span>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="flex space-x-3 items-center border rounded-lg px-2 py-0.5 text-xs">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p>John Doe</p>
              <p>
                <ChevronDown />
              </p>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span onClick={() => signOut()}>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </section>
    </div>
  );
};

export default Navbar;
