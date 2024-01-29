import { Inter } from "next/font/google";
import HomePage from "@/components/homepage";
import Navbar from "@/components/ui/searchBox/Navbar";



const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between `}
    >
      <Navbar/>
      <HomePage />
    </main>
  );
}
