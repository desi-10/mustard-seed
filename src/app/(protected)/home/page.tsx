import { auth } from "@/auth";
import SummaryCard from "@/components/Dashboard/smmarycard";
import { Laugh } from "lucide-react";
import React from "react";

const HomePage = async () => {
  const user = await auth();

  return (
    <div className="">
      <section className="flex items-center space-x-2 text-2xl">
        <h1>Welcome</h1>
        <div className="relative  text-blue-900 w-fit">
          <h1 className="relative z-10 font-bold">
            {user?.user?.name?.toUpperCase()}
          </h1>
          <div className="absolute bottom-0 w-full h-[10px] bg-amber-400"></div>
        </div>
        {" , "}
      </section>

      <section className="my-10 flex justify-center items-center ">
        <SummaryCard />
      </section>
    </div>
  );
};

export default HomePage;
