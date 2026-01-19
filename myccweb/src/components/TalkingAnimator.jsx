// components/TalkingAnimatorVideo.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function TalkingAnimator({
  side = "right",
  src = "/src/assets/Robot.webm",
}) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Vertical parallax (follows scroll slowly)
  const y = scrollY * 0.25;

  // Horizontal movement (left ↔ right drift)
  const x =
    side === "left"
      ? Math.sin(scrollY * 0.005) * 20
      : Math.sin(scrollY * 0.005) * -20;

  // Gentle rotation (talking feel)
  const rotate = Math.sin(scrollY * 0.01) * 5;

  // Breathing / alive scaling
  const scale = 1 + Math.sin(scrollY * 0.01) * 0.03;

  // Position side
  const positionClasses =
    side === "right" ? "right-4 md:right-10" : "left-4 md:left-10";

  return (
    <motion.div
      style={{ x, y }}
      animate={{ rotate, scale }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 18,
      }}
      className={`fixed bottom-50 ${positionClasses}
                  w-24 md:w-32 z-50 pointer-events-none`}
    >
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto select-none"
      />
    </motion.div>
  );
}
