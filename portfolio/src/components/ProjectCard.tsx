import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  techStack: string[];
  description: string;
  github: string;
  demo: string;
  image: string;
}

export default function ProjectCard({
  title,
  techStack,
  description,
  github,
  demo,
  image,
}: ProjectCardProps) {
  return (
    <div className="bg-background rounded-2xl shadow-xl hover:shadow-2xl transform transition duration-300 hover:scale-[1.02] border border-gray-200 overflow-hidden">
      <Image
        src={image}
        alt={title}
        width={600}
        height={400}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2 text-burgundy tracking-wide">{title}</h2>
        <p className="text-sm text-gray-700 mb-4 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, i) => (
            <span
              key={i}
              className="bg-white border border-teal text-teal px-3 py-1 rounded-full text-xs font-medium shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center text-sm font-medium">
          <Link
            href={github}
            className="text-orange hover:text-teal transition-colors duration-200"
            target="_blank"
          >
            GitHub
          </Link>
          <Link
            href={demo}
            className="text-orange hover:text-teal transition-colors duration-200"
            target="_blank"
          >
            Live Demo
          </Link>
        </div>
      </div>
    </div>
  );
}
