import {
  BarChart3,
  SquareArrowDownLeft,
  SquareArrowUpRight,
} from "lucide-react";
import React from "react";

const SummaryCard = () => {
  return (
    <main className="border rounded-lg divide-y p-5 w-[80%] shadow-lg bg-white">
      <h1 className="p-2 font-bold">Meetings History</h1>
      <div className="flex justify-between items-center divide-x-2 space-x-3 p-3">
        <section className="flex items-center space-x-4 p-5 w-full">
          <div className="p-2 border-[2px] border-green-700 rounded-lg bg-green-50">
            <SquareArrowDownLeft className="w-10 h-10 fill-green-700 text-white " />
          </div>
          <div className="space-y-3">
            <p className="text-lg">Total Income</p>
            <p className="text-green-700 text-xl font-bold">+$2,000</p>
            <p className="text-sm text-gray-500">in 24 Transactions</p>
          </div>
        </section>

        <section className="flex items-center space-x-4 p-5 w-full">
          <div className="p-2 border-[2px] border-red-700 rounded-lg bg-red-50">
            <SquareArrowUpRight className="w-10 h-10 fill-red-700 text-white" />
          </div>
          <div className="space-y-3">
            <p className="text-lg">Total Income</p>
            <p className="text-red-700 text-xl font-bold">+$2,000</p>
            <p className="text-sm text-gray-500">in 24 Transactions</p>
          </div>
        </section>

        <section className="flex items-center space-x-4 p-5 w-full">
          <div className="p-2 border-[2px] border-purple-700 rounded-lg bg-purple-50">
            <BarChart3 className="w-10 h-10 fill-purple-700 text-white" />
          </div>
          <div className="space-y-3">
            <p className="text-lg">Total Income</p>
            <p className="text-purple-700 text-xl font-bold">+$2,000</p>
            <p className="text-sm text-gray-500">in 24 Transactions</p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default SummaryCard;
