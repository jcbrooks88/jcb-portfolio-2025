import Layout from "@/components/Layout";

    export default function Resume() {
      const googleDriveUrl =
        "https://drive.google.com/file/d/11M7eyg9aeOSUYLACokD38seLibTrT_lE/preview";
      const githubDownloadUrl =
        "https://github.com/jcbrooks88/portfolio-assets.git";
    
      return (
        <Layout>
          <main className="min-h-screen bg-white flex flex-col items-center justify-center rounded-2xl shadow-xl px-4 py-10 sm:px-6">
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">Resume</h1>
    
            <div className="w-full max-w-4xl h-[80vh]">
              <iframe
                src={googleDriveUrl}
                className="w-full h-full border border-gray-300 rounded-lg"
                title="Jeffery Brooks Resume"
                allow="autoplay"
              ></iframe>
            </div>
    
            <a
              href={githubDownloadUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-grayDark hover:bg-gray-200 text-white font-semibold py-2 px-6 rounded-lg shadow transition duration-200"
            >
              Download PDF
            </a>
          </main>
        </Layout>
      );
    }
    
