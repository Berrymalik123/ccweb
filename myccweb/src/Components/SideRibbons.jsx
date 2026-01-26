import { motion } from "framer-motion";
import { FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";

const Ribbon = ({ icon: Icon, text, bg, link }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ width: 56 }}
      whileHover={{ width: 180 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`flex items-center gap-3 overflow-hidden ${bg}
        text-white h-14 px-4 rounded-r-full shadow-lg cursor-pointer`}
    >
      <Icon size={24} className="shrink-0" />

      <motion.span
        initial={{ opacity: 0, x: -10 }}
        whileHover={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2 }}
        className="whitespace-nowrap text-sm font-medium"
      >
        {text}
      </motion.span>
    </motion.a>
  );
};

export default function SideRibbons() {
  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 space-y-3 z-50">
      <Ribbon
        icon={FaWhatsapp}
        text="Chat on WhatsApp"
        bg="bg-green-500"
        link="https://wa.me/1234567890"
      />

      <Ribbon
        icon={FaFacebookMessenger}
        text="Message on Messenger"
        bg="bg-blue-500"
        link="https://m.me/yourusername"
      />
    </div>
  );
}
