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

  useEffect(() => {
    api
      .get("/all")
      .then((response) => {
        setCountries(response.data.slice(0, 15));
      })
      .catch((error) => console.error("Erro ao buscar país:", error));
  }, []);

  return (
    <div>
      <div className="bg-white">
        <HeaderBase />
      </div>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mx-auto max-w-7xl md:pt-20 p-4">
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