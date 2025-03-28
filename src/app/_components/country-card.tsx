"use client";
import { Card } from "@/components/ui/card";
import Image from "next/image";

interface CountryCardProps {
  name: string;
  flag: string;
}

export const CountryCard = ({ name, flag }: CountryCardProps) => {
  return (
    <Card className="p-4">
      <div className="flex relative w-full h-24 md:h-36">
        <Image 
        src={flag} alt={`Bandeira da ${name}`} fill
        className="border rounded-xl" />
      </div>
      <p className="text-center py-2 truncate font-bold text-2xl">{name}</p>
    </Card>
  );
};
