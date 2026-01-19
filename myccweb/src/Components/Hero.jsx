import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">

   
      <motion.img
        src="./src/assets/banner.png"
        alt="Tech Education"
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1.1, opacity: 0 }}  
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

    
      <div className="absolute inset-0 bg-linear-to-r from-black via-black/85 to-transparent"></div>
     <div className="relative z-10 flex h-full items-center px-6 md:px-20">
        <motion.div
          className="max-w-xl text-white"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, x: -80 },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.8,
                staggerChildren: 0.2,
              },
            },
          }}
        >

          <motion.h1
            className="text-4xl md:text-5xl font-bold leading-tight animate-right"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}

          >
            <span className="text-2xl">
              Knowledge is Power
            </span>
            <br />
            Learn Modern <br />
            <span className="text-yellow-400">Tech <span className="text-white bg-yellow-500">Skills</span></span>
          </motion.h1>

          <motion.p
            className="mt-4 text-gray-300 text-lg"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Build your future with Web Development, UI/UX Design, AI Chatbots,
            and industry-ready technologies.
          </motion.p>

          <motion.div
            className="mt-6 flex gap-4"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-lg bg-yellow-500 px-6 py-3 font-semibold hover:bg-yellow-600 transition"
            >
              Get Started
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-lg border border-white px-6 py-3 font-semibold hover:bg-white hover:text-black transition"
            >
              Explore Courses
            </motion.button>
          </motion.div>

        </motion.div>
      </div>

    </section>
  );
};

export default HeroSection;
