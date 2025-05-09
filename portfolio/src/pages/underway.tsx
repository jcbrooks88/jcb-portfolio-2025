import Layout from "@/components/Layout";
import { motion } from "framer-motion";

export default function Underway() {
  const timelineVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Layout>
      <main className="min-h-screen bg-white flex flex-col items-center rounded-2xl shadow-xl px-4 py-10 sm:px-6">
        <section className="w-full max-w-2xl">

          <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-10">Coming 🔜</h1>

          <div className="relative border-l-2 border-gray-300 pl-6 space-y-16">

            {/* Currently Working On */}
            <motion.div
              className="group relative"
              variants={timelineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="absolute -left-4 top-0 w-3 h-3 bg-orange rounded-full group-hover:scale-125 transition-transform"></div>
              <h2 className="text-xl font-semibold text-orange mb-2">Currently Working On</h2>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Building a <strong>full-stack healthcare dashboard</strong> app — HIPAA-compliant style CRUD features and role-based access</li>
                <li>Implementing <strong>GraphQL advanced patterns</strong> — pagination, nested queries, and Apollo cache management</li>
                <li>Enhancing <strong>Cypress component and E2E tests</strong> in existing projects to strengthen automated testing skills</li>
                <li>Refactoring projects with <strong>TypeScript best practices</strong> — strict typing, reusable generics, and safer component props</li>
              </ul>
            </motion.div>

            {/* Next in Line */}
            <motion.div
              className="group relative"
              variants={timelineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              <div className="absolute -left-4 top-0 w-3 h-3 bg-teal rounded-full group-hover:scale-125 transition-transform"></div>
              <h2 className="text-xl font-semibold text-teal mb-2">Next in Line</h2>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Deploying full-stack projects using <strong>Docker</strong> and <strong>Render / Railway</strong> for production-ready experience</li>
                <li>Integrating <strong>authentication best practices</strong> — OAuth, refresh tokens, secure cookies</li>
                <li>Contributing to an <strong>open-source project</strong> (healthcare or education focused) to build collaboration and community experience</li>
                <li>Learning <strong>Next.js</strong> (App Router + Server Components) to expand React ecosystem knowledge</li>
              </ul>
            </motion.div>

            {/* Future Plans */}
            <motion.div
              className="group relative"
              variants={timelineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <div className="absolute -left-4 top-0 w-3 h-3 bg-burgundy rounded-full group-hover:scale-125 transition-transform"></div>
              <h2 className="text-xl font-semibold text-burgundy mb-2">Future Plans</h2>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Obtaining <strong>AWS Certified Cloud Practitioner</strong> or <strong>Azure Fundamentals</strong> to strengthen cloud deployment knowledge</li>
                <li>Exploring <strong>AI integrations</strong> — OpenAI API, Hugging Face models, or medical data analysis tools</li>
                <li>Learning <strong>mobile development basics</strong> with React Native or Expo to diversify application platforms</li>
                <li>Designing and launching a <strong>personal healthcare SaaS project</strong> as a long-term capstone portfolio piece</li>
              </ul>
            </motion.div>

          </div>
        </section>
      </main>
    </Layout>
  );
}
