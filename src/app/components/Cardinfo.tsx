'use client'

import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import { ButtonIcon } from "./Buttonicon";
import Cardpeq from "./Cardsmall";
import Link from "next/link";

export default async function Cardinfo() {
  const data = await fetch(
    "https://restcountries.com/v3.1/translation/germany"
  );
  const [por] = await data.json();

  return (
    <div>
      <div className="flex flex-col gap-2">
        <h1 className="text-black text-3xl mt-8 text-center">
          {por.translations.por.common}
        </h1>
        <Link href="/">
          <ButtonIcon />
        </Link>
        <Card className="flex flex-row gap-80 p-4 w-fit">
          <div>
            🏙️ <strong>Capital:</strong> {por.capital[0]} <br />
            🗺️ <strong>Continente:</strong> {por.continents[0]} <br />
            👨‍👩‍👧‍👦 <strong>População:</strong> {(por.population / 1000000).toFixed(1) + " M"} <br />
            🗣️ <strong>Linguas faladas:</strong> <br /> <div className="text-white border rounded-xl bg-[#4338CA] text-center w-fit px-2">{Object.values(por.languages).join(", ")}</div>
          </div>
          <Image
            src={por.flags.png}
            alt={`Bandeira de ${por.name.common}`}
            width={300}
            height={120}
            className=" flex border rounded-md mb-2"
          />
        </Card>
        <div className="mt-4 w-fit h-fit">
          <p>Países que fazem fronteira</p>
          <Link href="/pais/${name.common}" className="h-min w-min">
            <Cardpeq />
          </Link>
        </div>
      </div>
    </div>
  );
}
