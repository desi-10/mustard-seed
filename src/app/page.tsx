import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative h-screen w-screen flex justify-center items-center bg-[url('/assest/mustard.jpg')] bg-center bg-cover">
      <section className="absolute flex justify-between w-[900px] items-center bg-white z-50  divide-x-2 py-16 shadow-lg rounded-lg">
        <div className="flex justify-center items-center px-14">
          <Image
            src="/assest/cci.jpg"
            alt="cci-logo"
            width={600}
            height={600}
          />
        </div>
        <div className="w-full px-20">
          <h1 className="mb-5 text-center text-2xl">Sign In</h1>

          <section className="space-y-3">
            <div>
              <Label htmlFor="username">Username</Label>
              <Input type="text" placeholder="eg. James Bond" />
            </div>
            <div className="">
              <Label htmlFor="password">Password</Label>
              <Input type="password" placeholder="************" />
            </div>
            <Link href="#">
              <p className="text-right text-sm mt-3 mb-3 hover:text-blue-950 hover:underline">
                Forgotten Password?
              </p>
            </Link>
            <Button className="w-full  bg-amber-400 text-blue-900 hover:bg-blue-900 hover:text-white transition-colors duration-300">
              Login
            </Button>
          </section>
        </div>
      </section>
      <div className="fixed inset-0 h-screen w-screen bg-blue-950/80 "></div>
    </main>
  );
}
