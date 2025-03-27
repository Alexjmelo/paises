"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

interface CountryProps {
  flag: string;
  name: string;
  borders: string;
}

export const CardSmall:  React.FC<CountryProps> = ({  }) => {
  

  return (
    <Card className="w-fit h-fit p-2 text-center">
      {/* <Image
        src={por.flags.png}
        alt={`Bandeira de ${por.name.common}`}
        width={160}
        height={80}
        className="border rounded-lg mb-2"
      />
      <span>{por.translations.por.common}</span> */}
    </Card>
  );
}
