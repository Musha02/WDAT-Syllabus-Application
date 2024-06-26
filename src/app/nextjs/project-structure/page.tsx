import Link from "next/link";
import Navbar from "@/components/navbar";
import Balancer from "react-wrap-balancer";


export default function ProjectStructure() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <section className="mx-auto flex max-w-7xl  flex-col-reverse gap-2  mt-[-100px] px-4  pb-12 transition-all md:flex-row md:gap-4">
        {/* left div */}
        <div className=" flex flex-col items-center  gap-6 pt-2 md:w-1/2 md:items-start md:gap-10 md:pt-32 md:text-left">
          <Balancer>
            <h1 className="text-xl font-semibold md:text-4xl">
             2. Project Structure
            </h1>
            <br></br>           
            <p className="text-xl text-neutral-400 md:text-xl">
            This page provides an overview of the project structure of a Next.js application. 
            It covers top-level files and folders, configuration files, and routing conventions within the app and pages directories.<br></br>
            Top-level folders are used to organize your application&#39;s code and static assets.<br></br>
            - app, pages, public, src <br></br>
            Top-level files are used to configure your application, manage dependencies, run middleware, integrate monitoring tools, and define environment variables.<br></br>
            - next.config.js, package.json, .env, tsconfig.json <br></br>
            The following file conventions are used to define routes and handle metadata in the app router.<br></br>
            - layout, page, loading, route, error, not found 

            </p>
          </Balancer>

      
          
          <div className="flex justify-center mt-4">
            <Link href= "/nextjs"  className="border-black w-fit rounded-xl border-2 bg-black px-4 py-2 text-white transition-all hover:border-black hover:bg-black hover:bg-transparent hover:text-black/90 mr-4">
              Contents Menu
            </Link>
            <Link href="/nextjs/introduction" className="border-black w-fit rounded-xl border-2 bg-black px-4 py-2 text-white transition-all hover:border-black hover:bg-black hover:bg-transparent hover:text-black/90 mr-4">
              Previous Page
            </Link>
            <Link href="/nextjs/routing" className="border-black w-fit rounded-xl border-2 bg-black px-4 py-2 text-white transition-all hover:border-black hover:bg-black hover:bg-transparent hover:text-black/90">
              Next Page
            </Link>
          </div>
    
        
        </div>
        <section className="md:w-1/2 mt-20">
          <div className=" w-full h-auto px-10 mt-20">
            <div className="mt-10 " >
              <iframe 
                width="100%" 
                height="400" 
                src="https://www.youtube.com/embed/FmerxXWD66g?"
                title="Project Structure" 
                frameBorder={10}
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
