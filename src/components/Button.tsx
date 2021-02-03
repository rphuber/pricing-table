import React from "react";

type Props = {
  children: React.ReactNode;
};

const Button = ({ children }: Props) => {
  return (
    <button
      type="button"
      className="inline-flex px-11 py-4 border border-transparent text-xs font-medium rounded-full shadow-sm text-blue-pale bg-blue-dark hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      <span className="flex-none font-body text-base">{children}</span>
    </button>
  );
};

export default Button;
