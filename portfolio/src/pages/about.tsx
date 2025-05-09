// pages/about.tsx
import Image from "next/image";
import Layout from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      <main className="min-h-screen rounded-2xl shadow-xl bg-white px-4 py-6 sm:px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-14 tracking-tight leading-tight sm:leading-snug text-balance bg-clip-text text-transparent bg-gradient-to-r from-orange to-burgundy drop-shadow-sm">
            About Me
          </h1>

          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            <div className="flex-shrink-0 w-full md:w-1/3">
              <div className="relative w-60 h-60 mx-auto md:mx-0 rounded-full overflow-hidden shadow-md border-4 border-orange/30">
                <Image
                  src="/assets/portrait.jpeg"
                  alt="Portrait of Jeffery"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
            </div>

            <div className="md:w-2/3 text-gray-700 leading-relaxed text-lg space-y-6">
              <p>
                <span className="text-xl font-semibold text-burgundy block mb-2">
                  Hi, I’m Jeffery 👋🏾
                </span>
                I&#39;m a Junior Software Developer with a background in nursing and a passion for building web applications that make a difference.
              </p>

              <p>
                I recently completed an intensive full-stack bootcamp, gaining hands-on experience in modern technologies like <strong>React</strong>, <strong>TypeScript</strong>, <strong>Node.js</strong>, <strong>GraphQL</strong>, and <strong>MongoDB</strong>.
              </p>

              <p>
                I enjoy solving problems, collaborating with others, and continuously learning. My transition from healthcare to tech gives me a unique perspective on empathy-driven design and user-centric development.
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
