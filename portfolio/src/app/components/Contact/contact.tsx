import type { AppProps } from "next/app";

export default function Contact() {
  return (
    <>
      <section id="contact" className="w-full min-h-screen py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-github font-bold mb-4">
              Get In Touch
            </h2>
            <div className="bg-header h-1 w-20 mx-auto" />
            <p className="mt-4 text-subhead max-w-xl mx-auto ">
              Have a question or want to work together? Feel free to reach out!
            </p>
          
          </div>
        </div>
      </section>
    </>
  );
}
