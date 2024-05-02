import React from "react";

const sizes = {
  xl: "text-[38px] font-bold md:text-4xl sm:text-[34px]",
  s: "text-lg font-semibold",
  md: "text-[28px] font-bold md:text-[26px] sm:text-2xl",
  xs: "text-base font-semibold",
  lg: "text-[34px] font-bold md:text-[32px] sm:text-3xl",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-deep_purple-900 font-lato ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
