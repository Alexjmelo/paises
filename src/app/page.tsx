"use client";
import { useEffect, useState } from "react";
import { CountryCard } from "./_components/country-card";
import HeaderBase from "./_components/header-base";
import api from "@/lib/api/axios";
import Link from "next/link";

interface CountryResponseProps {
  name: {
    common: string;
  };
  translations: {
    por: {
      common: string;
    };
  };
  flags: {
    png: string;
  };
}

export default function HomePage() {
  const [countries, setCountries] = useState<CountryResponseProps[]>([]);
  // contries armazena a lista de paises,
  //setCountries atualiza o estado e faz o react renderizar o componente com novo valor.
  useEffect(() => {
    api
      .get("/all")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => console.error("Erro ao buscar país:", error));
  }, []);

  return (
    <div>
      <div className="bg-white">
        <HeaderBase />
      </div>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mx-auto max-w-7xl md:pt-10 2xl:pt-20 p-4">
          {/*Existem dois tipos de passar as variaveis retornadas pela requisição, fazendo o map para puxar as variaveis da lista de paises, ou desestruturando uma função.*/}
          {countries.map((countries) => (
            <Link
              href={`/name/${countries.name.common}?fullText=true`}
              key={countries.name.common}
            >
              <CountryCard
                key={countries.translations.por.common}
                flag={countries.flags.png}
                name={countries.translations.por.common}
              />
            </Link>
          ))}
        </div>
      </div>
      <div />
    </div>
  );
}
