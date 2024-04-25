import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[18px]",
  circle: "rounded-[50%]",
};
const variants = {
  fill: {
    black_900_60: "bg-black-900_60 text-green-500",
    blue_gray_900_19: "bg-blue_gray-900_19",
    green_700: "bg-green-700 text-white-A700",
  },
};
const sizes = {
  xs: "h-[24px] px-[5px]",
  sm: "h-[36px] px-4 text-xs",
  md: "h-[36px] px-2.5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "md",
  color = "blue_gray_900_19",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round", "circle"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["black_900_60", "blue_gray_900_19", "green_700"]),
};

export { Button };
