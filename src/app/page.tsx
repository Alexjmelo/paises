"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";

interface CountryResponse {
  name: {
    common: string;
  }
}

const page = () => {
  const [value, setValue] = useState(0);
  const [data, setData] = useState<CountryResponse[]>([])

  const handleIncrementValue = () => {
    setValue(value + 1);
  };

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json()) // Converte o corpo da resposta para JSON
      .then((data) => console.log(data)) // Exibe os dados no console
      .catch((error) => console.error("Erro ao buscar os dados:", error)); // Captura erros
  }, [value]);

  return (
    <>
      <ul>
        {data.map((country) => (
          <li key={country.name.common}>{country.name.common}</li>
        ))}
      </ul>
      <Button onClick={handleIncrementValue}>{value}</Button>
    </>
  );
};

export default page;
