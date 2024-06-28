"use client";
import SummaryCard from "@/components/Dashboard/smmarycard";
import { DataTable } from "@/components/table/data-table";
import { Button } from "@/components/ui/button";
import { ArrowBigLeftIcon, PlusCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const Records = () => {
  const router = useRouter();

  return (
    <div>
      <button
        onClick={() => router.back()}
        className="flex items-center space-x-2"
      >
        <ArrowBigLeftIcon />
        <h1>Back</h1>
      </button>

      <section className="flex justify-between items-center mt-5">
        <p className="text-3xl kumbh">All Records</p>

        <Button className="text-blue-900 bg-amber-400 space-x-2 flex items-center hover:text-white hover:bg-blue-900 transition-all duration-300">
          <PlusCircle />
          <p>Create Record</p>
        </Button>
      </section>

      <section className="my-10 flex justify-center items-center ">
        <SummaryCard />
      </section>

      <div className="my-16  p-5 bg-white rounded-lg shadow-lg">
        <h3 className="font-bold mb-5">Meetings History</h3>
        <DataTable data={[]} columns={[]} />
      </div>
    </div>
  );
};

export default Records;
