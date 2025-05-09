import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { FiTool, FiTrendingUp, FiTarget } from "react-icons/fi";

export default function Underway() {
  const timelineVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const cardBaseClasses =
    "bg-white rounded-2xl border shadow-sm p-6 transition transform hover:shadow-lg hover:scale-[1.03] duration-200";

  return (
    <Layout>
      <main className="min-h-screen bg-gray-50 flex flex-col items-center rounded-2xl shadow-2xl px-6 py-14 sm:px-8">
        <section className="w-full max-w-3xl">

          <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-grayDark mb-14 tracking-tight">
            What&#39;s Next 🚀
          </h1>

          <div className="relative border-l-2 border-gray-200 pl-8 space-y-20">

            {/* Currently Working On */}
            <motion.div
              className="group relative"
              variants={timelineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >

              <div className={`${cardBaseClasses} border-orange bg-gray-100`}>
                <h2 className="flex items-center text-2xl font-semibold text-orange mb-4 gap-2">
                  <FiTool className="w-6 h-6 text-orange-500" /> Currently Building
                </h2>
                <ul className="list-disc list-inside space-y-2 text-grayDark leading-relaxed">
                  <li>Developing a <strong>full-stack healthcare dashboard</strong> featuring HIPAA-conscious CRUD operations and role-based access control</li>
                  <li>Implementing <strong>advanced GraphQL patterns</strong> including pagination, nested queries, and Apollo cache optimization</li>
                  <li>Enhancing project robustness with <strong>Cypress-driven component and end-to-end testing</strong></li>
                  <li>Refactoring applications with <strong>TypeScript best practices</strong>: strict typing, reusable generics, and scalable component interfaces</li>
                </ul>
              </div>
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

              <div className={`${cardBaseClasses} border-teal bg-gray-100`}>
                <h2 className="flex items-center text-2xl font-semibold text-teal mb-4 gap-2">
                  <FiTrendingUp className="w-6 h-6 text-teal" /> Upcoming Initiatives
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-800 leading-relaxed">
                  <li>Deploying production-grade applications using <strong>Docker</strong> and platforms like <strong>Render</strong> or <strong>Railway</strong></li>
                  <li>Integrating modern <strong>authentication strategies</strong> such as OAuth, refresh tokens, and secure cookies</li>
                  <li>Contributing to <strong>open-source projects</strong> with a focus on healthcare and education to deepen collaboration experience</li>
                  <li>Expanding expertise in the React ecosystem by mastering <strong>Next.js (App Router & Server Components)</strong></li>
                </ul>
              </div>
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

              <div className={`${cardBaseClasses} border-burgundy bg-gray-100`}>
                <h2 className="flex items-center text-2xl font-semibold text-burgundy mb-4 gap-2">
                  <FiTarget className="w-6 h-6 text-burgundy" /> Future Aspirations
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-800 leading-relaxed">
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
