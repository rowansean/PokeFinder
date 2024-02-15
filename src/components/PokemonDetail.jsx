'use client';

import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Progress } from "@/components/ui/progress"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Volume2 } from 'lucide-react';


import { useEffect, useState } from 'react';

const typeColors = {
  grass: 'bg-green-600', // A richer shade of green
  fire: 'bg-orange-400',   // A deeper shade of red
  water: 'bg-blue-600', // A deeper shade of blue
  bug: 'bg-lime-500', // Lime green for bug
  normal: 'bg-gray-400', // Lighter gray for normal
  poison: 'bg-purple-700', // A darker shade of purple
  electric: 'bg-yellow-400', // Bright yellow for electric
  ground: 'bg-yellow-600', // A darker, earthy yellow
  fairy: 'bg-pink-300', // Light pink for fairy
  fighting: 'bg-red-800', // A darker, more intense red
  psychic: 'bg-pink-500', // A mix of purple and pink
  rock: 'bg-yellow-700', // A darker shade, representing rocks and earth
  ghost: 'bg-indigo-800', // Deep indigo for a mysterious vibe
  ice: 'bg-cyan-400', // Cool, icy blue
  dragon: 'bg-indigo-700', // A majestic, dark blue or purple
  dark: 'bg-gray-700', // Very dark gray for dark type
  steel: 'bg-gray-500', // Metallic gray
  flying: 'bg-blue-300', // Light sky blue
};

export default function PokemonDetail({ featuredPokemon }) {

  const [pokemonDetails, setPokemonDetails] = useState({
    id: 0,
    name: '',
    sprites: {
      front_shiny: '',
    },
    types: [],
    stats: [],
  });

  async function fetchPokemonDetails() {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${featuredPokemon.name}`);
    const data = await res.json();
    setPokemonDetails(data);
  }

  useEffect(() => {

    if (featuredPokemon) {
      fetchPokemonDetails();
    }

  }
  , [featuredPokemon]);

  async function playCry() {
    const cry = new Audio(`https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${pokemonDetails.id}.ogg`);
    cry.play();
  }

  return (
    <div className='flex flex-col max-h-full items-center gap-4'>
      <Avatar className='size-36 shadow-xl'>
        <AvatarImage 
          src={pokemonDetails.sprites.front_shiny}
          alt={pokemonDetails.name}
          className='rounded-full bg-[#d17272d9] size-36 border-4 border-amber-500'
        />
        <AvatarFallback>{pokemonDetails.id}</AvatarFallback>
      </Avatar>

      <Card className='bg-[#d13a3ad9] w-80 h-72 border-none p-4 shadow-inner overflow overflow-y-auto'>
        <CardTitle 
          className="text-white capitalize m-1 flex gap-2">
          {pokemonDetails.name}
          <Volume2 className='text-slate-100' onClick={playCry}/>
        </CardTitle>
        {pokemonDetails.types.map((type, index) => (
          <Badge 
            key={index}
            className={`${typeColors[type.type.name] || 'bg-gray-500'} text-black text-xs capitalize m-1`}>
            {type.type.name}
          </Badge>
        ))}
        <div className='text-black text-left'>
          <h3 className='text-lg font-semibold'>Base Stats</h3>
          <div className='bg-[#ffffff] shadow-inner rounded-md p-4'>
            <ul className='list-outside text-sm'>
              {pokemonDetails.stats.slice(0,6).map((stat, index) => (
                <li key={index} className='flex justify-between items-center gap-1'>
                  {/* Allocate space for the stat name */}
                  <span className='flex-1 text-md'>{stat.stat.name}</span>
                  {/* Progress bar container with a fixed or flexible width */}
                  <div className='flex-auto'>
                    <Progress className="w-full" value={stat.base_stat} />
                  </div>
                  {/* Display the stat value, optionally in a fixed-width container for alignment */}
                  <span className='w-12 text-right'>{stat.base_stat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}


