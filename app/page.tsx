import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProject from "@/components/RecentProject";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems }/>
        <Hero />
        <Grid/>
        <RecentProject/>
        <div className="flex justify-center items-center mb-5 h-10">
        <p className="text-white opacity-50 text-xs lg:text-sm">inspiration from javascript mastery</p>
      </div>
      </div>
    </main>
  );
}
