import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaArrowUp, FaMoon, FaSun } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Footer() {
  const [dark, setDark] = useState(false);
  const [email, setEmail] = useState("");
  const [toast, setToast] = useState("");



  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setToast("❌ Please enter a valid email");
      return;
    }
    setToast("✅ Successfully subscribed!");
    setEmail("");
    setTimeout(() => setToast(""), 3000);
  };

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {/* TOAST */}
      {toast && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="fixed bottom-24 right-6 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg z-50"
        >
          {toast}
        </motion.div>
      )}

      {/* FOOTER */}
      <motion.footer
        initial={{ y: 120, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gray-900 dark:bg-gray-950 text-gray-300 pt-14"
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* ABOUT */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Computer Collegiate
            </h3>
            <p className="text-sm">
              Career-focused IT & Computer training institute providing
              professional education.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-4">
              {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                <motion.a
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  key={i}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center 
                  rounded-full bg-yellow-800 hover:bg-yellow-600 transition"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {["Home", "About", "Courses", "Admissions", "Contact"].map(
                (link, i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-white transition">
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">
              Newsletter
            </h4>
            <form onSubmit={handleSubscribe} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-l-md text-white outline-none border"
              />
              <button
                className="bg-yellow-600 px-5 py-2 rounded-r-md text-white hover:bg-yellow-700"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* MAPS */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">
              Our Campuses
            </h4>
            <iframe
              className="w-full h-28 rounded-md mb-3"
              src="https://www.google.com/maps?q=Federal%20B%20Area%20Karachi&output=embed"
              loading="lazy"
            />
            <iframe
              className="w-full h-28 rounded-md"
              src="https://www.google.com/maps?q=Gulshan-e-Iqbal%20Karachi&output=embed"
              loading="lazy"
            />
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-gray-700 mt-10 py-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Computer Collegiate — All Rights Reserved.
        </div>
      </motion.footer>

      {/* BACK TO TOP */}
      <motion.button
        whileHover={{ scale: 1.15 }}
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 
        rounded-full bg-yellow-600 text-white 
        flex items-center justify-center shadow-lg z-40"
      >
        <FaArrowUp />
      </motion.button>


    </>
  );
}
