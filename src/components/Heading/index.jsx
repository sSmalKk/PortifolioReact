import React from "react";

const Heading = ({ children, className = "", size = "md", as = "h6", ...restProps }) => {
  const Component = as;

  const getSizeClass = (size) => {
    switch (size) {
      case "xl":
        return "text-[38px] font-bold md:text-4xl sm:text-[34px]";
      case "s":
        return "text-lg font-semibold";
      case "md":
        return "text-[28px] font-bold md:text-[26px] sm:text-2xl";
      case "xs":
        return "text-base font-semibold";
      case "lg":
        return "text-[34px] font-bold md:text-[25px] sm:text-3xl";
      default:
        return "";
    }
  };

  const sizeClass = getSizeClass(size);

  return (
    <Component className={`font-poppins-bold ${className} ${sizeClass}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
