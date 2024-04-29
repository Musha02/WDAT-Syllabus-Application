import Link from "next/link";
import Navbar from "@/components/navbar";
import Balancer from "react-wrap-balancer";

export default function Optimizing() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <section className="mx-auto flex max-w-7xl mt-[-100px]">
        {/* left div */}
        <div className=" flex flex-col items-center  gap-6 pt-2 text-center md:w-1/2 md:items-start md:gap-10 md:pt-32 md:text-left">
          <Balancer>
            <h1 className="text-xl font-semibold md:text-4xl">
             8. Optimizing
            </h1>
            <br></br>
            <h2 className="text-xl md:text-2xl">What is Next.js?</h2>
           
            <p className="text-xl text-neutral-400 md:text-xl">Next.js is a React framework for building full-stack web applications. 
            You use React Components to build user interfaces, and Next.js for additional features and optimizations.
            Under the hood, Next.js also abstracts and automatically configures tooling needed for React, like bundling, compiling, and more. This allows you to focus on building your application instead of spending time with configuration.
            Whether you're an individual developer or part of a larger team, Next.js can help you build interactive, dynamic, and fast React applications.
            </p>
          </Balancer>

          {/* Image grid */}
        <div className="grid grid-cols-3 gap-6 mt-8">
          {/* Image 1 */}
          <img src="/image1.jpg" alt="Image 1" className="w-full h-auto rounded-lg" />
          {/* Image 2 */}
          <img src="/image2.jpg" alt="Image 2" className="w-full h-auto rounded-lg" />
          {/* Image 3 */}
          <img src="/image3.jpg" alt="Image 3" className="w-full h-auto rounded-lg" />
          {/* Image 4 */}
          <img src="/image4.jpg" alt="Image 4" className="w-full h-auto rounded-lg" />
          {/* Image 5 */}
          <img src="/image5.jpg" alt="Image 5" className="w-full h-auto rounded-lg" />
          {/* Image 6 */}
          <img src="/image6.jpg" alt="Image 6" className="w-full h-auto rounded-lg" />
        </div>
          
          <div className="flex justify-center mt-4">
            <Link href="/" className="border-black w-fit rounded-xl border-2 bg-black px-4 py-2 text-white transition-all hover:border-black hover:bg-black hover:bg-transparent hover:text-black/90 mr-4">
              Home
            </Link>
            <Link href="/nextjs/styling" className="border-black w-fit rounded-xl border-2 bg-black px-4 py-2 text-white transition-all hover:border-black hover:bg-black hover:bg-transparent hover:text-black/90 mr-4">
              Previous Page
            </Link>
            <Link href="/nextjs/testing" className="border-black w-fit rounded-xl border-2 bg-black px-4 py-2 text-white transition-all hover:border-black hover:bg-black hover:bg-transparent hover:text-black/90">
              Next Page
            </Link>
          </div>
          
          </div>
        </section>
      </div>
    

  );

}
