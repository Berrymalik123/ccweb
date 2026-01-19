import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-gray-50 pt-32 md:pt-40 pb-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-8">

        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Grow Your Skills With <span className="text-blue-700">Top Online Courses</span>
          </h1>
          <p className="text-lg text-gray-700">
            Learn from industry experts and boost your career. Start anytime, from anywhere.
          </p>

          <div className="flex gap-4">
            <button className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition">
              View Courses
            </button>

            <button className="border border-blue-700 text-blue-700 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
              Apply Now
            </button>
          </div>
        </div>

        {/* Right Hero Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/hero-image.png" // Replace with your actual image path
            alt="Online Learning"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
