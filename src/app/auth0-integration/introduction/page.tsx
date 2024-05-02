import Link from "next/link";
import Navbar from "@/components/navbar";
import Balancer from "react-wrap-balancer";

export default function Introduction() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <section className="mx-auto flex max-w-7xl  flex-col-reverse gap-2  mt-[-100px] px-4  pb-12 transition-all md:flex-row md:gap-4">
        {/* left div */}
        <div className=" flex flex-col items-center  gap-6 pt-2 md:w-1/2 md:items-start md:gap-10 md:pt-32 md:text-left">
          <Balancer>
            <h1 className="text-xl font-semibold md:text-4xl">
              1. Introduction
            </h1>
            <br></br>
            <h2 className="text-xl md:text-2xl">What is Auth0?</h2>
           
            <p className="text-xl text-neutral-400 md:text-xl">
            Auth0 is a popular authentication and authorization platform used by developers to add authentication and authorization services to their applications. It provides a comprehensive set of tools and APIs that enable developers to easily implement secure authentication methods, including Single Sign-On (SSO), Multi-Factor Authentication (MFA), and social login integrations.
            key aspects of Auth0 and authentication basics:<br></br>
            - Authentication: Authentication is the process of verifying the identity of users attempting to access an application or service. Auth0 simplifies this process by providing various authentication methods, such as username/password authentication and social login (e.g., using Google, Facebook, or Twitter accounts).<br></br>
            - Authorization: Authorization determines what actions users are allowed to perform within an application or service after they have been authenticated. Auth0 helps developers implement fine-grained access control policies to manage user permissions effectively.<br></br>
            </p>
          </Balancer>
          
          <div className="flex justify-center mt-4">
            <Link href= "/auth0-integration"  className="border-black w-fit rounded-xl border-2 bg-black px-4 py-2 text-white transition-all hover:border-black hover:bg-black hover:bg-transparent hover:text-black/90 mr-4">
             Contents Menu
            </Link>
            <Link href="/auth0-integration/integration" className="border-black w-fit rounded-xl border-2 bg-black px-4 py-2 text-white transition-all hover:border-black hover:bg-black hover:bg-transparent hover:text-black/90">
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
                src="https://www.youtube.com/embed/10ZAdZ9rgHE"
                title="Auth0 Introduction" 
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
