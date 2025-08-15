import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// --- SVG Icon Components (Slightly restyled for the new theme) ---
const GrammarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16-4-4 4-4"/><path d="m6 8-4 4 4 4"/><path d="m14 4-4 16"/></svg>
);
const StyleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
);
const SpellingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.174 6.812a1 1 0 0 0-1.158-1.51l-5.638 2.348a1 1 0 0 0-.632.89v6.3c0 .59.59 1.023 1.158.812l5.638-2.348a1 1 0 0 0 .632-.89V7.622a1 1 0 0 0 0-.81z" /><path d="M12.52 6.512a1 1 0 0 0-1.158-1.51l-5.638 2.348a1 1 0 0 0-.632.89v6.3c0 .59.59 1.023 1.158.812l5.638-2.348a1 1 0 0 0 .632-.89V7.322a1 1 0 0 0 0-.81z" /><path d="M4 19v-1.5a2.5 2.5 0 0 1 5 0V19" /><path d="M9 19H4" /></svg>
);
const ClarityIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
);

const LandingPage = () => {
    const navigate = useNavigate();

    const featureCards = [
        { icon: <GrammarIcon />, title: "Grammar Correction", description: "Catch and correct all types of grammatical errors with precision." },
        { icon: <StyleIcon />, title: "Style Enhancement", description: "Improve readability, conciseness, and overall flow of your text." },
        { icon: <SpellingIcon />, title: "Spelling Accuracy", description: "Eliminate typos and ensure flawless spelling in every document." },
        { icon: <ClarityIcon />, title: "Clarity Suggestions", description: "Get suggestions to make your sentences clearer and more impactful." },
    ];

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: 'spring', stiffness: 100 }
        }
    };

    return (
        <div className="bg-[#0D1117] text-gray-200 font-sans antialiased">
            {/* Background Gradient Shapes */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-teal-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            {/* Header */}
            <header className="py-4 px-8 sticky top-0 z-50 bg-[#0D1117]/80 backdrop-blur-sm border-b border-gray-800">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-purple-500">
                        Text Enhancer AI
                    </h1>
                    <motion.button
                        onClick={() => navigate("/home")}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="hidden md:inline-block bg-teal-500 text-white font-semibold py-2 px-5 rounded-lg hover:bg-teal-600 transition-colors"
                    >
                        Get Started
                    </motion.button>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4">
                {/* Hero Section */}
                <motion.section
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="py-24 sm:py-32 text-center"
                >
                    <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
                        Elevate Your Writing Instantly
                    </motion.h2>
                    <motion.p variants={itemVariants} className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto">
                        Correct grammar, refine style, and enhance clarity with our advanced AI. Transform your text into powerful, polished communication.
                    </motion.p>
                    <motion.button
                        variants={itemVariants}
                        onClick={() => navigate("/home")}
                        whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(59, 130, 246, 0.5)" }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-10 bg-gradient-to-r from-teal-500 to-purple-600 text-white font-bold py-4 px-10 rounded-full text-lg hover:from-teal-600 hover:to-purple-700 transition-all shadow-lg"
                    >
                        Try It Free ✨
                    </motion.button>

                    {/* Example Text Box */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-16 text-left p-6 bg-gray-900/50 border border-gray-700 rounded-xl max-w-3xl mx-auto text-gray-400 backdrop-blur-sm shadow-2xl"
                    >
                        <p className="font-mono text-base leading-relaxed">
                            This is an example text that has some <span className="text-red-400 line-through decoration-wavy">grammer</span><span className="text-teal-400 font-semibold rounded-md bg-teal-500/10 px-1 py-0.5"> grammar</span> errors and also could be improved for better flow. This tool will help you <span className="text-teal-400 font-semibold rounded-md bg-teal-500/10 px-1 py-0.5">achieve that goal</span> with ease.
                        </p>
                    </motion.div>
                </motion.section>

                {/* Features Section */}
                <section className="py-24 sm:py-32">
                    <h3 className="text-3xl font-bold text-center mb-16">Everything You Need to Write Better</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {featureCards.map((card, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 text-left transition-all duration-300 hover:border-teal-500 hover:shadow-2xl hover:shadow-teal-500/10 hover:-translate-y-2"
                            >
                                <div className="mb-4 p-3 w-fit rounded-lg bg-gray-800 text-teal-400">
                                    {card.icon}
                                </div>
                                <h4 className="font-bold text-lg mb-2 text-white">{card.title}</h4>
                                <p className="text-gray-400 text-sm">{card.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Final CTA Section */}
                <section className="text-center py-20">
                    <h3 className="text-3xl font-bold">Ready to Transform Your Writing?</h3>
                    <p className="text-gray-400 mt-4 max-w-xl mx-auto">
                        Join thousands of users who trust Text Enhancer AI for flawless and impactful writing.
                    </p>
                    <motion.button
                        onClick={() => navigate("/home")}
                        whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(59, 130, 246, 0.5)" }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-8 bg-gradient-to-r from-teal-500 to-purple-600 text-white font-bold py-4 px-10 rounded-full text-lg hover:from-teal-600 hover:to-purple-700 transition-all"
                    >
                        Start Improving Now
                    </motion.button>
                </section>
            </main>

            {/* Footer */}
            <footer className="text-center py-8 border-t border-gray-800 text-gray-500">
                © {new Date().getFullYear()} Text Enhancer AI. All rights reserved.
            </footer>
        </div>
    );
};

export default LandingPage;