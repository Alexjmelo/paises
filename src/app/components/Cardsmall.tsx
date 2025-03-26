'use client'

import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

export default async function Bandeirinha() {
  const data = await fetch(
    "https://restcountries.com/v3.1/translation/germany"
  );
  const [por] = await data.json();

  return (
    <Card className="w-fit h-fit p-2 text-center">
      <Image
        src={por.flags.png}
        alt={`Bandeira de ${por.name.common}`}
        width={160}
        height={80}
        className="border rounded-lg mb-2"
      />
      <span>{por.translations.por.common}</span>
    </Card>
  );
}
