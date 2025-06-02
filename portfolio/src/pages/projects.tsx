import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import { wellness } from "@/projects/WRNC";
import { cars } from "@/projects/UCF";
import { schedule } from "@/projects/NSA";

export default function ProjectsPage() {
  return (
    <Layout>
      <main className="min-h-screen bg-white/90 rounded-2xl shadow-xl p-6 md:p-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-14 tracking-tight leading-tight sm:leading-snug text-balance bg-clip-text text-transparent bg-gradient-to-r from-orange to-burgundy drop-shadow-sm">
          My Projects
        </h1>

        {/* Wrap both sections in a grid container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

        <section className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,_minmax(320px,_1fr))] gap-4">
            {schedule.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </section>

          <section className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,_minmax(320px,_1fr))] gap-4">
            {wellness.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </section>

          <section className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,_minmax(320px,_1fr))] gap-4">
            {cars.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </section>
        </div>
      </main>
    </Layout>
  );
}
