import React, { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [error, setError] = useState(null);
  const [copyButtonText, setCopyButtonText] = useState("Copy");

  const handleChange = (e) => {
    setText(e.target.value);
    setError(null);
  };

  const handleCopy = async () => {
    if (!result || loading) return;

    try {
      await navigator.clipboard.writeText(result);
      setCopyButtonText("Copied! ✅");
      setTimeout(() => setCopyButtonText("Copy"), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
      setCopyButtonText("Failed");
    }
  };

  const handleApiCall = async () => {
    if (!text.trim()) {
      setError("Please enter some text to correct.");
      return;
    }
    
    const prompt = "Correct the following text and provide only the final, corrected version as the output. Do not add any introductory phrases like 'Here is the corrected text:'. Just provide the text itself. The original text is: " + text;

    try {
      setResult("");
      setError(null);
      setLoading(true);
      const response = await axios.post("http://localhost:5000/api/ai", { prompt });
      setResult(response.data);
    } catch (err) {
      setError(err.response?.data?.error || "An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  
  const ArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
    </svg>
  );

  return (
    <div className="min-h-screen w-full bg-[#0D1117] text-gray-200 font-sans antialiased relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full -z-10">
          <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-teal-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-screen">
        <div className="w-full max-w-7xl flex flex-col lg:flex-row items-stretch gap-6 lg:gap-4">
          
          <div className="w-full lg:w-1/2 flex flex-col">
            <textarea
              value={text}
              onChange={handleChange}
              className="w-full flex-grow resize-none bg-gray-900/50 border border-gray-700 rounded-xl placeholder:text-gray-500 text-lg p-6 focus:ring-2 focus:ring-teal-500 focus:outline-none backdrop-blur-sm min-h-[400px] lg:min-h-[60vh] transition-colors"
              placeholder="Enter your text here..."
            />
          </div>

          <div className="flex items-center justify-center">
             <motion.button
                onClick={handleApiCall}
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.05, boxShadow: loading ? "none" : "0px 0px 20px rgba(59, 130, 246, 0.5)" }}
                whileTap={{ scale: loading ? 1 : 0.95 }}
                className={`bg-gradient-to-r from-teal-500 to-purple-600 text-white font-bold rounded-full p-4 transition-all duration-300 flex items-center justify-center ${loading ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`}
              >
               <ArrowIcon />
              </motion.button>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="w-full flex-grow bg-gray-900/50 text-white rounded-xl border border-gray-700 flex flex-col backdrop-blur-sm min-h-[400px] lg:min-h-[60vh]">
              <div className="p-4 border-b border-gray-700 flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-300">Corrected Text</h2>
                {!loading && result && (
                  <motion.button
                    onClick={handleCopy}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-1.5 bg-gray-700 text-sm font-semibold rounded-md hover:bg-gray-600 transition-colors"
                  >
                    {copyButtonText}
                  </motion.button>
                )}
              </div>
              <div className="p-6 overflow-y-auto h-full relative">
                <AnimatePresence mode="wait">
                  {loading ? (
                    <motion.div
                      key="loader"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="w-10 h-10 border-4 border-t-teal-400 border-gray-600 rounded-full animate-spin"></div>
                    </motion.div>
                  ) : (
                    <motion.p
                      key="result"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-lg whitespace-pre-wrap leading-relaxed"
                    >
                      {result || <span className="text-gray-500">Your corrected text will appear here...</span>}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
        <AnimatePresence>
            {error && 
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="mt-4 bg-red-500/10 border border-red-500/30 text-red-400 font-semibold px-6 py-3 rounded-lg"
                >
                    {error}
                </motion.div>
            }
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Home;