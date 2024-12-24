import React from "react";

interface IButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "blue" | "red" | "green";
}

export const Button = ({
  children,
  onClick,
  className,
  variant = "blue",
}: IButtonProps) => {
  const variants = {
    blue: "bg-gradient-to-r to-blue-500 via-blue-400 from-blue-500 bg-size-200 bg-pos-0",
    red: "bg-gradient-to-r to-red-500 via-red-400 from-red-500 bg-size-200 bg-pos-0",
    green:
      "bg-gradient-to-r to-green-500 via-green-400 from-green-500 bg-size-200 bg-pos-0",
  };

  return (
    <>
      <button
        onClick={onClick}
        className={`${className} ${variants[variant]} rounded px-4 py-2 border-none transition-all duration-700 hover:bg-pos-100 text-white w-full lg:w-auto`}
      >
        {children}
      </button>
    </>
  );
};
