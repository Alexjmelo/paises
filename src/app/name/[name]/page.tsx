"use client";
import { ButtonIcon } from "@/app/_components/button-icon";
import { CardInfo } from "@/app/_components/card-info";
import { CardSmall } from "@/app/_components/card-small";
import { Card } from "@/components/ui/card";
import api from "@/lib/api/axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface CardCountryInfoProps {
  name: string;
  translation: string;
  por: string;
  common: string;
  capital: string;
  continents: string;
  population: string;
  flag: string;
  borders: string;
}

export default function CountryPage() {
  const [country, setCountry] = useState<CardCountryInfoProps[]>([]);
  const { name } = useParams();

  useEffect(() => {
    // Fazendo a requisição para pegar os dados da API
    api
      .get(`/name/${name}`)
      .then((response) => {
        setCountry(response.data[0]);
      })
      .catch((error) => console.error("Erro ao buscar país:", error));
  }, []);

  return (
    <div>
      <CardInfo name={""} translation={""} por={""} common={""} capital={""} continents={""} population={0} flag={""} borders={""} languages={""}/>
    </div>
  );
}
