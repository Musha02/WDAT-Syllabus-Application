import Link from "next/link";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Image1 from "@/assets/images/image1.png";
import Image2 from "@/assets/images/image2.png";
import Image3 from "@/assets/images/image3.png";
import Image4 from "@/assets/images/image4.png";

export default function Introduction() {
  return (
    <div className=" h-full w-full">
      <Navbar />
      <section className="mx-auto flex max-w-7xl ">
        
          

          {/* Image grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
         
          <Link href = "/nextjs" >
            <Image src = {Image1} alt="Image 1" className="w-full h-full object-cover border border-black border-2 rounded-3xl" />
          </Link>
         
          <Link href = "/typescript" >
            <Image src = {Image2} alt="Image 2" className="w-full h-full object-cover border border-black border-2 rounded-3xl" />
          </Link>

          <Link href = "/integration" >
            <Image src = {Image3} alt="Image 3" className="w-full h-full  border border-black border-2 rounded-3xl" />
          </Link>

          <Link href = "/stripepayments" >
            <Image src = {Image4} alt="Image 4" className="w-full h-full object-cover border border-black border-2 rounded-3xl" />
          </Link>

          

        
          
          </div>
        </section>
      </div>

      /*
    
    <div className="min-h-screen w-full">
      <Navbar />
      <div className=" flex flex-col items-center  gap-6 pt-2 text-center md:w-1/2 md:items-start md:gap-10 md:pt-32 md:text-left">

      <h1>Introduction</h1> 
      <h2>What is Next.js?</h2>
        <h3>Next.js is a React framework for building full-stack web applications. 
            You use React Components to build user interfaces, and Next.js for additional features and optimizations.
            Under the hood, Next.js also abstracts and automatically configures tooling needed for React, like bundling, compiling, and more. This allows you to focus on building your application instead of spending time with configuration.
            Whether you're an individual developer or part of a larger team, Next.js can help you build interactive, dynamic, and fast React applications.</h3>
      </div>
    </div>
    */

  );

}
