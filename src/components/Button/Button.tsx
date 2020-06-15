import React, { MouseEvent, ReactNode } from "react";

type ButtonProps = {
  /** className */
  className?: string;
  /** type */
  type?: "submit" | "reset" | "button";
  /** disabled */
  disabled?: boolean;
  /** onClick */
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  /** children */
  children?: ReactNode;
};

export function Button({
  className,
  type,
  disabled,
  onClick,
  children,
}: ButtonProps) {
  return (
    <button
      className={className}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
