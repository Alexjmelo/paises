"use client";
import { CardInfo } from "@/app/_components/card-info";
import { CardSmall } from "@/app/_components/card-small";
import { CountryCard } from "@/app/_components/country-card";
import HeaderBase from "@/app/_components/header-base";
import { Skeleton } from "@/components/ui/skeleton";
import api from "@/lib/api/axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface CardCountryInfoProps {
  cca3: string;
  name: {
    common: string;
    official: string;
    nativeName?: Record<string, { official: string; common: string }>;
  };
  translations: {
    por: {
      common: string;
    };
  };
  por: string;
  capital: string[];
  continents: string[];
  population: number;
  flags: {
    png: string;
  };
  languages: string;
}

export default function CountryPage() {
  const [country, setCountry] = useState<CardCountryInfoProps | null>(null);
  const [borderCountries, setBorderCountries] = useState<
    CardCountryInfoProps[]
  >([]);
  const { name } = useParams();

  useEffect(() => {
    // Fazendo a requisição para pegar os dados da API
    api
      .get(`/name/${name}?fullText=true`)
      .then((response) => {
        const countryData = response.data[0];
        setCountry(countryData);

        // Se o país tem países vizinhos (borders), faz outra requisição para buscar os detalhes
        if (countryData.borders && countryData.borders.length > 0) {
          api
            .get(`/alpha?codes=${countryData.borders.join(",")}`)
            .then((borderResponse) => setBorderCountries(borderResponse.data))
            .catch((error) =>
              console.error("Erro ao buscar países vizinhos:", error)
            );
        }
      })
      .catch((error) => console.error("Erro ao buscar país:", error));
  }, [name]);
  //name é um parametro, toda vez que mudar o effect sera exetuado.

  if (!country)
    return (
      <div className="flex items-center space-x-10 space-y-10">
        <Skeleton/>
      </div>
    );

  return (
    <div className="flex flex-col">
      <div className="bg-white">
        <HeaderBase />
      </div>
      <div className="bg-gray-100">
        <div className="flex gap-3 mx-auto w-full max-w-7xl p-4">
          <CardInfo
            key={country.name.common}
            name={country.translations.por.common}
            capital={country.capital?.[0] || "Desconhecido"}
            continents={country.continents?.[0] || "Desconhecido"}
            population={country.population}
            flags={country.flags.png}
            languages={country.languages}
          />
        </div>
        {borderCountries.length > 0 ? (
          <div>
            <div className="mx-auto max-w-7xl p-4">
              <div>
                <h1 className="flex relative bottom-2">
                  <span className="text-4xl font-bold">Países que fazem fronteira:</span>
                </h1>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mx-auto max-w-7xl md:pt-10 2xl:pt-20 p-4">
              {borderCountries.map((borderCountry) => (
                  <Link
                    key={`${borderCountry.name.common}-${borderCountry.cca3}`}
                    href={`/name/${borderCountry.name.common}?fullText=true`}
                  >
                    <CountryCard
                      key={borderCountry.translations.por.common}
                      name={borderCountry.translations.por.common}
                      flag={borderCountry.flags.png}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="mx-auto max-w-7xl p-4">
            <span className="text-4xl font-bold">
              O país não faz fronteira com nenhum outro país.
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
