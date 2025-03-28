"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

interface CountryProps {
  flag: string;
  name: string;
}

export const CardSmall = ({flag ,name }: CountryProps) => {

  return (
    <div>
     <Card className="p-3">
         <div className="flex relative w-40 h-24">
          <Image
          src={flag}
          alt={`Bandeira da ${name}`}
          fill
          />
         </div>
         <p className="text-center py-2">{name}</p>
     </Card>
    </div>
  );
}
