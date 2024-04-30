import Link from "next/link";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Image1 from "@/assets/images/image1.png";
import Image2 from "@/assets/images/image2.png";
import Image3 from "@/assets/images/image3.png";
import Image4 from "@/assets/images/image4.png";

export default function Introduction() {
  return (
    <div className=" h-full w-full">
      <Navbar />
      <section className="mx-auto flex max-w-7xl  flex-col-reverse gap-2  px-4  pb-12 transition-all md:flex-row md:gap-4">

          {/* Image grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
         
          <Link href = "/nextjs" >
            <Image src = {Image1} alt="Image 1" className="w-full h-full object-cover border border-black border-2 rounded-3xl" />
          </Link>
         
          <Link href = "/typescript" >
            <Image src = {Image2} alt="Image 2" className="w-full h-full object-cover border border-black border-2 rounded-3xl" />
          </Link>

          <Link href = "/auth0-integration" >
            <Image src = {Image3} alt="Image 3" className="w-full h-full  border border-black border-2 rounded-3xl" />
          </Link>

          <Link href = "/stripepayments" >
            <Image src = {Image4} alt="Image 4" className="w-full h-full object-cover border border-black border-2 rounded-3xl" />
          </Link>
          
        </div>
      </section>
    </div>

  );

}
