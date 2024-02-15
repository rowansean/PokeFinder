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

export default function PokemonDetail() {
  return (
    <div className='flex flex-col max-h-full items-center gap-3'>
      <Avatar className='md:size-36'>
        <AvatarImage src='' />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <Card className='bg-[#c63939] w-80 border-none p-3'>
          <CardTitle>Pokemon Details</CardTitle>
          <CardDescription>Card Description</CardDescription>
          <Badge>Secondary</Badge>
          <Badge>Secondary</Badge>
          <div className='text-black text-left'>
            <h3 className='text-lg font-semibold'>Base Stats</h3>
            <div className='bg-[#ffffff] rounded-md p-4'>
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


