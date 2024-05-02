import Link from "next/link";
import Navbar from "@/components/navbar";
import Balancer from "react-wrap-balancer";

export default function DataFetching() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <section className="mx-auto flex max-w-7xl  flex-col-reverse gap-2  mt-[-100px] px-4  pb-12 transition-all md:flex-row md:gap-4">
        {/* left div */}
        <div className=" flex flex-col items-center  gap-6 pt-2 md:w-1/2 md:items-start md:gap-10 md:pt-32 md:text-left">
          <Balancer>
            <h1 className="text-xl font-semibold md:text-4xl">
              4. Data Fetching
            </h1>
            <br></br>           
            <p className="text-xl text-neutral-400 md:text-xl">
            Data fetching is a core part of any application. This page goes through how you can fetch, cache, and revalidate data in React and Next.js.
            There are four ways you can fetch data: <br></br>
            1. On the server, with fetch <br></br>
            2. On the server, with third-party libraries <br></br>
            3. On the client, via a Route Handler <br></br>
            4. On the client, with third-party libraries. <br></br><br></br>
            Caching Data : Caching stores data so it doesn&#39;t need to be re-fetched from your data source on every request. <br></br>
            By default, Next.js automatically caches the returned values of fetch in the Data Cache on the server. This means that the data can be fetched at build time or request time, cached, and reused on each data request.
            </p>
          </Balancer>
          
          <div className="flex justify-center mt-4">
            <Link href= "/nextjs"  className="border-black w-fit rounded-xl border-2 bg-black px-4 py-2 text-white transition-all hover:border-black hover:bg-black hover:bg-transparent hover:text-black/90 mr-4">
              Contents Menu
            </Link>
            <Link href="/nextjs/routing" className="border-black w-fit rounded-xl border-2 bg-black px-4 py-2 text-white transition-all hover:border-black hover:bg-black hover:bg-transparent hover:text-black/90 mr-4">
              Previous Page
            </Link>
            <Link href="/nextjs/rendering" className="border-black w-fit rounded-xl border-2 bg-black px-4 py-2 text-white transition-all hover:border-black hover:bg-black hover:bg-transparent hover:text-black/90">
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
                src="https://www.youtube.com/embed/uR67O6sNjbg?" 
                title="Data Fetching" 
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
