import { Inter } from "next/font/google";
import HomePage from "@/components/homepage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

 return (
  <main
   className={`flex min-h-screen flex-col items-center justify-between `}
  >
    <HomePage/>
    
  </main>
 );
}
