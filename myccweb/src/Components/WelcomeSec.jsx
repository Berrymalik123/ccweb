// import { motion } from "framer-motion";

// export default function WelcomeSection() {
//   return (
//     <section className="relative bg-white dark:bg-gray-950 py-20 px-6 md:px-20 overflow-hidden">

//       {/* Background Blur Shape */}
//       <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-200 opacity-40 rounded-full blur-3xl" />
//       <div className="absolute bottom-0 -right-24 w-96 h-96 bg-indigo-300 opacity-30 rounded-full blur-3xl" />

//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

//         {/* TEXT */}
//         <motion.div
//           initial={{ opacity: 0, x: -60 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <p className="text-blue-600 font-semibold mb-3">
//             Welcome to Computer Collegiate
//           </p>

//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
//             Empowering Your Future <br />
//             with Practical Skills
//           </h1>

//           <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
//             We provide industry-oriented computer and IT education to help
//             students build strong careers with real-world skills and
//             professional guidance.
//           </p>

//           <div className="flex flex-wrap gap-4">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               className="px-7 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
//             >
//               Explore Courses
//             </motion.button>

//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               className="px-7 py-3 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 transition"
//             >
//               Contact Us
//             </motion.button>
//           </div>
//         </motion.div>

//         {/* IMAGE / ILLUSTRATION */}
//         <motion.div
//           initial={{ opacity: 0, x: 60 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="relative"
//         >
//           <img
//             src="/assets/welcome.png"
//             alt="Welcome"
//             className="w-full max-w-md mx-auto"
//           />

//           {/* Floating badge */}
//           <motion.div
//             animate={{ y: [0, -10, 0] }}
//             transition={{ repeat: Infinity, duration: 4 }}
//             className="absolute top-6 right-6 bg-white dark:bg-gray-900 shadow-lg rounded-xl px-4 py-2 text-sm"
//           >
//             🎓 Skill-Based Learning
//           </motion.div>
//         </motion.div>

//       </div>
//     </section>
//   );
// }
