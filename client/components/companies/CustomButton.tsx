"use client";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import React from "react";

interface CustomButtonProps {
  id?: string; // optional — not every use case needs an ID
  onClick: (id?: string) => void | Promise<void>; // generic
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  children: React.ReactNode;
  refreshAfterClick?: boolean; // optional behavior
}

const CustomButton: React.FC<CustomButtonProps> = ({
  id,
  onClick,
  variant = "default",
  children,
  refreshAfterClick = false,
}) => {
  const router = useRouter();

  const handleClick = async () => {
    try {
      await onClick(id);
      if (refreshAfterClick) router.refresh();
    } catch (err) {
      console.error("CustomButton error:", err);
    }
  };

  return (
    <Button onClick={handleClick} variant={variant}>
      {children}
    </Button>
  );
};

export default CustomButton;
