import { ButtonType } from "@/app/types";
import React from "react";

const Button = ({ className, onClick, children }: ButtonType) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
