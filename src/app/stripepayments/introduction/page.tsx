import Link from "next/link";
import Navbar from "@/components/navbar";
import Balancer from "react-wrap-balancer";

export default function Introduction() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <section className="mx-auto flex max-w-7xl  flex-col-reverse gap-2  mt-[-100px] px-4  pb-12 transition-all md:flex-row md:gap-4">
        {/* left div */}
        <div className=" flex flex-col items-center gap-6 pt-2 md:w-1/2 md:items-start md:gap-10 md:pt-32 md:text-left">
          <Balancer>
            <h1 className="text-xl font-semibold md:text-4xl">
              1. Introduction to Stripe
            </h1>
            <br></br>           
            <p className="text-xl text-neutral-400 md:text-xl">
            Stripe is an online payment processing platform that allows businesses to accept payments over the internet. It provides a suite of APIs (Application Programming Interfaces) and tools that enable businesses to handle transactions, manage subscriptions, and perform various financial operations securely and efficiently.<br></br>
            With Stripe, businesses can accept payments from major credit and debit cards, as well as digital wallets like Apple Pay and Google Pay. It supports multiple currencies and payment methods, making it suitable for businesses operating globally.<br></br><br></br>
            Stripe offers features such as built-in fraud prevention, customizable checkout experiences, subscription management, invoicing, and support for marketplace and platform businesses. Its developer-friendly APIs and extensive documentation make it easy for businesses of all sizes to integrate payment processing into their websites and applications.
            </p>
          </Balancer>
          
          <div className="flex justify-center mt-4">
            <Link href= "/stripepayments"  className="border-black w-fit rounded-xl border-2 bg-black px-4 py-2 text-white transition-all hover:border-black hover:bg-black hover:bg-transparent hover:text-black/90 mr-4">
              Contents Menu
            </Link>
            <Link href="/stripepayments/setup" className="border-black w-fit rounded-xl border-2 bg-black px-4 py-2 text-white transition-all hover:border-black hover:bg-black hover:bg-transparent hover:text-black/90">
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
                src="https://www.youtube.com/embed/uWbj8QgEGcc"
                title="Stripe Introduction" 
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
