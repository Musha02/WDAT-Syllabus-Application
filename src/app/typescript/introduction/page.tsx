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
            TypeScript stands in an unusual relationship to JavaScript. ypeScript is JavaScript with added syntax for types. 
            TypeScript offers all of JavaScript’s features, and an additional layer on top of these: TypeScript’s type system.
            TypeScript allows specifying the types of data being passed around within the code, and has the ability to report errors when the types don't match.<br></br>
            For example, TypeScript will report an error when passing a string into a function that expects a number. JavaScript will not.
            </p>
          </Balancer>
          
          <div className="flex justify-center mt-4">
          < Link href= "/"  className="border-black w-fit rounded-xl border-2 bg-black px-4 py-2 text-white transition-all hover:border-black hover:bg-black hover:bg-transparent hover:text-black/90 mr-4">
             Home
            </Link>
            <Link href="/typescript/arrays" className="border-black w-fit rounded-xl border-2 bg-black px-4 py-2 text-white transition-all hover:border-black hover:bg-black hover:bg-transparent hover:text-black/90">
              Next Page
            </Link>
          </div>
          
          </div>
          <section className="md:w-1/2 mt-20">
          <div className=" w-full h-auto px-10 mt-20">
            <div className="mt-10" >
              <iframe 
                width="100%" 
                height="400" 
                src="https://www.youtube.com/embed/MOO5vrtTUTE?"
                title="TypeScript Introduction" 
                frameBorder="10" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                style={{ borderRadius: '30px' }}
                ></iframe>
            </div>
          </div>
         </section>

        </section>
      </div>


  );

}
