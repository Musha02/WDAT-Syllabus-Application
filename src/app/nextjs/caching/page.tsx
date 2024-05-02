import Link from "next/link";
import Navbar from "@/components/navbar";
import Balancer from "react-wrap-balancer";

export default function Caching() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <section className="mx-auto flex max-w-7xl  flex-col-reverse gap-2  mt-[-100px] px-4  pb-12 transition-all md:flex-row md:gap-4">
        {/* left div */}
        <div className=" flex flex-col items-center  gap-6 pt-2 md:w-1/2 md:items-start md:gap-10 md:pt-32 md:text-left">
          <Balancer>
            <h1 className="text-xl font-semibold md:text-4xl">
              6. Caching
            </h1>
            <br></br>           
            <p className="text-xl text-neutral-400 md:text-xl">
            Next.js improves your application&#39;s performance and reduces costs by caching rendering work and data requests. 
            This page provides an in-depth look at Next.js caching mechanisms, the APIs you can use to configure them, and how they interact with each other.<br></br>
            By default, Next.js will cache as much as possible to improve performance and reduce cost. This means routes are statically rendered and data requests are cached unless you opt out.<br></br><br></br>
            Next.js has a built-in Data Cache that persists the result of data fetches across incoming server requests and deployments. 
            This is possible because Next.js extends the native fetch API to allow each request on the server to set its own persistent caching semantics.
            By default, data requests that use fetch are cached. You can use the cache and next.revalidate options of fetch to configure the caching behavior.
            </p>
          </Balancer>
          

          <div className="flex justify-center mt-4">
            <Link href= "/nextjs"  className="border-black w-fit rounded-xl border-2 bg-black px-4 py-2 text-white transition-all hover:border-black hover:bg-black hover:bg-transparent hover:text-black/90 mr-4">
              Contents Menu
            </Link>
            <Link href="/nextjs/rendering" className="border-black w-fit rounded-xl border-2 bg-black px-4 py-2 text-white transition-all hover:border-black hover:bg-black hover:bg-transparent hover:text-black/90 mr-4">
              Previous Page
            </Link>
            <Link href="/nextjs/styling" className="border-black w-fit rounded-xl border-2 bg-black px-4 py-2 text-white transition-all hover:border-black hover:bg-black hover:bg-transparent hover:text-black/90">
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
                src="https://www.youtube.com/embed/XBbXciVXWlQ"
                title="Caching" 
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
