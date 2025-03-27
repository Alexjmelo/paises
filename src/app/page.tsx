"use client";
import { useEffect, useState } from "react";
import { CountryCard } from "./_components/country-card";
import HeaderBase from "./_components/header-base";
import api from "@/lib/api/axios";

interface CountryResponseProps {
  translations: {
    por: {
      common: string;
    };
  };
  name: {
    common: string;
  };
  flags: {
    png: string;
  };
}

export default function HomePage() {
  const [countries, setCountries] = useState<CountryResponseProps[]>([]);

  useEffect(() => {
    // Fazendo a requisição para pegar os dados da API
    api
      .get("/all")
      .then((response) => {
        setCountries(response.data.slice(0, 15));
      })
      .catch((error) => console.error("Erro ao buscar país:", error));
  }, []);
  return (
    <div>
      <div>
        <HeaderBase />
      </div>
      <div className="bg-gray-100">
        <div className="grid grid-cols-5 gap-3 mx-auto max-w-7xl p-4">
          {countries.map((country) => (
            <CountryCard
              key={country.name.common}
              flag={country.flags.png}
              name={country.translations.por.common}
            />
          ))}
        </div>
      </div>
      <div/>
    </div>
  );
}
