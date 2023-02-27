import Image from "next/image";
import React from "react";
import Left from "../assets/Left.png";
import { Flex } from "./Flex";

const PokemonUniverse = () => (
  <>
    <div className="flex h-full">
      <div className="">
        <Image src={Left} className="h-full" />
      </div>
      <div className="flex flex-col items-center w-screen">
        <div className="flex mt-10 flex-3">
          <div className=" bg-[url('../assets/Brush.png')] bg-no-repeat w-[580px] h-[140px] text-[48px] text-center font-[700] text-[#257BC4]">
            Ash & Pikachu Arrive in Pokémon Universe
          </div>
        </div>
        <div className="flex-1 w-full mt-10">
          <Flex />
        </div>
      </div>
      <div>
        <Image src={Left} className="h-full" />
      </div>
    </div>
  </>
);

export default PokemonUniverse;
