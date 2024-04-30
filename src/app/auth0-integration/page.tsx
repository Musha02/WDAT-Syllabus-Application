import Link from "next/link";
import Navbar from "@/components/navbar";
import Balancer from "react-wrap-balancer";

export default function Auth0Integration() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <section className="mx-auto flex max-w-7xl  flex-col-reverse gap-2  px-4  pb-12 transition-all md:flex-row md:gap-4">
        {/* left div */}
        <div className=" flex flex-col items-center  gap-6 pt-2 md:w-1/2 md:items-start md:gap-10 md:pt-32 md:text-left">
          <Balancer>
            <h1 className="text-xl font-semibold md:text-5xl">
            Auth0 integration with Next.js 
            </h1>
          </Balancer>
          <Balancer>
            <h2 className=" text-neutral-400 md:max-w-[700px] md:text-2xl hover:text-black/90">1. <Link href="/auth0-integration/introduction">Introduction to Auth0 and Authentication Basics</Link></h2>
            <h2 className=" text-neutral-400 md:max-w-[700px] md:text-2xl hover:text-black/90">2. <Link href="/auth0-integration/integration">How to Integrate Auth0 & Next.js</Link></h2>
            <h2 className=" text-neutral-400 md:max-w-[700px] md:text-2xl hover:text-black/90">3. <Link href="/auth0-integration/userauth">User Authentication in Next.js with Auth0</Link></h2>
           </Balancer>
            
            <div className="flex justify-center mt-4">
              <Link href= "/"  className="border-black w-fit rounded-xl border-2 bg-black px-4 py-2 text-white transition-all hover:border-black hover:bg-black hover:bg-transparent hover:text-black/90 mr-4">
                Home
              </Link>
              <Link href="https://auth0.com/docs/customize/integrations" className="border-black w-fit rounded-xl border-2 bg-black px-4 py-2 text-white transition-all hover:border-black hover:bg-black hover:bg-transparent hover:text-black/90">
                Learn more
              </Link>        
            </div>

          </div>

        </section>
      </div>
    
    
  );

}

    


 