
import SearchList from "@/components/SearchList";
import Welcome from "@/components/ui/welcome";
import Image from "next/image";
import PokemonDetail from "@/components/PokemonDetail";

export default function Home() {
  return (
    <main className="h-full">
      <PokemonDetail />
    </main>
  );
}
