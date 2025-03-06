import type { AppProps } from "next/app";
import { User, BookOpen, Award } from "lucide-react";
import Card from "./card/card";
export default function About() {
  const details = [
    {
      icon: User,
      title: "Who I Am",
      description:
        "I'm a Computer Science undergraduate with a passion for software development and problem-solving. I enjoy creating elegant solutions that balance technical requirements with user experience. When I'm not coding, you can find me watching movies, reading books, or experimenting with new recipes.",
    },
    {
      icon: BookOpen,
      title: "My Journey",
      description:
        "My interest in technology began when I started learning ICT at age 17 as my A/L subject. Since then, I've been on a continuous learning path through formal education and self-directed projects. I'm currently pursuing my Bachelor's degree in Computer Science with a focus on machine learning and web development.",
    },
    {
      icon: Award,
      title: "My Goals",
      description:
        "I aim to create technology that makes a positive impact on people's lives. My goal is to continually expand my knowledge and skill set while collaborating with like-minded professionals. I'm particularly interested in contributing to real world projects and eventually leading innovative tech initiatives.",
    },
  ];
  return (
    <>
      <section id="about" className="w-full  py-20 ">
        <div className="container mx-auto px-6">
          <div className="items-center text-center mb-16">
            <h2 className="font-bold text-github text-3xl md:text-4xl mb-4">
              About Me
            </h2>
            <div className="h-1 bg-header w-20 mx-auto" />
          </div>
          <div className="flex md:flex-row flex-col gap-10">
            {details.map((card_detail, index) => (
              <Card
                key={index}
                icon={card_detail.icon}
                title={card_detail.title}
                description={card_detail.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
