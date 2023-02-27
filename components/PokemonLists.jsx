import Link from "next/link";
import React from "react";
import PokemonCard from "./PokemonCard";

const PokemonLists = ({ lists }) => {
  return (
    <div className="grid grid-cols-2 gap-20 ml-10 mr-10 overflow-hidden lg:px-20 lg:grid-cols-5">
      {lists?.map((list) => (
        <Link href={`/${list.name}`} key={list}>
          <PokemonCard list={list} />
        </Link>
      ))}
    </div>
  );
};

export default PokemonLists;
