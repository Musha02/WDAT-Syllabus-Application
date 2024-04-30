import Link from "next/link";
import Navbar from "@/components/navbar";
import Balancer from "react-wrap-balancer";

export default function Optimizing() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <section className="mx-auto flex max-w-7xl  flex-col-reverse gap-2  mt-[-100px] px-4  pb-12 transition-all md:flex-row md:gap-4">
        {/* left div */}
        <div className=" flex flex-col items-center  gap-6 pt-2 text-center md:w-1/2 md:items-start md:gap-10 md:pt-32 md:text-left">
          <Balancer>
            <h1 className="text-xl font-semibold md:text-4xl">
             8. Optimizing
            </h1>
            <br></br>

            <p className="text-xl text-neutral-400 md:text-xl">
              Next.js comes with a variety of built-in optimizations designed to improve your application&#39;s speed and Core Web Vitals. 
              This guide will cover the optimizations you can leverage to enhance your user experience.
              Built-in components abstract away the complexity of implementing common UI optimizations. These components are:<br></br>

              -Images: Built on the native &lt;img&gt; element. The Image Component optimizes images for performance by lazy loading and automatically resizing images based on device size.<br></br>
              -Link: Built on the native &lt;a&gt; tags. The Link Component prefetches pages in the background, for faster and smoother page transitions.<br></br>
              -Scripts: Built on the native &lt;script&gt; tags. The Script Component gives you control over loading and execution of third-party scripts. <br></br>
            </p>
          </Balancer>

          <div className="flex justify-center mt-4">
            <Link href="/" className="border-black w-fit rounded-xl border-2 bg-black px-4 py-2 text-white transition-all hover:border-black hover:bg-black hover:bg-transparent hover:text-black/90 mr-4">
              Home
            </Link>
            <Link href="/nextjs/styling" className="border-black w-fit rounded-xl border-2 bg-black px-4 py-2 text-white transition-all hover:border-black hover:bg-black hover:bg-transparent hover:text-black/90 mr-4">
              Previous Page
            </Link>
            <Link href="/nextjs/testing" className="border-black w-fit rounded-xl border-2 bg-black px-4 py-2 text-white transition-all hover:border-black hover:bg-black hover:bg-transparent hover:text-black/90">
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
                src="https://www.youtube.com/embed/pr-PzWkrif0"
                title="Optimizing" 
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
