import { Input } from "@nextui-org/react";
import React from "react";

type Props = {
  type: React.HTMLInputTypeAttribute;
  label: string;
  placeholder: string;
  required?: boolean;
};

export default function ContactInput({
  type,
  label,
  placeholder,
  required = false,
}: Props) {
  return (
    <Input
      size="md"
      radius="sm"
      variant="bordered"
      type={type}
      label={label}
      placeholder={placeholder}
      required={required}
      isClearable
      classNames={{
        inputWrapper: "border-1",
        label: "absolute top-0 left-4 bg-background px-unit-2",
        input: "text-focus text-2xl pl-2 h-full",
      }}
    />
  );
}
