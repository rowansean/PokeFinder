
import SearchList from "@/components/SearchList";
import Welcome from "@/components/ui/welcome";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full grid grid-cols-2 ">
      <Welcome className=""/>
      <SearchList className=""/>
    </main>
  );
}
