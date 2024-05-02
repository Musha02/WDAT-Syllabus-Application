import Link from "next/link";
import Navbar from "@/components/navbar";
import Balancer from "react-wrap-balancer";

export default function Styling() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <section className="mx-auto flex max-w-7xl  flex-col-reverse gap-2  mt-[-100px] px-4  pb-12 transition-all md:flex-row md:gap-4">
        {/* left div */}
        <div className=" flex flex-col items-center  gap-6 pt-2 md:w-1/2 md:items-start md:gap-10 md:pt-32 md:text-left">
          <Balancer>
            <h1 className="text-xl font-semibold md:text-4xl">
             7. Styling
            </h1>
            <br></br>           
            <p className="text-xl text-neutral-400 md:text-xl">
            Next.js supports different ways of styling your application, <br></br>including:<br></br>

            - Global CSS: Simple to use and familiar for those experienced with traditional CSS, but can lead to larger CSS bundles and difficulty managing styles as the application grows.<br></br>
            - CSS Modules: Create locally scoped CSS classes to avoid naming conflicts and improve maintainability.<br></br>
            - Tailwind CSS: A utility-first CSS framework that allows for rapid custom designs by composing utility classes.<br></br>
            - Sass: A popular CSS preprocessor that extends CSS with features like variables, nested rules, and mixins.<br></br>
            - CSS-in-JS: Embed CSS directly in your JavaScript components, enabling dynamic and scoped styling.<br></br><br></br>
            Tailwind CSS is a utility-first CSS framework that works exceptionally well with Next.js.
            </p>
          </Balancer>
          
          <div className="flex justify-center mt-4">
            <Link href= "/nextjs"  className="border-black w-fit rounded-xl border-2 bg-black px-4 py-2 text-white transition-all hover:border-black hover:bg-black hover:bg-transparent hover:text-black/90 mr-4">
              Contents Menu
            </Link>
            <Link href="/nextjs/caching" className="border-black w-fit rounded-xl border-2 bg-black px-4 py-2 text-white transition-all hover:border-black hover:bg-black hover:bg-transparent hover:text-black/90 mr-4">
              Previous Page
            </Link>
            <Link href="/nextjs/optimizing" className="border-black w-fit rounded-xl border-2 bg-black px-4 py-2 text-white transition-all hover:border-black hover:bg-black hover:bg-transparent hover:text-black/90">
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
                src="https://www.youtube.com/embed/qKwnlTVAGnA"
                title="Styling in Next.Js"  
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
