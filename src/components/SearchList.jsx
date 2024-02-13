import { Input } from "@/components/ui/input"
import { Card } from "./ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"



const pokemon = [
    {
        id: 1,
        name: "Pikachu",
        type: "Electric"
    },
    {
        id: 2,
        name: "Charmander",
        type: "Fire"
    },
    {
        id: 3,
        name: "Squirtle",
        type: "Water"
    },
    {
        id: 4,
        name: "Bulbasaur",
        type: "Grass"
    }
]

export default function SearchList({className}) {
  return (
    <div className={`${className} flex flex-col gap-3 h-full`}>
        <Input className="w-full h-14 mb-5 shadow-inner" placeholder="Search..."/>
        <div className="flex flex-col gap-4">
            {/* for pokemon in pokemon */}
            {pokemon.slice(0,5).map(poke => (
                <Card key={pokemon.id} className="p-2 flex justify-between items-center shadow-lg hover:scale-105">
                    <Avatar className="size size-8">
                        <AvatarImage src="h-fit" />
                        <AvatarFallback>PK</AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl ">{poke.name}</h3>
                    <Badge className="text-xs bg-slate-600 h-fit">{poke.type}</Badge>
                </Card>
            ))}
        </div>
    </div>
  )
}
