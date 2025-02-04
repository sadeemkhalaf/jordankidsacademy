import React from "react";
import { ButtonProps } from "./CustomButton.props";

const Button: React.FC<ButtonProps> = ({ variant = "outlined", children, onClick, className }) => {
  const baseStyle =
    "flex items-center justify-center px-6 py-2 text-base font-medium rounded-full transition duration-300 focus:outline-none";
  let variantStyle = "";

  switch (variant) {
    case "outlined":
      variantStyle = "border-2 border-purple-500 text-purple-500 hover:bg-purple-100";
      break;
    case "outlined-filled":
      variantStyle = "bg-white border-2 border-purple-500 text-purple-500 hover:bg-purple-100 shadow-md";
      break;
    case "filled":
      variantStyle = "bg-orange-500 text-white hover:bg-orange-600 shadow-md";
      break;
    default:
      variantStyle = "border-2 border-gray-500 text-gray-500";
  }

  return (
    <button
      className={`${baseStyle} ${variantStyle} ${className || ""}`}
      onClick={onClick}
    >
      {children}
      <span className="mx-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </button>
  );
};

export default Button;
