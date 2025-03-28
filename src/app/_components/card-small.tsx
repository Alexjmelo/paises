"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CountryProps {
  flag: string;
  name: string;
}

export const CardSmall = ({flag ,name }: CountryProps) => {

  return (
    <div>
     <Card className="p-4">
       <Link href={`/name/${name}?fullText=true`}>
         <div className="flex relative w-40 h-24">
          <Image
          src={flag}
          alt={`Bandeira da ${name}`}
          fill
          />
         </div>
         <p className="text-center py-2">{name}</p>
        </Link>
     </Card>
    </div>
  );
}
