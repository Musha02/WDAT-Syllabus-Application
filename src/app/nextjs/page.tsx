import Link from "next/link";
import Navbar from "@/components/navbar";
import Balancer from "react-wrap-balancer";
import Image from "next/image";
import Next from "@/assets/images/Next.jpeg"


export default function NextJs() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <section className="mx-auto flex max-w-7xl  flex-col-reverse gap-2  mt-[-100px] px-4  pb-12 transition-all md:flex-row md:gap-4">
        {/* left div */}
        <div className=" flex flex-col items-center  gap-6 pt-2 md:w-1/2 md:items-start md:gap-10 md:pt-32 md:text-left">
          <Balancer>
            <h1 className="text-xl font-semibold md:text-5xl">
            NextJs 14 Fundamentals
            </h1>
          </Balancer>
          <Balancer>
            <h2 className=" text-neutral-400 md:max-w-[700px] md:text-2xl hover:text-black/90">1. <Link href="/nextjs/introduction">Introduction</Link></h2>
            <h2 className=" text-neutral-400 md:max-w-[700px] md:text-2xl hover:text-black/90">2. <Link href="/nextjs/project-structure">Project Structure</Link></h2>
            <h2 className=" text-neutral-400 md:max-w-[700px] md:text-2xl hover:text-black/90">3. <Link href="/nextjs/routing">Routing</Link></h2>
            <h2 className=" text-neutral-400 md:max-w-[700px] md:text-2xl hover:text-black/90">4. <Link href="/nextjs/data-fetching">Data Fetching</Link></h2>
            <h2 className=" text-neutral-400 md:max-w-[700px] md:text-2xl hover:text-black/90">5. <Link href="/nextjs/rendering">Rendering</Link></h2>
            <h2 className=" text-neutral-400 md:max-w-[700px] md:text-2xl hover:text-black/90">6. <Link href="/nextjs/caching">Caching</Link></h2>
            <h2 className=" text-neutral-400 md:max-w-[700px] md:text-2xl hover:text-black/90">7. <Link href="/nextjs/styling">Styling</Link></h2>
            <h2 className=" text-neutral-400 md:max-w-[700px] md:text-2xl hover:text-black/90">8. <Link href="/nextjs/optimizing">Optimizing</Link></h2>
            <h2 className=" text-neutral-400 md:max-w-[700px] md:text-2xl hover:text-black/90">9. <Link href="/nextjs/testing">Testing</Link></h2>
          </Balancer>
          <Link href= "https://nextjs.org/docs"  className="border-black w-fit rounded-xl border-2 bg-black px-4 py-2 text-white transition-all hover:border-black hover:bg-black hover:bg-transparent hover:text-black/90 mr-4">
             Learn more
          </Link>
          
          </div>
          <section className="md:w-1/2 mt-20 ">
          <Image
            className="hidden h-auto max-w-[600px] mt-20 md:block rounded-3xl"
            src={Next}
            alt="next-image"
          />
          <Image
            className="h-auto w-full rounded-3xl mt-10 md:hidden "
            src={Next}
            alt="next-image"
          />
         </section>
        </section>
      </div>
    
  );

}
