import Link from "next/link";
import Navbar from "@/components/navbar";
import Balancer from "react-wrap-balancer";

export default function Introduction() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <section className="mx-auto flex max-w-7xl mt-[-100px]">
        {/* left div */}
        <div className=" flex flex-col items-center  gap-6 pt-2 text-center md:w-1/2 md:items-start md:gap-10 md:pt-32 md:text-left">
          <Balancer>
            <h1 className="text-xl font-semibold md:text-4xl">
              1. Introduction
            </h1>
            <br></br>
            <h2 className="text-xl md:text-2xl">What is TypeScript?</h2>
           
            <p className="text-xl text-neutral-400 md:text-xl">
            TypeScript stands in an unusual relationship to JavaScript. TypeScript offers all of JavaScript’s features, and an additional layer on top of these: TypeScript’s type system.
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
            <button className="border-black w-fit rounded-xl border-2 bg-black px-4 py-2 text-white transition-all hover:border-black hover:bg-black hover:bg-transparent hover:text-black/90 mr-4">
              <a href="/">Home</a>
            </button>
            <button className="border-black w-fit rounded-xl border-2 bg-black px-4 py-2 text-white transition-all hover:border-black hover:bg-black hover:bg-transparent hover:text-black/90">
              <a href="/nextjs/project-structure">Next Page</a>
            </button>
          </div>
          
          </div>
        </section>
      </div>


  );

}
