import type { AppProps } from "next/app";
interface CardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}
export default function Card({ icon: Icon, title, description }: CardProps) {
  return (
    <>
      <div className="md:w-1/3 bg-white p-8 rounded-lg shadow-md transform transition duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div className="flex flex-row items-center mb-6 gap-3">
          <div className="rounded-full bg-about_button p-3 text-header">
            <Icon />
          </div>
          <h3 className="text-xl text-github font-semibold">{title}</h3>
        </div>
        <p className="leading-relaxed text-about_desc  ">{description}</p>
      </div>
    </>
  );
}
