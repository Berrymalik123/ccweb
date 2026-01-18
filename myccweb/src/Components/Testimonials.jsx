import { useEffect, useRef } from "react";

const Testimonials = () => {
  const sliderRef = useRef(null);
  const sectionRef = useRef(null);

  const testimonials = [
    {
      name: "Ali Raza",
      role: "Web Development Student",
      message:
        "This institute provided excellent guidance and practical learning. The instructors are highly professional.",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=12",
    },
    {
      name: "Sara Khan",
      role: "Graphic Design Student",
      message:
        "Courses are well-structured and focused on real-world skills. Highly recommended.",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=32",
    },
    {
      name: "Ahmed Malik",
      role: "IT Professional",
      message:
        "Hands-on experience that helped me grow professionally. Excellent learning environment.",
      rating: 4,
      image: "https://i.pravatar.cc/150?img=56",
    },
    {
      name: "Hina Noor",
      role: "Digital Marketing Student",
      message:
        "Supportive staff, modern curriculum, and great facilities.",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=45",
    },
  ];

  /* Auto-scroll */
  useEffect(() => {
    const slider = sliderRef.current;
    const interval = setInterval(() => {
      if (slider) {
        slider.scrollBy({ left: 360, behavior: "smooth" });
        if (
          slider.scrollLeft + slider.clientWidth >=
          slider.scrollWidth - 10
        ) {
          slider.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  /* Fade-in animation */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current.classList.add("opacity-100", "translate-y-0");
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -360, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 360, behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="max-w-7xl mx-auto px-6 py-16 opacity-0 translate-y-10 transition-all duration-700
                 bg-white dark:bg-gray-900"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <p className="text-yellow-500 dark:text-yellow-400 font-bold uppercase mb-2">
            Testimonials
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
            What Our Students Say
          </h2>
        </div>

        {/* Arrows */}
        <div className="hidden md:flex gap-3">
          <button
            onClick={scrollLeft}
            className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700
                       hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            ‹
          </button>
          <button
            onClick={scrollRight}
            className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700
                       hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            ›
          </button>
        </div>
      </div>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
      >
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="min-w-[300px] md:min-w-[350px] snap-start
                       bg-white dark:bg-gray-800
                       rounded-xl shadow-lg p-6
                       hover:shadow-xl transition"
          >
            {/* Stars */}
            <div className="flex mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={`text-lg ${
                    i < item.rating
                      ? "text-yellow-400"
                      : "text-gray-300 dark:text-gray-600"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              “{item.message}”
            </p>

            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  {item.name}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {item.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
