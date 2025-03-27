import Link from "next/link";
import React from "react";
import { CardSmall } from "./card-small";
import { Card } from "@/components/ui/card";
import { ButtonIcon } from "./button-icon";
import Image from "next/image";

interface CardInfoProps {
  name: string;
  translation: string;
  por: string;
  common: string;
  capital: string;
  continents: string;
  population: number;
  flag: string;
  borders: string;
  languages: string;
}

export const CardInfo = ({
  name,
  translation,
  por,
  common,
  capital,
  continents,
  population,
  flag,
  borders,
  languages,
}: CardInfoProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-black text-3xl mt-8 text-center">{name}</h1>
      <Link href="/">
        <ButtonIcon />
      </Link>
      <Card className="flex flex-row gap-80 p-4 w-fit">
        <div>
          🏙️ <strong>Capital:</strong> {} <br />
          🗺️ <strong>Continente:</strong> {continents[0]} <br /> * 👨‍👩‍👧‍👦{" "}
          <strong>População:</strong> {(population / 1000000).toFixed(1) + " M"}{" "}
          <br />
          🗣️ <strong>Linguas faladas:</strong> <br />{" "}
          <div className="text-white border rounded-xl bg-[#4338CA] text-center w-fit px-2">
            {Object.values(languages).join(", ")}
          </div>
        </div>
        <div>
          <Image
            src={flag}
            alt={`Bandeira de ${name}`}
            width={300}
            height={120}
            className=" flex border rounded-md mb-2"
          />
        </div>
      </Card>
      <div className="mt-4 w-fit h-fit">
        <p>Países que fazem fronteira</p>
        <Link href="/country/${name.common}" className="h-min w-min">
          <CardSmall flag={""} name={""} borders={""} />
        </Link>
      </div>
    </div>
  );
};
