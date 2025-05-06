import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Wellness Rounds NC",
    techStack: ["React + Vite + Apollo Client", "Node.js", "MongoDB + Mongoose", "GraphQL", "Express + Apollo Server", "Typescript"],
    description:
      "A platform for safe space discussions among healthcare professionals.",
    github: "https://github.com/jcbrooks88/WELLNESSROUNDS-NC",
    demo: "https://wellnessrounds-nc.vercel.app",
    image: "/assets/JCB.jpeg",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white p-6 md:p-12">
      <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-sm text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, i) => (
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
                  href={project.github}
                  className="text-blue-600 hover:underline"
                  target="_blank"
                >
                  GitHub
                </Link>
                <Link
                  href={project.demo}
                  className="text-green-600 hover:underline"
                  target="_blank"
                >
                  Live Demo
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
