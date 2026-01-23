import { motion } from "framer-motion";

const courses = [
  {
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=60&auto=format",
    category: "Data Analytics",
    seats: "150 Seats",
    semesters: "12 Semesters",
    title: "Starting Reputed Education & Build your Skills",
    desc: "Far far away, behind the word mountains, far from the Consonantia.",
    rating: "5.0/5 Ratings",
  },
  {
    img: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=600&q=60&auto=format",
    category: "Software Engineer",
    seats: "100 Seats",
    semesters: "20 Semesters",
    title: "Master Technology & Elevate Your Career",
    desc: "Unlock the power of technology to drive your career forward.",
    rating: "5.0/10 Ratings",
  },
  {
    img: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=600&q=60&auto=format",
    category: "Bachelor Of Arts",
    seats: "300 Seats",
    semesters: "8 Semesters",
    title: "Boost Creativity & Expand Your Horizons",
    desc: "Discover innovative techniques to enhance your creative thinking.",
    rating: "5.0/12 Ratings",
  },
  {
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=60&auto=format",
    category: "Business Administrator",
    seats: "250 Seats",
    semesters: "12 Semesters",
    title: "Hone Leadership & Achieve Success",
    desc: "Develop essential leadership skills to excel in any industry.",
    rating: "5.0/30 Ratings",
  },
  {
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=60&auto=format",
    category: "Fine Of Arts",
    seats: "80 Seats",
    semesters: "12 Semesters",
    title: "Learn Coding & Advance Your Skills Up",
    desc: "Gain in-demand coding expertise to stay ahead in tech.",
    rating: "5.0/5 Ratings",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1681663259285-2c1b1f9bda3d?w=600&q=60&auto=format",
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
      {/* Header */}
      <section className="bg-yellow-50 py-20 px-6 md:px-20">
        <div className="text-center mb-12">
          <p className="text-yellow-600 font-semibold mb-2">
            Popular Courses
          </p>
          <h2 className="text-4xl font-bold text-gray-900">
            Academic Courses
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {["Diploma Courses", "Certificate Courses", "Marketing Courses", "AI Courses"].map(
            (btn, i) => (
              <button
                key={i}
                className="px-6 py-3 rounded-full bg-white border border-yellow-400
                text-yellow-700 font-medium hover:bg-yellow-400 hover:text-white transition"
              >
                {btn}
              </button>
            )
          )}
        </div>
      </section>

      {/* Cards */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {courses.map((course, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-2xl border border-yellow-100
              hover:shadow-xl overflow-hidden"
            >
              {/* Image */}
              <div className="h-56 overflow-hidden">
                <img
                  src={course.img}
                  alt={course.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center text-xs text-gray-500 gap-4">
                  <span>👤 {course.seats}</span>
                  <span className="w-px h-3 bg-gray-300"></span>
                  <span>📘 {course.semesters}</span>
                </div>

                <span className="inline-block bg-yellow-100 text-yellow-700
                text-[11px] font-semibold px-3 py-1 rounded">
                  {course.category}
                </span>

                <h3 className="text-[17px] font-semibold text-gray-900">
                  {course.title}
                </h3>

                <p className="text-sm text-gray-500">
                  {course.desc}
                </p>

                <div className="flex items-center justify-between pt-3">
                  <div className="flex items-center gap-2">
                    <div className="text-yellow-400 text-sm">★★★★★</div>
                    <span className="text-xs text-gray-500">
                      ({course.rating})
                    </span>
                  </div>

                  {/* Explore Button */}
                  <button
                    className="px-4 py-2 text-sm rounded-full
                    bg-yellow-400 text-white font-medium
                    hover:bg-yellow-500 transition"
                  >
                    Explore →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
