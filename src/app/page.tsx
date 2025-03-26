import { Paiscard } from "./components/paiscard"

export default async function Home() {
  const data = await fetch('https://restcountries.com/v3.1/name/deutschland')
  const country = await data.json()
  
  return (
    
    <div className="flex flex-col h-screen">
      <div className="flex flex-col relative right-1/3 text-center w-full mt-4 mb-4"> 🌎 Países do Mundo </div>
      <div className="flex-1 bg-[#F3F4F6]">
      <div className='grid grid-cols-5'>
        <Paiscard></Paiscard>
        </div>
<div>
  {country.map((pais: any) => (
    <div key={pais.name.official}>
      <img src={pais.flags.png} alt={`Bandeira de ${pais.name.common}`} className="w-32 h-auto" />
    </div>
  ))}
</div>
      </div>
    </div>
  )
}
