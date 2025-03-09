import type { AppProps } from "next/app";
import Image from "next/image";
import ProfilePicture from "../../../../public/profile_pic.jpg";
import { ArrowDown, Linkedin, Github } from "lucide-react";

export default function Hero() {
  const scrolltoabout = () => {
    const aboutsection = document.getElementById("about");
    if (aboutsection) {
      window.scrollTo({
        top: aboutsection.offsetTop - 70,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <section
        id="home"
        className="w-full min-h-screen flex items-center pt-16"
      >
        <div className="container mx-auto px-6 flex md:flex-row flex-col md:py-24 items-center py-12">
        
          {/* Description Section */}
          <div className="md:w-1/2 md:pr-10 ">
            <h1 className="md:text-5xl text-4xl lg:text-6xl font-semibold leading-tight mb-4">
              <span className="text-subhead  md:text-2xl block text-xl mb-2">
                Hello,I'm
              </span>
              <span className="text-header  ">Nigee Hettige</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-subhead font-light mb-6">
              Computer Science Undergraduate
            </h2>
            <p className="text-desc text-lg mb-8 max-w-lg">
              Passionate about creating intuitive and efficient software
              solutions. Exploring the intersection of technology, design, and
              human experience.
            </p>
            <div className="flex flex-row space-x-4 mb-6">
              <a href="https://github.com/NigeeHettige" target="blank" className="rounded-full p-3 bg-github text-background transition-colors duration-300 hover:bg-gray-700"> <Github size={25}/></a>
              <a href="https://www.linkedin.com/in/nigee-hettige/" target="blank" className="rounded-full p-3 bg-linkedin text-background transition-colors duration-300 hover:bg-blue-500"> <Linkedin size={25}/></a>
            </div>
            <button className="flex group items-center hover:text-indigo-700 text-header transition-colors duration-300 mb-6 cursor-pointer">
               
                Learn more about me
                <ArrowDown size={18} className="ml-2 group-hover:translate-y-1 transition-transform duration-300 cursor-pointer"/>
            </button>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-header rounded-lg blur opacity-20"></div>
            <div className="relative bg-white p-2 rounded-lg shadow-lg overflow-hidden">
              <Image
               src={ProfilePicture} width={700}height={600}
                alt="nigee_hettige"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
}
