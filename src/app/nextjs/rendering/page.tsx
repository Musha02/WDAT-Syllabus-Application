import Link from "next/link";
import Navbar from "@/components/navbar";
import Balancer from "react-wrap-balancer";

export default function Rendering() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <section className="mx-auto flex max-w-7xl mt-[-100px]">
        {/* left div */}
        <div className=" flex flex-col items-center  gap-6 pt-2 text-center md:w-1/2 md:items-start md:gap-10 md:pt-32 md:text-left">
          <Balancer>
            <h1 className="text-xl font-semibold md:text-4xl">
             5. Rendering
            </h1>
            <br></br>           
            <p className="text-xl text-neutral-400 md:text-xl">
            Rendering converts the code you write into user interfaces. 
            React and Next.js allow you to create hybrid web applications where parts of your code can be rendered on the server or the client. 
            This section will help you understand the differences between these rendering environments, strategies, and runtimes. <br></br><br></br>
            Rendering Environments: 
            There are two environments where web applications can be rendered: the client and the server.<br></br>
            -The client refers to the browser onser' device that sendsequet toerve for your application code. It then turns the response from the server intoser nterface.<br></br>
            -The server refers to the computer inata enter that stores your application code, receives requests fromlien, and sends back an appropriate response.
            </p>
          </Balancer>

          
          <div className="flex justify-center mt-4">
            <Link href="/" className="border-black w-fit rounded-xl border-2 bg-black px-4 py-2 text-white transition-all hover:border-black hover:bg-black hover:bg-transparent hover:text-black/90 mr-4">
              Home           
            </Link>
            <Link href="/nextjs/data-fetching" className="border-black w-fit rounded-xl border-2 bg-black px-4 py-2 text-white transition-all hover:border-black hover:bg-black hover:bg-transparent hover:text-black/90 mr-4">
              Prevous Page          
            </Link>
            <Link href="/nextjs/caching" className="border-black w-fit rounded-xl border-2 bg-black px-4 py-2 text-white transition-all hover:border-black hover:bg-black hover:bg-transparent hover:text-black/90">
              NextPage      
            </Link>
          </div>
          
          </div>
        </section>
      </div>
    

  );

}