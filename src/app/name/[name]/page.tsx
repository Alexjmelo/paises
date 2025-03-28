"use client";
import { ButtonIcon } from "@/app/_components/button-icon";
import { CardInfo } from "@/app/_components/card-info";
import { CardSmall } from "@/app/_components/card-small";
import HeaderBase from "@/app/_components/header-base";
import { Card } from "@/components/ui/card";
import api from "@/lib/api/axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface CardCountryInfoProps {
  name: {
    common: string;
    official: string;
    nativeName?: Record<string, { official: string; common: string }>;
  };
  translation: string;
  por: string;
  capital: string[];
  continents: string[];
  population: number;
  flags: {
    png: string;
  };
  languages:string;
  borders?: string[];}

export default function CountryPage() {
  const [country, setCountry] = useState<CardCountryInfoProps | null>(null);
  const [borderCountries, setBorderCountries] = useState<CardCountryInfoProps[]>([]);
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
            .catch((error) => console.error("Erro ao buscar países vizinhos:", error));
        }
      })
      .catch((error) => console.error("Erro ao buscar país:", error));
  }, [name]);

  if (!country) return <p>Carregando...</p>;

  return (
    <div className="flex flex-col">
      <div>
        <HeaderBase />
      </div>
      <div className="bg-gray-100">
      
       <div className="flex gap-3 mx-auto max-w-7xl p-4">
         <CardInfo
           key={country.name.common}
           name={country.name.common}
           translation={country.translation}
           por={country.por}
           common={country.name.common}
           capital={country.capital?.[0] || "Desconhecido"}
           continents={country.continents?.[0] || "Desconhecido"}
           population={country.population}
           flags={country.flags.png}
           borders={country.borders?.join(", ") || "Sem fronteiras"}
           languages={country.languages}
         />
       </div>
       {borderCountries.length > 0 && (
        <div>
          
            <div className="mx-auto max-w-7xl p-4">
              <div>
                 <p>Países que fazem fronteira</p>
              </div>
                <div className="flex flex-row gap-3">
                  {borderCountries.map((borderCountry) => (
                    <CardSmall
                      key={borderCountry.name.common}
                      name={borderCountry.name.common}
                      flag={borderCountry.flags.png} />
                  ))}
                </div>
              </div>
            </div>
        )}
        </div>
     </div>
    
  );
}