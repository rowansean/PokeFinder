'use client';

import React, { useEffect, useState } from 'react';
import Welcome from "@/components/welcome";
import PokemonDetail from "@/components/PokemonDetail";
import SearchList from "@/components/SearchList";

export default function Home() {
  // Initialize pokemon state as an empty array
  const [pokemonList, setPokemonList] = useState([]);
  const [featuredPokemon, setFeaturedPokemon] = useState(null);

  // Fetch the pokemon data from the API
  useEffect(() => {
    async function fetchPokemon() {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=500");
      const data = await res.json();
      setPokemonList(data.results); // Update the state with the fetched pokemon
    }

    fetchPokemon();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <main className="flex flex-col max-h-full md:grid md:grid-cols-2">
      { featuredPokemon ?
        <PokemonDetail featuredPokemon={featuredPokemon}/>
        : <Welcome className=""/>
      }
      <SearchList className="" pokemonList={pokemonList} setFeaturedPokemon={setFeaturedPokemon}/>
    </main>
  );
}
