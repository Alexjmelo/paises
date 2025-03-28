"use client";

import Link from "next/link";
import React from "react";
import { Card } from "@/components/ui/card";
import { ButtonIcon } from "./button-icon";
import Image from "next/image";

interface CardInfoProps {
  name: string;
  capital: string;
  continents: string;
  population: number;
  flags: string;
  languages: string;
}

const formatPopulation = (population: number) => {
  if (population >= 1000000000) {
    return (population / 1000000000).toFixed(1) + " B"; 
  } else if (population >= 1000000) {
    return (population / 1000000).toFixed(1) + " M"; 
  } else if (population >= 1000) {
    return (population / 1000).toFixed(1) + " K"; 
  } else {
    return population.toString() + " Pessoas";
  }
};

export const CardInfo = ({
  name,
  capital,
  continents,
  population,
  flags,
  languages,
}: CardInfoProps) => {

  
  return (
    <div className="flex flex-col w-full gap-2 md:my-auto pt-8">
      <h1 className="text-black text-3xl font-bold md:mt-4 text-center">{name}</h1>
      <Link href="/">
        <ButtonIcon />
      </Link>
      <Card className="flex flex-row flex-wrap justify-between w-auto gap-3 md:gap-96 p-4">
        <div>
          🏙️ <strong className="text-2xl text-bold">Capital:</strong> <span className="text-2xl font-normal">{capital}</span> <br />
          🗺️ <strong className="text-2xl text-bold">Continente:</strong> <span className="text-2xl font-normal">{continents}</span> <br />
          👨‍👩‍👧‍👦 <strong className="text-2xl text-bold">População:</strong> <span className="text-2xl font-normal">{formatPopulation(population)}</span> <br />
          🗣️ <strong className="text-2xl text-bold">Linguas faladas:</strong>
          <div className="flex gap-1 flex-col">
{/*o map foi feito aqui pois languages é um objeto, diferente das outras variaveis, o objeto precisa ser iterado para pegar os valores.*/}
  {Object.values(languages).map((language, i) => (
    <div
      key={i}
      className="text-white  border rounded-xl bg-indigo-700  text-center w-fit px-2 py-1"
    >
      <span className="font-normal">{language}</span>
    </div>
  ))}
</div>
        </div>
        <div className="flex relative w-60 h-40 md:w-80 md:h-48 text-right">
                  <Image
                  src={flags}
                  alt={`Bandeira da ${name}`}
                  fill
                  className="border rounded-xl"
                  />
                </div>
      </Card>
      
    </div>
  );
};
