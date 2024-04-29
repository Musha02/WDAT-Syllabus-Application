import Link from "next/link";
import Navbar from "@/components/navbar";
import Balancer from "react-wrap-balancer";

export default function Arrays() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <section className="mx-auto flex max-w-7xl mt-[-100px]">
        {/* left div */}
        <div className=" flex flex-col items-center  gap-6 pt-2 text-center md:w-1/2 md:items-start md:gap-10 md:pt-32 md:text-left">
          <Balancer>
            <h1 className="text-xl font-semibold md:text-4xl">
              2. TypeScript Arrays
            </h1>
            <br></br>           
            <p className="text-xl text-neutral-400 md:text-xl">
            TypeScript has a specific syntax for typing arrays.
            The readonly keyword can prevent arrays from being changed.TypeScript can infer the type of an array if it has values.<br></br>
            There are two types of an array in TypeScript:<br></br>

            1. Single-Dimensional Array : A single-dimensional array is a type of linear array, which contains only one row for storing data. It has a single set of the square bracket ("[]"). We can access its elements either using row or column index.<br></br>
            2. Multi-Dimensional Array : A multi-dimensional array is an array which contains one or more arrays. In the multi-dimensional array, data is stored in a row and column-based index (also known as matrix form). A two-dimensional array (2-D array) is the simplest form of a multi-dimensional array.<br></br>
            </p>
          </Balancer>
          
          <div className="flex justify-center mt-4">
          < Link href= "/"  className="border-black w-fit rounded-xl border-2 bg-black px-4 py-2 text-white transition-all hover:border-black hover:bg-black hover:bg-transparent hover:text-black/90 mr-4">
             Home
            </Link>
            <Link href="/typescript/introduction" className="border-black w-fit rounded-xl border-2 bg-black px-4 py-2 text-white transition-all hover:border-black hover:bg-black hover:bg-transparent hover:text-black/90 mr-4">
              Previous Page
            </Link>
            <Link href="/typescript/tuples" className="border-black w-fit rounded-xl border-2 bg-black px-4 py-2 text-white transition-all hover:border-black hover:bg-black hover:bg-transparent hover:text-black/90">
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
                src="https://www.youtube.com/embed/Bh79UBu-hRg" 
                title="TypeScript Arrays" 
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
