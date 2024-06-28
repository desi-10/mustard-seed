import { auth } from "@/auth";
import PieChartComponent from "@/components/Dashboard/piechart";

const HomePage = async () => {
  const user = await auth();

  const years = [2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030];

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

      <div className="mt-5">
        <PieChartComponent />
      </div>
    </div>
  );
};

export default HomePage;
