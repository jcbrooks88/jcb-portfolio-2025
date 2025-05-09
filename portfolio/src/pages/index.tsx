import Layout from "@/components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <main className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-10 sm:px-6">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-center">
          Jeffery Brooks
        </h1>
        <p className="text-base sm:text-lg text-gray-700 mb-6 text-center max-w-xl">
          Junior Software Developer with a nursing background, passionate about building responsive, accessible, and user-friendly full-stack applications.
        </p>
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 w-full max-w-xs sm:max-w-none items-center justify-center">
          <Link
            href="/projects"
            className="w-full sm:w-auto text-center bg-gray-100 border px-4 py-2 rounded-full hover:bg-gray-200"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto text-center bg-gray-100 border px-4 py-2 rounded-full hover:bg-gray-200"
          >
            Contact Me
          </Link>
        </div>
      </main>
    </Layout>
  );
}
