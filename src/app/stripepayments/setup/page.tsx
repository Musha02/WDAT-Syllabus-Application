import Link from "next/link";
import Navbar from "@/components/navbar";
import Balancer from "react-wrap-balancer";

export default function Setup() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <section className="mx-auto flex max-w-7xl  flex-col-reverse gap-2  mt-[-100px] px-4  pb-12 transition-all md:flex-row md:gap-4">
        {/* left div */}
        <div className=" flex flex-col items-center  gap-6 pt-2 md:w-1/2 md:items-start md:gap-10 md:pt-32 md:text-left">
          <Balancer>
            <h1 className="text-xl font-semibold md:text-4xl">
              2. How To Setup Stripe Payments in NextJS 14
            </h1>
            <br></br>           
            <p className="text-xl text-neutral-400 md:text-xl">
                Setting up Stripe payments in a Next.js 14 application involves several steps:  <br></br>
                1. Create a Stripe Account: If you haven&#39;t already, <br></br> sign up for a Stripe account at <Link href = "https://stripe.com/"> <b>Here</b></Link><br></br>
                2. Install Stripe SDK: <br></br>
                3. Get Stripe API Keys: <br></br>
                4. Initialize Stripe <br></br>
                5. Client-side Integration <br></br>
                6. Server-side Integration <br></br>
                7. Handle Payments <br></br>
                8. Test Payments <br></br>
            </p>
          </Balancer>
          
          <div className="flex justify-center mt-4">
          < Link href= "/"  className="border-black w-fit rounded-xl border-2 bg-black px-4 py-2 text-white transition-all hover:border-black hover:bg-black hover:bg-transparent hover:text-black/90 mr-4">
             Home
            </Link>
            <Link href="/stripepayments/introduction" className="border-black w-fit rounded-xl border-2 bg-black px-4 py-2 text-white transition-all hover:border-black hover:bg-black hover:bg-transparent hover:text-black/90">
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
                src="https://www.youtube.com/embed/2JDKquIMJws" 
                title="Setup Stripe Payments" 
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
