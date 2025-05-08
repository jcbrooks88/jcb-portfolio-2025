// components/ProjectCard.tsx
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
    <div className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden">
      <Image
        src={image}
        alt={title}
        width={600}
        height={400}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-sm text-gray-700 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, i) => (
            <span
              key={i}
              className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between text-sm">
          <Link
            href={github}
            className="text-blue-600 hover:underline"
            target="_blank"
          >
            GitHub
          </Link>
          <Link
            href={demo}
            className="text-green-600 hover:underline"
            target="_blank"
          >
            Live Demo
          </Link>
        </div>
      </div>
    </div>
  );
}
