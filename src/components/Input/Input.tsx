import React, { ChangeEvent } from "react";

type InputProps = {
  /** className */
  className?: string;
  /** disabled */
  disabled?: boolean;
  /** maxLength */
  maxLength?: number;
  /** minLength */
  minLength?: number;
  /** name */
  name?: string;
  /** required */
  required?: boolean;
  /** type */
  type?: string;
  /** value */
  value?: string | number;
  /** onChange */
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export function Input({
  className,
  disabled,
  maxLength,
  minLength,
  name,
  required,
  type,
  value,
  onChange,
}: InputProps) {
  return (
    <input
      className={className}
      disabled={disabled}
      maxLength={maxLength}
      minLength={minLength}
      name={name}
      required={required}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
}
