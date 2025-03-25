import { Paiscard } from "./components/paiscard"

export default function Home() {
  return (
    <div>
      <div className="flex flex-col relative right-1/3 text-center w-full mt-4 mb-4"> 🌎 Países do Mundo </div>
      <div className="flex flex-col">
        <Paiscard></Paiscard>
      </div>
    </div>
  )
}