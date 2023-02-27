import Head from "next/head";
import Image from "next/image";
import PokemonLists from "../components/PokemonLists";
import Ditto from "../assets/ditto.png";
import Logo from "../assets/Logo.png";
import PokemonUniverse from "../components/PokemonUniverse";

export default function Home() {
  const data = [
    { id: 1, name: "Ditto", img: Ditto },
    { id: 2, name: "Pikachu", img: Ditto },
    { id: 3, name: "Ivysaur", img: Ditto },
    { id: 4, name: "Venusaur", img: Ditto },
    { id: 5, name: "Charizard", img: Ditto },
    { id: 6, name: "Squirtle", img: Ditto },
    { id: 7, name: "Wartortle", img: Ditto },
    { id: 8, name: "Macho", img: Ditto },
    { id: 9, name: "Magma", img: Ditto },
    { id: 10, name: "Raquayza", img: Ditto },
  ];
  return (
    <>
      <div className="h-screen bg-[url('../assets/Background.png')]">
        <div className="flex flex-col items-center justify-between h-screen py-12">
          <Image src={Logo} />
          <PokemonLists lists={data} />
        </div>
      </div>
      <div className="h-screen">
        <PokemonUniverse />
      </div>
    </>
  );
}
