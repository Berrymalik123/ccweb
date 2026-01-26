import { motion } from "framer-motion";

const aboutCards = [
  {
    title: "About Computer Collegiate",
    img: "./src/images/about1.jpg",
    content:
      "COMPUTER COLLEGIATE is one of the most prestigious computer education institutes in Karachi that supports the educational and career progression needs of more than 20,000 students every year. The Institute has been catering to aspiring and experienced IT professionals since 1991. We offer short-term and long-term customized training courses from basic computer literacy to advanced programming, networking, hardware, and multimedia applications. Well-equipped computer labs are available for student use.",
      
  },
  {
    title: "Our Vision",
    img: "./src/images/about2.png",
    content:
      "With a strong focus on students’ success, COMPUTER COLLEGIATE prides itself on high-quality programs that have been a trademark for more than two decades. The Institute aspires to leadership in excellence across Programming, Networking, Hardware, Multimedia resources, and their applications, preparing students for advanced studies and professional roles.",
  },
  {
    title: "Our Mission",
    img: "./src/images/about3.png",
    content:
      "Computer Collegiate believes Information Technology plays a vital role in all walks of life. Our mission is to make technology an asset by providing cutting-edge IT knowledge and remaining a reliable name in computer education while meeting the evolving demands of the IT industry.",
  },
  {
    title: "Career Opportunities",
    img: "./src/images/about4.png",
    content:
      "For more than three decades, COMPUTER COLLEGIATE has empowered students with career-oriented skills. Our programs equip learners with professional competence, management skills, accountability, and social responsibility—preparing them for meaningful careers in the IT industry.",
  },
  {
    title: "Know Your Strengths",
    img: "./src/images/about5.png",
    content:
      "Understanding your strengths, interests, and values is the first step toward career success. We help students assess their personality traits and career interests to make informed decisions about their professional future.",
  },
  {
    title: "Faculty",
    img: "./src/images/about6.png",
    content:
      "Innovation in teaching is a core value at Computer Collegiate. Our experienced faculty members and internationally certified IT professionals share real-world industry knowledge. They transform beginners into professionals skilled in Desktop, Web, Enterprise, and Mobile application development.",
  },
];

export default function AboutCards() {
  return (
    <section className="bg-yellow-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-yellow-600 text-7xl font-semibold uppercase tracking-wide">
            About Us
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">
            About Computer Collegiate
          </h2>
        </div>

        {/* Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8"
        >
          {/* First two full-width cards */}
          {aboutCards.slice(0, 2).map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="bg-white border border-yellow-100 rounded-2xl p-7 hover:shadow-xl transition w-full"
            >
              {/* Image */}
              <div className="w-full h-56 mb-4 overflow-hidden rounded-xl">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>

              {/* Content */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.content}
              </p>
            </motion.div>
          ))}

          {/* Last three cards in one row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutCards.slice(2).map((item, index) => (
              <motion.div
                key={index + 2}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="bg-white border border-yellow-100 rounded-2xl p-7 hover:shadow-xl transition"
              >
                {/* Image */}
                <div className="w-full h-40 mb-4 overflow-hidden rounded-xl hover:scale-105">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>

                {/* Content */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.content}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
