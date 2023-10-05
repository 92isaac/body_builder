import { Altiraser } from "@/components/landing/Altiraser";
import { Hero } from "@/components/landing/Hero";
import HeroHelp from "@/components/landing/HeroHelp";
import LocationContainer from "@/components/landing/LocationContainer";
import Ourgym from "@/components/landing/Ourgym";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:pt-20">
      <Hero />
      <LocationContainer />
      <Altiraser text='Altiras #1' title='Our gym is your  gym' description="Kick your feet up! With a gym designed around you, we think you’ll love it here."/>
      <Ourgym />
      <div className="mt-20 md:mt-0">
      <Altiraser text="Altiras #2" title="We are here to help you" description="no matter where you start from, no matter where you are going to."/>
      </div>
      <HeroHelp />
      <Altiraser text="Altiras #3" title="Energy is for Everyone" description="Believe in the power of a motivating group fitness community."/>
     </main>
  )
}
