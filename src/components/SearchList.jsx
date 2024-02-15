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
    },
    {
        id: 5,
        name: "Jigglypuff",
        type: "Fairy"
    },
    {
        id: 6,
        name: "Meowth",
        type: "Normal"
    },
    {
        id: 7,
        name: "Psyduck",
        type: "Water"
    },
    {
        id: 8,
        name: "Machop",
        type: "Fighting"
    },
    {
        id: 9,
        name: "Geodude",
        type: "Rock"
    },
    {
        id: 10,
        name: "Gengar",
        type: "Ghost"
    },
    {
        id: 11,
        name: "Pidgey",
        type: "Flying"
    },
    {
        id: 12,
        name: "Rattata",
        type: "Normal"
    },
    {
        id: 13,
        name: "Zubat",
        type: "Poison"
    },
    {
        id: 14,
        name: "Oddish",
        type: "Grass"
    }
]

export default function SearchList({className}) {
  return (
    <div className={`${className} flex flex-col gap-3 h-full mt-6`}>
        <Input className="w-full h-14 mb-5 shadow-inner" placeholder="Search..."/>
        <div className="flex flex-col gap-4">
            {/* for pokemon in pokemon */}
            {pokemon.slice(0,5).map(poke => (
                <Card key={poke.id} className="p-2 flex justify-between items-center shadow-lg hover:scale-105">
                    <Avatar className="size size-8">
                        <AvatarImage src="" />
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
