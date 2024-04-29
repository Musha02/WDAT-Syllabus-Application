import Link from "next/link";
import Navbar from "@/components/navbar";
import Balancer from "react-wrap-balancer";
import Image from "next/image";
import Image1 from "@/assets/images/image1.png";

import code from "@/assets/images/code.jpg"


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
            <h2 className="text-xl md:text-2xl">What is Next.js?</h2>
           
            <p className="text-xl text-neutral-400 md:text-xl">Next.js is a React framework for building full-stack web applications. 
            You use React Components to build user interfaces, and Next.js for additional features and optimizations.
            Under the hood, Next.js also abstracts and automatically configures tooling needed for React, like bundling, compiling, and more. This allows you to focus on building your application instead of spending time with configuration.
            Whether you're an individual developer or part of a larger team, Next.js can help you build interactive, dynamic, and fast React applications.
            </p>
          </Balancer>

          <div className="flex justify-center mt-4">
            <Link href= "/"  className="border-black w-fit rounded-xl border-2 bg-black px-4 py-2 text-white transition-all hover:border-black hover:bg-black hover:bg-transparent hover:text-black/90 mr-4">
             Home
            </Link>
            <Link href="/nextjs/project-structure" className="border-black w-fit rounded-xl border-2 bg-black px-4 py-2 text-white transition-all hover:border-black hover:bg-black hover:bg-transparent hover:text-black/90">
              Next Page
            </Link>
          </div>
          
          </div>

          <section className="md:w-1/2  ">
          <Image
            className="hidden h-auto max-w-[600px]  md:block mt-[100px]"
            src={code}
            alt="code-image"
          />
          <Image
            className="h-auto w-full  md:hidden"
            src={code}
            alt="code-image"
          />
        </section>
        </section>
      </div>


  );

}
