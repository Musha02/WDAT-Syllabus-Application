import Link from "next/link";
import Navbar from "@/components/navbar";
import Balancer from "react-wrap-balancer";

export default function Functions() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <section className="mx-auto flex max-w-7xl  flex-col-reverse gap-2  mt-[-100px] px-4  pb-12 transition-all md:flex-row md:gap-4">
        {/* left div */}
        <div className=" flex flex-col items-center  gap-6 pt-2 md:w-1/2 md:items-start md:gap-10 md:pt-32 md:text-left">
          <Balancer>
            <h1 className="text-xl font-semibold md:text-4xl">
              6. TypeScript Functions
            </h1>
            <br></br>           
            <p className="text-xl text-neutral-400 md:text-xl">
            Functions are the fundamental building block of any applications in JavaScript. It makes the code readable, maintainable, and reusable. We can use it to build up layers of abstraction, mimicking classes, information hiding, and modules. In TypeScript, however, we have the concept of classes, namespaces, and modules, but functions still are an integral part in describing how to do things. TypeScript also allows adding new capabilities to the standard JavaScript functions to make the code easier to work.
            There are three aspects of a function: <br></br>
            - Function declaration: A function declaration tells the compiler about the function name, function parameters, and return type. <br></br>
            - Function definition: It contains the actual statements which are going to executes. It specifies what and how a specific task would be done. <br></br>
            - Function call: We can call a function from anywhere in the program. The parameter/argument cannot differ in function calling and a function declaration. We must pass the same number of functions as it is declared in the function declaration. <br></br>
            </p>
          </Balancer>
          
          <div className="flex justify-center mt-4">
          < Link href= "/"  className="border-black w-fit rounded-xl border-2 bg-black px-4 py-2 text-white transition-all hover:border-black hover:bg-black hover:bg-transparent hover:text-black/90 mr-4">
             Home
            </Link>
            <Link href="/typescript/classes" className="border-black w-fit rounded-xl border-2 bg-black px-4 py-2 text-white transition-all hover:border-black hover:bg-black hover:bg-transparent hover:text-black/90 mr-4">
              Previous Page
            </Link>
            <Link href="/typescript/react-with-ts" className="border-black w-fit rounded-xl border-2 bg-black px-4 py-2 text-white transition-all hover:border-black hover:bg-black hover:bg-transparent hover:text-black/90">
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
                src="https://www.youtube.com/embed/34xpwykL4Uc" 
                title="TypeScript Functions" 
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
