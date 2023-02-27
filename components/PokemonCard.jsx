import Image from "next/image";
import React from "react";

const PokemonCard = ({ list }) => {
  return (
    <div
      className="bg-white w-[235px] flex flex-col h-[307px] p-3 rounded-lg cursor-pointer hover:bg-[#2B73B9] hover:text-white transition duration-[700ms]"
      style={{
        clipPath: "polygon(0% 0%, 100% 0, 100% 81%, 76% 100%, 0% 100%)",
      }}
    >
      <div className="flex flex-col items-center ">
        <div className="rounded-lg w-[215px] h-[215px] bg-[#F2F2F2] flex items-center justify-center ">
          <Image
            src={list.img}
            width={180}
            className="transition duration-700 hover:scale-110"
            alt="image"
          />
        </div>
      </div>

      <h1 className="text-lg font-bold">{list.name}</h1>
      <div className="flex mt-1">
        <div className="flex justify-center mr-3 text-white bg-[#9BCC50] px-4 py-0.5 rounded">
          Grass
        </div>
        <div className="flex justify-center  text-white bg-[#B97FC9] rounded px-4 py-0.5">
          Poison
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
