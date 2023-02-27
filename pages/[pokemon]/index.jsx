import Image from "next/image";
import React from "react";
import Left from "../../assets/Left.png";
import Logo from "../../assets/Logo.png";
import PokemonDetails from "../../components/PokemonDetails";
import { FaHome } from "react-icons/fa";
import Link from "next/link";

const Pokemon = () => {
  return (
    <div className="flex justify-between h-screen">
      <div className="flex-2">
        <Image src={Left} className="h-full " alt="image" />
      </div>
      <div className="flex flex-col items-center flex-1">
        <div className="mt-10">
          <Image src={Logo} alt="image" />
        </div>
        <div className="w-full h-full ">
          <PokemonDetails />
        </div>
        <div className="mb-10 border-[6px] border-[#2B73B9] rounded-lg">
          <Link href="/">
            <button className="bg-[#FFCB05] text-white px-[32px] py-[16px] flex items-center ">
              <FaHome className="mr-3 text-[20px]" />
              Back to Homepage
            </button>
          </Link>
        </div>
      </div>
      <div className="flex-2">
        <Image src={Left} className="h-full" alt="image" />
      </div>
    </div>
  );
};

export default Pokemon;
