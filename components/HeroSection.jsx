import { ArrowBigRight } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-blue-600 text-white py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-4">
          Bring Change Home
        </h1>
        <a className="text-xl font-medium bg-blue-500 rounded-3xl p-4 inline-flex items-center group" href="#">
          Let our stories of hope inspire you. Take me there
          <span className="material-icons ml-2 transform group-hover:translate-x-1 transition-transform">
            <ArrowBigRight/>
          </span>
        </a>
      </div>

      <div className="max-w-4xl mx-auto mt-12">
        <Image
          width={100}
          height={100}
          quality={100}
          src="/hero.png"
          alt="Volunteers distributing food to people in need"
          className="w-full h-auto rounded-lg shadow-2xl"
        />
      </div>
    </section>
  );
}
