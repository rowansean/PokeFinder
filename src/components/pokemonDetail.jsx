'use client';

import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

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
  dark: 'bg-gray-800', // Very dark gray for dark type
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
  });

  useEffect(() => {
    
    async function fetchPokemonDetails() {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${featuredPokemon.name}`);
      const data = await res.json();
      setPokemonDetails(data);
    }

    if (featuredPokemon) {
      fetchPokemonDetails();
    }

  }
  , [featuredPokemon]);

  return (
    <div className='flex flex-col max-h-full items-center gap-4'>
      <Avatar className='size-36 shadow-xl'>
        <AvatarImage 
          src={pokemonDetails.sprites.front_default}
          alt={pokemonDetails.name}
          className='rounded-full bg-[#ea8c8c] size-36 border-4 border-amber-500'
        />
        <AvatarFallback>{pokemonDetails.id}</AvatarFallback>
      </Avatar>

      <Card className='bg-[#c63939] w-80 border-none p-3 shadow-inner '>
          <CardTitle className="text-white capitalize m-1">{pokemonDetails.name}</CardTitle>
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
              <ul className=''>
                <li>
                  <span className='font-bold'>HP:</span> 100
                </li>
                <li>
                  <span className='font-bold'>Attack:</span> 80
                </li>
                <li>
                  <span className='font-bold'>Defense:</span> 70
                </li>
                <li>
                  <span className='font-bold'>Special Attack:</span> 90
                </li>
                <li>
                  <span className='font-bold'>Special Defense:</span> 80
                </li>
                <li>
                  <span className='font-bold'>Speed:</span> 110
                </li>
              </ul>
            </div>
          </div>
      </Card>
    </div>
  );
}


