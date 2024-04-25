import React from "react";

const sizes = {
  "5xl": "text-[34px] font-normal md:text-[32px] sm:text-3xl",
  "6xl": "text-5xl font-normal md:text-[44px] sm:text-[38px]",
  xs: "text-[9px] font-normal",
  lg: "text-xs font-normal",
  "7xl": "text-6xl font-light md:text-[52px] sm:text-[46px]",
  "8xl": "text-8xl font-light md:text-5xl",
  s: "text-[10px] font-medium",
  "2xl": "text-base font-normal",
  "3xl": "text-xl font-medium",
  "4xl": "text-2xl font-normal md:text-[22px]",
  xl: "text-sm font-normal",
  md: "text-[11px] font-normal",
};

const Text = ({ children, className = "", as, size = "xl", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-black-900_dd font-roboto ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
