import Link from "next/link";
import Navbar from "@/components/navbar";
import Balancer from "react-wrap-balancer";

export default function StripePayments() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <section className="mx-auto flex max-w-7xl  flex-col-reverse gap-2  px-4  pb-12 transition-all md:flex-row md:gap-4">
        {/* left div */}
        <div className=" flex flex-col items-center  gap-6 pt-2 md:w-1/2 md:items-start md:gap-10 md:pt-32 md:text-left">
          <Balancer>
            <h1 className="text-xl font-semibold md:text-5xl">
            Integration of Stripe payments 
            </h1>
          </Balancer>
          <Balancer>
            <h2 className=" text-neutral-400 md:max-w-[700px] md:text-2xl hover:text-black/90">1. <Link href="/stripepayments/introduction">Introduction to Stripe</Link></h2>
            <h2 className=" text-neutral-400 md:max-w-[700px] md:text-2xl hover:text-black/90">2. <Link href="/stripepayments/setup">How To Setup Stripe Payments in NextJS 14</Link></h2>
           </Balancer>
           <div className="flex justify-center mt-4">         
              <Link href="https://docs.stripe.com/payments?payments=popular" className="border-black w-fit rounded-xl border-2 bg-black px-4 py-2 text-white transition-all hover:border-black hover:bg-black hover:bg-transparent hover:text-black/90">
                Learn more
              </Link>        
            </div>
          
          </div>

        </section>
      </div>
    
    
  );

}

    


 