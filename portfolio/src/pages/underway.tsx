import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { FiTool, FiTrendingUp, FiTarget } from "react-icons/fi";

export default function Underway() {
  const timelineVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const cardBaseClasses =
    "bg-white/90 rounded-2xl border shadow-md hover:shadow-xl transition transform hover:-translate-y-1 p-6 duration-200";

  const markerBase = "absolute left-[-1.15rem] top-2 w-3 h-3 rounded-full shadow";

  return (
    <Layout>
      <main className="min-h-screen flex flex-col bg-background/40 border-gray-200 items-center rounded-2xl shadow-2xl px-6 py-14 sm:px-8">
        <section className="w-full max-w-4xl">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={timelineVariants}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-extrabold text-center mb-14 tracking-tight leading-tight sm:leading-snug text-balance bg-clip-text text-transparent bg-gradient-to-r from-orange to-burgundy drop-shadow-sm"
          >
            What&#39;s Next
          </motion.h1>

          <div className="relative border-l-2 border-gray-200 pl-8 space-y-20">
            <motion.div
              className="group relative"
              variants={timelineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className={`${markerBase} bg-orange`}></span>
              <div className={`${cardBaseClasses} border-orange bg-gray-50`}>
                <h2 className="flex items-center text-2xl font-semibold text-orange mb-4 gap-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-orange-100 text-orange-600 rounded-full">
                    <FiTool className="w-5 h-5" />
                  </span>
                  Currently Building
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-800 leading-relaxed tracking-wide text-[15px] font-medium">
                  <li>Developing a <strong>full-stack healthcare dashboard</strong> featuring HIPAA-conscious CRUD operations and role-based access control</li>
                  <li>Implementing <strong>advanced GraphQL patterns</strong> including pagination, nested queries, and Apollo cache optimization</li>
                  <li>Enhancing project robustness with <strong>Cypress-driven component and end-to-end testing</strong></li>
                  <li>Refactoring applications with <strong>TypeScript best practices</strong>: strict typing, reusable generics, and scalable component interfaces</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              className="group relative"
              variants={timelineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              <span className={`${markerBase} bg-teal`}></span>
              <div className={`${cardBaseClasses} border-teal bg-gray-50`}>
                <h2 className="flex items-center text-2xl font-semibold text-teal mb-4 gap-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-teal/10 text-teal rounded-full">
                    <FiTrendingUp className="w-5 h-5" />
                  </span>
                  Upcoming Initiatives
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-800 leading-relaxed tracking-wide text-[15px] font-medium">
                  <li>Deploying production-grade applications using <strong>Docker</strong> and platforms like <strong>Render</strong> or <strong>Railway</strong></li>
                  <li>Integrating modern <strong>authentication strategies</strong> such as OAuth, refresh tokens, and secure cookies</li>
                  <li>Contributing to <strong>open-source projects</strong> with a focus on healthcare and education to deepen collaboration experience</li>
                  <li>Expanding expertise in the React ecosystem by mastering <strong>Next.js (App Router & Server Components)</strong></li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              className="group relative"
              variants={timelineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <span className={`${markerBase} bg-burgundy`}></span>
              <div className={`${cardBaseClasses} border-burgundy bg-gray-50`}>
                <h2 className="flex items-center text-2xl font-semibold text-burgundy mb-4 gap-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-burgundy/10 text-burgundy rounded-full">
                    <FiTarget className="w-5 h-5" />
                  </span>
                  Future Aspirations
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-800 leading-relaxed tracking-wide text-[15px] font-medium">
                  <li>Earning <strong>AWS Certified Cloud Practitioner</strong> or <strong>Microsoft Azure Fundamentals</strong> credentials</li>
                  <li>Exploring <strong>AI integrations</strong> using OpenAI APIs, Hugging Face models, and healthcare data analytics</li>
                  <li>Broadening platform reach by learning <strong>mobile development</strong> with React Native and Expo</li>
                  <li>Designing and launching a <strong>personal healthcare SaaS product</strong> as a capstone portfolio initiative</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
