// pages/about.tsx
import Layout from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      <main className="min-h-screen rounded-2xl shadow-xl bg-white px-4 py-6 sm:px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h1>
          <p className="text-gray-700 leading-relaxed">
            I&#39;m a Junior Software Developer with a background in nursing and a passion for building web applications that make a difference. I recently completed an intensive full-stack bootcamp, gaining hands-on experience in modern technologies like React, TypeScript, Node.js, GraphQL, and MongoDB.
            <br /><br />
            I enjoy solving problems, collaborating with others, and continuously learning. My transition from healthcare to tech gives me a unique perspective on empathy-driven design and user-centric development.
          </p>
        </div>
      </main>
    </Layout>
  );
}
