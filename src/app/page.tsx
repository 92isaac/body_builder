import Altiraser from "@/components/landing/Altiraser";
import { Hero } from "@/components/landing/Hero";
import LocationContainer from "@/components/landing/LocationContainer";
import Ourgym from "@/components/landing/Ourgym";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:pt-20">
      <Hero />
      <LocationContainer />
      <Altiraser />
      <Ourgym />
     </main>
  )
}
