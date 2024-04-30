import Link from "next/link";
import Navbar from "@/components/navbar";
import Balancer from "react-wrap-balancer";

export default function Testing() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <section className="mx-auto flex max-w-7xl  flex-col-reverse gap-2  mt-[-100px] px-4  pb-12 transition-all md:flex-row md:gap-4">
        {/* left div */}
        <div className=" flex flex-col items-center  gap-6 pt-2 text-center md:w-1/2 md:items-start md:gap-10 md:pt-32 md:text-left">
          <Balancer>
            <h1 className="text-xl font-semibold md:text-4xl">
             9. Testing
            </h1>
            <br></br>
           
            <p className="text-xl text-neutral-400 md:text-xl">
            In React and Next.js, there are a few different types of tests you can write, each with its own purpose and use cases. 
            This page provides an overview of types and commonly used tools you can use to test your application.<br></br><br></br>
            Types of tests: <br></br>
            - Unit testing involves testing individual units (or blocks of code) in isolation. In React, a unit can be a single function, hook, or component.<br></br>
            - Component testing is a more focused version of unit testing where the primary subject of the tests is React components. This may involve testing how components are rendered, their interaction with props, and their behavior in response to user events.<br></br>
            - Integration testing involves testing how multiple units work together. This can be a combination of components, hooks, and functions.<br></br>
            - End-to-End (E2E) Testing involves testing user flows in an environment that simulates real user scenarios, like the browser. This means testing specific tasks (e.g. signup flow) in a production-like environment.<br></br>
            </p>
          </Balancer>
          
          <div className="flex justify-center mt-4">
            <Link href="/"className="border-black w-fit rounded-xl border-2 bg-black px-4 py-2 text-white transition-all hover:border-black hover:bg-black hover:bg-transparent hover:text-black/90 mr-4">
              Home
            </Link>
            <Link href="/nextjs/optimizing" className="border-black w-fit rounded-xl border-2 bg-black px-4 py-2 text-white transition-all hover:border-black hover:bg-black hover:bg-transparent hover:text-black/90 mr-4">
              Previous Page
            </Link>
          </div>
          
        </div>
        <section className="md:w-1/2 mt-20">
          <div className=" w-full h-auto px-10 mt-20">
            <div className="mt-10" >
              <iframe 
                width="100%" 
                height="400" 
                src="https://www.youtube.com/embed/XTNqyEBPAFw"
                title="Testing in Next.Js" 
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
