// pages/projects.tsx
import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import { wellness } from "@/data/WRNC";

export default function ProjectsPage() {
  return (
    <Layout>
      <main className="min-h-screen bg-white rounded-2xl shadow-xl p-6 md:p-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-14 tracking-tight leading-tight sm:leading-snug text-balance bg-clip-text text-transparent bg-gradient-to-r from-orange to-burgundy drop-shadow-sm">
          My Projects
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {wellness.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </main>
    </Layout>
  );
}
