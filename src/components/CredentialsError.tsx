import React from "react";
import { IoWarningOutline } from "react-icons/io5";

type TypeCredentialsError = {
  label: string;
};

const CredentialsError = ({ label }: TypeCredentialsError) => {
  return (
    <main>
      <section className="flex items-center space-x-2 text-sm text-red-500 bg-red-200 p-2 rounded">
        <IoWarningOutline className="text-xl" />
        <span>{label}</span>
      </section>
    </main>
  );
};

export default CredentialsError;
