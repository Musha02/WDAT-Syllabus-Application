import Link from "next/link";
import Navbar from "@/components/navbar";
import Balancer from "react-wrap-balancer";

export default function NextJs() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <section className="mx-auto flex max-w-7xl mt-[-100px]">
        {/* left div */}
        <div className=" flex flex-col items-center  gap-6 pt-2 text-center md:w-1/2 md:items-start md:gap-10 md:pt-32 md:text-left">
          <Balancer>
            <h1 className="text-xl font-semibold md:text-5xl">
            TypeScript
            </h1>
          </Balancer>
          <Balancer>
            <h2 className=" text-neutral-400 md:max-w-[700px] md:text-2xl hover:text-black/90">1. <Link href="/typescript/introduction">Introduction</Link></h2>
            <h2 className=" text-neutral-400 md:max-w-[700px] md:text-2xl hover:text-black/90">2. <Link href="/typescript/introduction">Typescript Documentation</Link></h2>
            <h2 className=" text-neutral-400 md:max-w-[700px] md:text-2xl hover:text-black/90">3. <Link href="/typescript/introduction">Rewriting javascript code to typescript</Link></h2>
            <h2 className=" text-neutral-400 md:max-w-[700px] md:text-2xl hover:text-black/90">4. <Link href="/typescript/introduction">React with Typescript</Link></h2>
            </Balancer>
          <button className="border-balck  w-fit rounded-xl border-2 bg-black px-4 py-2  text-white transition-all hover:border-black hover:bg-black hover:bg-transparent  hover:text-black/90">
            <a href="/">
              Home
            </a>
          </button>
          
          </div>
        </section>
      </div>
    
    
  );

}

    


 