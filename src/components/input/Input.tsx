import React, { ChangeEvent, HTMLInputTypeAttribute } from "react";

interface inputProps {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  value?: string | number;
  type?: HTMLInputTypeAttribute;
  label?: String;
}

const Input = ({
  value,
  disabled,
  onChange,
  type = "text",
  label,
}: inputProps) => {
  return (
    <div className="relative w-full lg:w-[30rem]">
      <input
        onChange={onChange}
        value={value}
        type={type}
        disabled={disabled}
        className="outline-none p-4 border-2 border-neutral-200 w-full rounded-md peer"
      />
      <label className="capitalize absolute top-0 left-3 scale-75 peer-focus-within:scale-100 peer-focus-within:-top-3 peer-focus-within:bg-white peer-focus-within:px-2 px-0 bg-transparent transition-all duration-200 ease-in-out">
        {label}
      </label>
    </div>
  );
};

export default Input;
