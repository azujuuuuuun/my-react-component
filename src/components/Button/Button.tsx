import React, { MouseEvent } from "react";

type ButtonProps = {
  /** className */
  className?: string;
  /** text */
  text: string;
  /** type */
  type?: "submit" | "reset" | "button";
  /** disabled */
  disabled?: boolean;
  /** onClick */
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

export function Button({
  className,
  text,
  type,
  disabled,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={className}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
