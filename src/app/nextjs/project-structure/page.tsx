import Link from "next/link";
import Navbar from "@/components/navbar";
import Balancer from "react-wrap-balancer";
import YouTube from 'react-youtube';

export default function ProjectStructure() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <section className="mx-auto flex max-w-7xl mt-[-100px]">
        {/* left div */}
        <div className=" flex flex-col items-center  gap-6 pt-2 text-center md:w-1/2 md:items-start md:gap-10 md:pt-32 md:text-left">
          <Balancer>
            <h1 className="text-xl font-semibold md:text-4xl">
             2. Project Structure
            </h1>
            <br></br>           
            <p className="text-xl text-neutral-400 md:text-xl">
            This page provides an overview of the project structure of a Next.js application. 
            It covers top-level files and folders, configuration files, and routing conventions within the app and pages directories.<br></br>
            Top-level folders are used to organize your application's code and static assets.<br></br>
            - app, pages, public, src <br></br>
            Top-level files are used to configure your application, manage dependencies, run middleware, integrate monitoring tools, and define environment variables.<br></br>
            - next.config.js, package.json, .env, tsconfig.json <br></br>
            The following file conventions are used to define routes and handle metadata in the app router.<br></br>
            - layout, page, loading, route, error, not found 

            </p>
          </Balancer>

      
          
          <div className="flex justify-center mt-4">
            <Link href="/" className="border-black w-fit rounded-xl border-2 bg-black px-4 py-2 text-white transition-all hover:border-black hover:bg-black hover:bg-transparent hover:text-black/90 mr-4">
              Home
            </Link>
            <Link href="/nextjs/introduction" className="border-black w-fit rounded-xl border-2 bg-black px-4 py-2 text-white transition-all hover:border-black hover:bg-black hover:bg-transparent hover:text-black/90 mr-4">
              Previous Page
            </Link>
            <Link href="/nextjs/routing" className="border-black w-fit rounded-xl border-2 bg-black px-4 py-2 text-white transition-all hover:border-black hover:bg-black hover:bg-transparent hover:text-black/90">
              Next Page
            </Link>
          </div>
    
        
          </div>
        </section>
      </div>
    

  );

}
