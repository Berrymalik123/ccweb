import { useEffect } from "react";
import { motion } from "framer-motion";



const AboutSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-show");
          }
        });
      },
      { threshold: 0.2 }
    );

    document
      .querySelectorAll(".animate-left, .animate-right")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row gap-10 items-center">
      
      {/* LEFT SIDE (Images) */}
      <div className="relative flex-1 animate-left">
        <img
          src="./src/images/1.jpeg"
          alt="Students celebrating"
          className="rounded-lg shadow-lg mb-4 w-100 float-icon"
        />

        <img
          src="./src/images/2.jpeg"
          alt="Campus"
          className="rounded-lg shadow-lg w-2/4 absolute bottom-0 right-0 transform translate-x-6 translate-y-6"
        />

        <span className="absolute top-0 right-8 text-4xl font-bold text-gray-300 rotate-90">
          EST 1990
        </span>
      </div>

      {/* RIGHT SIDE (Content) */}
      <div className="flex-1 animate-right">
        <p className="text-blue-900 font-bold uppercase mb-2">Know</p>

        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus,
          facilis ullam.
        </h2>

        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          quis odio quod amet dicta reiciendis excepturi odit quas, labore
          corrupti minus autem velit doloribus sed dolorum, deleniti atque saepe.
          Consectetur, alias.
        </p>

        <div className="space-y-4 mb-6">
          <div>
            <h3 className="font-semibold">Lorem, ipsum.</h3>
            <p className="text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Lorem, ipsum.</h3>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>

        <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition">
          More About
        </button>
      </div>
                <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute top-6 right-6 bg-white dark:bg-gray-900 shadow-lg rounded-xl px-4 py-2 text-sm"
          >
            🎓 Skill-Based Learning
          </motion.div>
    </section>
  );
};

export default AboutSection;
