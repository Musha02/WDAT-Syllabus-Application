import Link from "next/link";
import Navbar from "@/components/navbar";
import Balancer from "react-wrap-balancer";

export default function Routing() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <section className="mx-auto flex max-w-7xl mt-[-100px]">
        {/* left div */}
        <div className=" flex flex-col items-center  gap-6 pt-2 text-center md:w-1/2 md:items-start md:gap-10 md:pt-32 md:text-left">
          <Balancer>
            <h1 className="text-xl font-semibold md:text-4xl">
              3. Routing
            </h1>
            <br></br>           
            <p className="text-xl text-neutral-400 md:text-xl">
               The skeleton of every application is Routing. <br></br> App Router : Next.js introduced a new App Router built on React Server Components, which supports shared layouts, nested routing, loading states, error handling, and more. <br></br><br></br>
               Next.js uses a file-system based router where folders are used to define routes.
               Each folder represents a route segment that maps to a URL segment. To create a nested route, you can nest folders inside each other.
               A page is UI that is unique to a route. You can define a page by default exporting a component from a page.js file.
               A special page.js file is used to make route segments publicly accessible.
               The special files layout.js and template.js allow you to create UI that is shared between routes.

            </p>
          </Balancer>
          
          <div className="flex justify-center mt-4">
            <Link href="/" className="border-black w-fit rounded-xl border-2 bg-black px-4 py-2 text-white transition-all hover:border-black hover:bg-black hover:bg-transparent hover:text-black/90 mr-4">
               Home
            </Link>
            <Link href="/nextjs/project-structure" className="border-black w-fit rounded-xl border-2 bg-black px-4 py-2 text-white transition-all hover:border-black hover:bg-black hover:bg-transparent hover:text-black/90 mr-4">
              Previous Page
            </Link>
            <Link href="/nextjs/data-fetching" className="border-black w-fit rounded-xl border-2 bg-black px-4 py-2 text-white transition-all hover:border-black hover:bg-black hover:bg-transparent hover:text-black/90">
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
                src="https://www.youtube.com/embed/Vm7qM1wmXwE?" 
                title="Routing" 
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
