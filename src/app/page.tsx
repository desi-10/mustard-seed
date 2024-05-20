"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { RotatingLines } from "react-loader-spinner";
import { z } from "zod";

const signInSchema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

type TypeSignIn = z.infer<typeof signInSchema>;

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<TypeSignIn>({
    resolver: zodResolver(signInSchema),
  });

  const router = useRouter();

  const onSubmit = async (data: TypeSignIn) => {
    await new Promise((resolve) => setTimeout(resolve, 20000));
    console.log(data);
  };

  return (
    <main className="relative h-screen w-screen flex justify-center items-center bg-[url('/assest/mustard.jpg')] bg-center bg-cover">
      <section className="absolute  justify-between w-[90%] md:w-[500px] items-center bg-white z-50  shadow-lg rounded-lg p-10">
        <div className="flex justify-center items-center mb-5">
          <Image
            src="/assest/cci.jpg"
            alt="cci-logo"
            width={100}
            height={100}
          />
        </div>
        <div className="w-full">
          <h1 className="mb-5 text-center text-lg md:text-2xl">Sign In</h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <div>
              <Label htmlFor="username">Username</Label>
              <Input
                {...register("username")}
                type="text"
                placeholder="eg. James Bond"
              />
              {errors.username && (
                <p className="text-red-500 text-sm">
                  {errors.username.message}
                </p>
              )}
            </div>
            <div className="">
              <Label htmlFor="password">Password</Label>
              <Input
                {...register("password")}
                type="password"
                placeholder="************"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
            <button
              type="button"
              disabled={isSubmitting}
              onClick={() => router.push("/forgotten-password")}
              className="w-fit text-right text-sm mt-3 mb-3 hover:text-blue-950 hover:underline"
            >
              Forgotten Password?
            </button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full  bg-amber-400 text-blue-900 hover:bg-blue-900 hover:text-amber-400 transition-colors duration-300 font-bold"
            >
              {isSubmitting ? (
                <div className="flex items-center space-x-2">
                  <RotatingLines
                    width="20"
                    strokeColor="rgb(23 37 84 / var(--tw-text-opacity))"
                  />{" "}
                  <span>Signing In...</span>
                </div>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>
        </div>
      </section>
      <div className="fixed inset-0 h-screen w-screen bg-blue-950/80 "></div>
    </main>
  );
}
