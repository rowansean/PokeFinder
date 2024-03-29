'use client';

import Image from 'next/image';
import { Input } from "@/components/ui/input"
import { Card } from "./ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Shuffle } from "lucide-react"

import { useState, useEffect } from "react";


export default function SearchList({className, pokemonList, setFeaturedPokemon}) {

    //State
  const [search, setSearch] = useState("");

    //Event Handlers
    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    const handlePokemonClick = (pokemon) => {
        setFeaturedPokemon(pokemon);
    }

    const handleShuffle = () => {
        const randomIndex = Math.floor(Math.random() * pokemonList.length);
        setFeaturedPokemon(pokemonList[randomIndex]);
    }

    // Filter pokemon based on search
    const filteredPokemon = pokemonList.filter(pokemon => {
        return pokemon.name.toLowerCase().includes(search.toLowerCase());
    });



  return (
    <div className={`${className} flex flex-col gap-3 h-full mt-6`}>
        {/* Search Bar */}
        <Input className="w-full h-14 mb-1 shadow-inner " placeholder="Search..." onChange={handleSearch} />

        <Shuffle className="self-end text-white" onClick={handleShuffle}/>

        <div className="flex flex-col gap-4">

            {/* If filtered pokemon is empty return h1 saying no results found */}
            {filteredPokemon.length === 0 && <h1 className="text-center text-white">No results found. Boooo!</h1>}

            {/* Map through filtered pokemon and display them */}
            {filteredPokemon.slice(0,5).map(pokemon => (
                <Card 
                    key={pokemon.name} 
                    onClick={() => handlePokemonClick(pokemon)}
                    className="p-2 flex justify-between items-center shadow-lg hover:scale-105 hover:shadow-xl">

                    <Avatar className="size size-8">
                        <AvatarImage 
                            src=""
                            alt={pokemon.name}
                            className=""
                            />
                        <AvatarFallback 
                            className="uppercase bg-blue-200">
                            {pokemon.name.charAt(0) + pokemon.name.charAt(1)}
                        </AvatarFallback>
                    </Avatar>

                    <h3 className="text-xl capitalize">{pokemon.name}</h3>
                    
                    <img src="/PokeBall.png" alt="pokeball" className="w-8 h-8" />
                </Card>
            ))}

        </div>
    </div>
  )
}
