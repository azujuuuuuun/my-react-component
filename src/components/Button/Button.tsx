import React, { MouseEvent } from "react";

type ButtonProps = {
  /** className */
  className?: string;
  /** type */
  type?: "submit" | "reset" | "button";
  /** disabled */
  disabled?: boolean;
  /** onClick */
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  /** text */
  text: string;
};

export function Button({
  className,
  type,
  disabled,
  onClick,
  text,
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
