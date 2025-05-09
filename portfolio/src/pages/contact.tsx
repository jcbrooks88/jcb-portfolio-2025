import Layout from "@/components/Layout";

const links = [
  {
    href: "mailto:jcbrooks.tech@gmail.com",
    title: "Email Me",
    description: "Reach out to me via email.",
  },
  {
    href: "https://www.linkedin.com/in/jcbrooks88/",
    title: "LinkedIn Profile",
    description: "Connect with me on LinkedIn to see my professional background.",
  },
  {
    href: "https://github.com/jcbrooks88",
    title: "GitHub Profile",
    description: "Explore my open-source projects and contributions.",
  },
];

export default function Contact() {
  return (
    <Layout>
      <main className="min-h-screen flex flex-col items-center justify-center rounded-2xl shadow-xl text-center bg-white p-6 md:p-12">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-14 tracking-tight leading-tight sm:leading-snug text-balance bg-clip-text text-transparent bg-gradient-to-r from-orange to-burgundy drop-shadow-sm">
        Contact Me
      </h1>
        <h2 className="text-gray-700 mb-8 max-w-xl">
          I&apos;m currently open to opportunities and collaborations. 
          <br />
          Feel free to reach out to me!
        </h2>
        <div className="grid gap-4 md:grid-cols-2 w-full max-w-4xl">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              className="block p-4 border border-gray-200 rounded-2xl shadow hover:shadow-lg transition duration-300 hover:bg-gray-50"
            >
              <h2 className="text-xl font-semibold text-orange">{link.title}</h2>
              <p className="text-gray-600 mt-2">{link.description}</p>
            </a>
          ))}
        </div>
      </main>
    </Layout>
  );
}
