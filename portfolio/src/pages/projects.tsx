// pages/projects.tsx
import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import { wellness } from "@/data/WRNC";

export default function ProjectsPage() {
  return (
    <Layout>
      <main className="min-h-screen bg-white p-6 md:p-12">
        <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {wellness.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </main>
    </Layout>
  );
}
