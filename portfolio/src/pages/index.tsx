import Layout from "@/components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <main className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
        <h1 className="text-5xl font-bold mb-4">Jeffery Brooks</h1>
        <p className="text-lg text-gray-700 mb-6 text-center max-w-xl">
          Junior Software Developer with a nursing background, passionate about building responsive, accessible, and user-friendly full-stack applications.
        </p>
        <div className="flex space-x-4">
          <Link
            href="/projects"
            className="bg-accent text-white px-4 py-2 rounded-full hover:bg-blue-700"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="bg-gray-100 border px-4 py-2 rounded-full hover:bg-gray-200"
          >
            Contact Me
          </Link>
        </div>
      </main>
    </Layout>
  );
}

