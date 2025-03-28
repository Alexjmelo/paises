"use client";
import { MoveLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ButtonIcon() {
  return (
    <Button
      variant="outline"
      size="default"
      className=" border-none bg-transparent flex"
    >
      <MoveLeft /> <div className="font-normal text-2xl">Voltar</div>
    </Button>
  );
}
