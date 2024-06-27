"use client";
import ActionBtn from "@/components/ActionBtn";
import CredentialsError from "@/components/CredentialsError";
import CredentialsSuccess from "@/components/CredentialsSuccess";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signIn } from "next-auth/react";

const signInSchema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

type TypeSignIn = z.infer<typeof signInSchema>;

export default function Home() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<TypeSignIn>({
    resolver: zodResolver(signInSchema),
  });

  const router = useRouter();

  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const onSubmit = async (data: TypeSignIn) => {
    try {
      await signIn("credentials", {
        username: data.username,
        password: data.password,
        callbackUrl: "/home",
      });
      setIsSuccess(true);
      reset();
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
  };

  return (
    <main className="relative h-screen w-screen flex justify-center items-center bg-[url('/assest/mustard.jpg')] bg-center bg-cover">
      <section className="absolute  justify-between w-[90%] md:w-[500px] items-center bg-white z-50  shadow-lg rounded-lg p-10">
        <div className="flex justify-center items-center mb-2">
          <Image
            src="/assest/cci.png"
            alt="cci-image"
            width={100}
            height={100}
          />
        </div>
        <div className="w-full">
          <h1 className="mb-5 text-center text-lg md:text-2xl font-bold">
            Sign In
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <div>
              <Label htmlFor="username">Username</Label>
              <Input
                {...register("username")}
                id="username"
                type="text"
                placeholder="eg. James Bond"
                disabled={isSubmitting}
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
                id="password"
                type="password"
                placeholder="************"
                disabled={isSubmitting}
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
              className="w-fit mr-auto text-sm mt-3 mb-3 hover:text-blue-950 hover:underline disabled:cursor-not-allowed"
            >
              Forgotten Password?
            </button>
            <ActionBtn
              isSubmitting={isSubmitting}
              label="Sign In"
              loadingLabel="Signing In..."
            />
            {isError && <CredentialsError label="Invalid credentials" />}
            {isSuccess && <CredentialsSuccess label="Login successfully" />}
          </form>
        </div>
      </section>
      <div className="fixed inset-0 h-screen w-screen bg-blue-950/80 "></div>
    </main>
  );
}
