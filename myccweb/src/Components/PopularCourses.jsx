import { motion } from "framer-motion";

const courses = [
  {
    title: "Front-End Development",
    desc: "HTML, CSS, JavaScript, React",
    img: "./src/images/frontend.png",
  },
  {
    title: "Back-End Development",
    desc: "Node.js, PHP, Databases",
    img: "./src/images/backend.avif",
  },
  {
    title: "GAP Program",
    desc: "Skill Development & Training",
    img: "./src/images/GAP.png",
  },
  {
    title: "Marketing",
    desc: "Digital & Social Media Marketing",
    img: "./src/images/Marketing.avif",
  },
  {
    title: "AI Course",
    desc: "Artificial Intelligence Basics",
    img: "./src/images/AI.jfif",
  },
  {
    title: "Full Stack",
    desc: "Front-End + Back-End",
    img: "./src/images/Fullstack.png",
  },
];

export default function PopularCourses() {
  return (
    <section className="bg-blue-100 py-20 px-6 md:px-20 overflow-hidden">

      <div className="text-center mb-12">
        <p className="text-yellow-700 font-semibold mb-2">
          Popular Courses
        </p>
        <h2 className="text-4xl font-bold text-gray-800">
          Academic Courses
        </h2>
      </div>

     
      <div className="flex flex-wrap justify-center gap-4 mb-14">
        {["Diploma Courses", "Certificate Courses", "Marketing Courses", "AI Courses"].map(
          (btn, i) => (
            <button
              key={i}
              className="px-6 py-3 rounded-full bg-white shadow-md hover:bg-yellow-500 hover:text-white transition"
            >
              {btn}
            </button>
          )
        )}
      </div>

     
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {courses.map((course, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 h-65 hover:h-85"
          >
            {/* Image */}
            <img
              src={course.img}
              alt={course.title}
              className="w-full h-40 object-cover"
            />

            {/* Content */}
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-1">
                {course.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {course.desc}
              </p>
            </div>

            <button
              className="absolute bottom-5 left-1/2 -translate-x-1/2 px-6 py-2 
              bg-yellow-500 text-white rounded-full 
              opacity-0 group-hover:opacity-100 
              translate-y-6 group-hover:translate-y-0
              transition-all duration-300 hover:bg-yellow-600"
            >
              Details
            </button>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}
