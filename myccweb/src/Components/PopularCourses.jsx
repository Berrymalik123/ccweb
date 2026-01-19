import { motion } from "framer-motion";

const courses = [
  {
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    category: "Data Analytics",
    seats: "150 Seats",
    semesters: "12 Semesters",
    title: "Starting Reputed Education & Build your Skills",
    desc: "Far far away, behind the word mountains, far from the Consonantia.",
    rating: "5.0/5 Ratings",
  },
  {
    img: "https://images.unsplash.com/photo-1513258496099-48168024aec0",
    category: "Software Engineer",
    seats: "100 Seats",
    semesters: "20 Semesters",
    title: "Master Technology & Elevate Your Career",
    desc: "Unlock the power of technology to drive your career forward.",
    rating: "5.0/10 Ratings",
  },
  {
    img: "https://images.unsplash.com/photo-1529070538774-1843cb3265df",
    category: "Bachelor Of Arts",
    seats: "300 Seats",
    semesters: "8 Semesters",
    title: "Boost Creativity & Expand Your Horizons",
    desc: "Discover innovative techniques to enhance your creative thinking.",
    rating: "5.0/12 Ratings",
  },
  {
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    category: "Business Administrator",
    seats: "250 Seats",
    semesters: "12 Semesters",
    title: "Hone Leadership & Achieve Success",
    desc: "Develop essential leadership skills to excel in any industry.",
    rating: "5.0/30 Ratings",
  },
  {
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    category: "Fine Of Arts",
    seats: "80 Seats",
    semesters: "12 Semesters",
    title: "Learn Coding & Advance Your Skills Up",
    desc: "Gain in-demand coding expertise to stay ahead in tech.",
    rating: "5.0/5 Ratings",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1768012330811-a41de5d6ea7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcHV0ZXIlMjBzY2VpZW5jZSd8ZW58MHx8MHx8fDA%3D",
    category: "Computer Science",
    seats: "200 Seats",
    semesters: "12 Semesters",
    title: "Explore Marketing & Build Your Brand",
    desc: "Master marketing strategies to grow your personal brand.",
    rating: "5.0/15 Ratings",
  },
];

export default function PopularCourses() {
  return (
    <>
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

 
</section>



    <section className="max-w-7xl mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {courses.map((course, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -6 }}
            className="group bg-white rounded-2xl border border-gray-100 overflow-hidden
            hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)] transition-all duration-300"
          >
            {/* Image */}
            <div className="overflow-hidden h-58.75">
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              {/* Meta */}
              <div className="flex items-center text-xs text-gray-500 gap-4">
                <span className="flex items-center gap-1">
                  👤 {course.seats}
                </span>
                <span className="w-px h-3 bg-gray-300"></span>
                <span className="flex items-center gap-1">
                  📘 {course.semesters}
                </span>
              </div>

              {/* Category */}
              <span className="inline-block bg-pink-50 text-pink-700 text-[11px] font-semibold px-3 py-1 rounded">
                {course.category}
              </span>

              {/* Title */}
              <h3 className="text-[17px] font-semibold text-gray-900 leading-[1.4]
              group-hover:text-yellow-600 transition">
                {course.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed">
                {course.desc}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-2 pt-2">
                <div className="flex text-yellow-400 text-sm">
                  ★★★★★
                </div>
                <span className="text-xs text-gray-500">
                  ({course.rating})
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
</>

  );
}
