import Layout from "@/components/Layout";
import { Download } from "lucide-react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function Resume() {
  const googleDriveUrl =
    "https://drive.google.com/file/d/11M7eyg9aeOSUYLACokD38seLibTrT_lE/preview";
  const directPdfUrl =
    "https://drive.google.com/uc?export=download&id=11M7eyg9aeOSUYLACokD38seLibTrT_lE";

  const handleDownloadClick = () => {
    console.log("Resume PDF downloaded");
    toast.success("Thanks for downloading my resume!");
  };

  return (
    <Layout>
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col items-center justify-start px-4 py-16 sm:px-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-14 tracking-tight leading-tight sm:leading-snug text-balance bg-clip-text text-transparent bg-gradient-to-r from-orange to-burgundy drop-shadow-sm">
            My Resume
        </h1>
        <p className="text-lg text-gray-600 mb-10 text-center max-w-2xl">
          Explore my experience, skills, and education. You can view the document below or download a copy to keep.
        </p>

        <motion.div
          className="w-full max-w-4xl h-[75vh] rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-white"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <iframe
            src={googleDriveUrl}
            className="w-full h-full"
            title="Jeffery Brooks Resume"
            allow="autoplay"
          ></iframe>
        </motion.div>

        <a
          href={directPdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleDownloadClick}
          className="mt-8 inline-flex items-center gap-2 bg-teal hover:bg-gray-400 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition-transform duration-200 hover:scale-105"
        >
          <Download className="w-5 h-5" />
          Download Resume (PDF)
        </a>
      </main>
    </Layout>
  );
}
