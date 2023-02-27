import Image from "next/image";
import React from "react";
import Ditto from "../assets/ditto.png";

const PokemonDetails = () => {
  return (
    <div className="flex flex-col items-start justify-between h-full sm:flex-row">
      <div className="flex flex-col justify-center flex-1 h-full px-10 ">
        <div className="mb-16">
          <h1 className="text-[48px] text-[#257BC4] font-[500] mb-5">
            Bulbasaur #001
          </h1>
          <p className="w-[424px] text-[20px] font-[400]">
            There is a plant seed on its back right from the day this Pokémon is
            born. The seed slowly grows larger.
          </p>
        </div>
        <div className="rounded-lg bg-gradient-to-r from-[#FC7C23] to-[#F366B9] w-[365px] h-[253px] grid place-items-center">
          <div className="rounded-lg bg-white w-[358px] h-[246px] flex justify-center">
            <ul className="grid items-center grid-cols-2 gap-x-28">
              <li>
                <h1 className="text-[20px] font-[500]">Height</h1>{" "}
                <p className="text-[16px]">2'04"</p>
              </li>
              <li>
                <h1 className="text-[20px] font-[500]">Category</h1>{" "}
                <p className="text-[16px]">Seed</p>
              </li>
              <li>
                <h1 className="text-[20px] font-[500]">Height</h1>{" "}
                <p className="text-[16px]">2'04"</p>
              </li>
              <li>
                <h1 className="text-[20px] font-[500]">Height</h1>{" "}
                <p className="text-[16px]">2'04"</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid flex-1 h-full place-items-center">
        <Image
          src={Ditto}
          width={400}
          className="transition duration-700 hover:scale-125"
        />
      </div>

      <div className="flex flex-col justify-center flex-1 h-full pl-16">
        <div className="mb-10">
          <h1 className="mb-2 text-[20px]">Type</h1>
          <ul className="flex">
            <li>
              <div className="flex justify-center mr-3 text-white bg-[#9BCC50] px-4 py-0.5  rounded">
                Grass
              </div>
            </li>
            <li>
              <div className="flex justify-center  text-white bg-[#B97FC9] rounded px-4 py-0.5">
                Poison
              </div>
            </li>
          </ul>
        </div>

        <div className="mb-10">
          <h1 className="mb-2 text-[20px]">Weakness</h1>
          <ul className="flex">
            <li>
              <div className="flex justify-center mr-3 text-white bg-[#9BCC50] px-4 py-0.5  rounded">
                Grass
              </div>
            </li>
            <li>
              <div className="flex justify-center  mr-3 text-white bg-[#B97FC9] rounded px-4 py-0.5">
                Poison
              </div>
            </li>
            <li>
              <div className="flex justify-center mr-3 text-white bg-[#B97FC9] rounded px-4 py-0.5">
                Poison
              </div>
            </li>
            <li>
              <div className="flex justify-center mr-3 text-white bg-[#B97FC9] rounded px-4 py-0.5">
                Poison
              </div>
            </li>
          </ul>
        </div>

        <div className="mb-10">
          <h1 className="mb-2 text-[20px]">Stats</h1>
          <ul className="flex flex-col w-[85px] justify-between h-[200px] ">
            <li>
              <div className="flex justify-center mr-3 text-white bg-[#9BCC50] px-4 py-0.5  rounded">
                Grass
              </div>
            </li>
            <li>
              <div className="flex justify-center  mr-3 text-white bg-[#B97FC9] rounded px-4 py-0.5">
                Poison
              </div>
            </li>
            <li>
              <div className="flex justify-center mr-3 text-white bg-[#B97FC9] rounded px-4 py-0.5">
                Poison
              </div>
            </li>
            <li>
              <div className="flex justify-center mr-3 text-white bg-[#B97FC9] rounded px-4 py-0.5">
                Poison
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
