"use client";
import { link } from "fs";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "../../../../public/logo.png";
import { Menu, X } from "lucide-react";
import Link from "next/link";

interface NavbarProps {
  activeSession: string;
}

export default function NavBar({ activeSession }: NavbarProps) {
  const tabs = [
    {
      name: "Home",
      id: "home",
    },
    {
      name: "About",
      id: "about",
    },
    {
      name: "Projects",
      id: "projects",
    },
    {
      name: "Skills",
      id: "skills",
    },
    {
      name: "Contact",
      id: "contact",
    },
  ];

  const [isscrolled, setScrolled] = useState(false);
  const [ismenuopen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollSection = (sectionid: string) => {
    const element = document.getElementById(sectionid);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70,
        behavior: "smooth",
      });
    }
    setMenuOpen(false);
  };

  return (
    <div>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300  ${
          isscrolled ? "bg-background shadow-md py-6" : "bg-transparent py-6"
        }`}

        
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Image src={Logo} alt="logo_image" id="home"  />

          <nav className="space-x-8 hidden md:flex">
            {tabs.map((link, index) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`text-xl ${
                  activeSession == link.id
                    ? "font-bold text-header"
                    : "font-light text-slug hover:text-header"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollSection(link.id);
                }}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <button
            className="md:hidden text-slug focus:outline-none"
            onClick={() => {
              setMenuOpen(!ismenuopen);
            }}
          >
            {ismenuopen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
        </div>
        {ismenuopen && (
            <div className="md:hidden  bg-white shadow-lg ">
              <div className="container mx-auto text-slug space-y-4 px-6 py-4 flex-col flex">
                {tabs.map((link, index) => (
                  <a
                    key={index}
                    href={`#${link.id}`}
                    
                    className={`text-xl ${
                      activeSession == link.id
                        ? "font-bold text-header"
                        : "font-light text-slug hover:text-header"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollSection(link.id);
                    }}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          )}
      </header>
    </div>
  );
}
