import React from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

type TypeCredentialsSuccess = {
  label: string;
};

const CredentialsSuccess = ({ label }: TypeCredentialsSuccess) => {
  return (
    <main>
      <section className="flex items-center space-x-2 text-sm text-green-500 bg-green-200 p-2 rounded">
        <IoIosCheckmarkCircleOutline className="text-xl" />
        <span>{label}</span>
      </section>
    </main>
  );
};

export default CredentialsSuccess;
