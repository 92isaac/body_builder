import { Hero } from "@/components/landing/Hero";
import Location from "@/components/landing/Location";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:pt-20">
      <Hero />
      <Location/>
     </main>
  )
}
