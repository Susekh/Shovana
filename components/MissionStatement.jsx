import { Users, Sparkles, HandHelping, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function MissionSection() {
  return (
    <section className="py-20 bg-white px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800">
          Our mission is to inspire{" "}
          <Sparkles className="inline-block h-10 w-10 text-blue-600 mx-2" />
          empower{" "}
          <HandHelping className="inline-block h-10 w-10 text-blue-600 mx-2" />
          and connect people{" "}
          <Users className="inline-block h-10 w-10 text-blue-600 mx-2" />
          to change their world.{" "}
          <span className="inline-block">
            <Link
              href="#about"
              className="text-blue-600 inline-flex items-center group ml-4 text-lg"
            >
              About us
              <ArrowRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </span>
        </h2>
      </div>
    </section>
  );
}
