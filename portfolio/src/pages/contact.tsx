// pages/contact.tsx
import Layout from "@/components/Layout";

export default function Contact() {
  return (
    <Layout>
      <main className="min-h-screen bg-white p-6 md:p-12">
        <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
        <p className="text-gray-700 mb-6 max-w-xl">
          I&apos;m currently open to opportunities and collaborations. Feel free to reach out to me!
        </p>
        <ul className="text-blue-600 space-y-2">
          <li>
            <a href="mailto:jcbrooks.tech@gmail.com" className="hover:underline">
              jcbrooks.tech@gmail.com
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jcbrooks88/" target="_blank" className="hover:underline">
              LinkedIn Profile
            </a>
          </li>
          <li>
            <a href="https://github.com/jcbrooks88" target="_blank" className="hover:underline">
              GitHub Profile
            </a>
          </li>
        </ul>
      </main>
    </Layout>
  );
}