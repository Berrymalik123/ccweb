import { useRef, useEffect } from "react";

export default function AboutHeaderWithShapes() {
  const containerRef = useRef(null);
  const shapesRef = useRef([]);
  const rotateRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const shapes = shapesRef.current;
    const movementStrength = 20;

    // Mouse move for shapes
    function onMouseMove(e) {
      const rect = container.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      shapes.forEach(({ el, factorX, factorY }) => {
        const offsetX = ((mouseX - centerX) / centerX) * movementStrength * factorX;
        const offsetY = ((mouseY - centerY) / centerY) * movementStrength * factorY;
        el.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      });
    }

    function onMouseLeave() {
      shapes.forEach(({ el }) => (el.style.transform = `translate(0px, 0px)`));
    }

    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseleave", onMouseLeave);

    // 3D rotation
    let angle = 0;
    let animationFrameId;
    function rotate() {
      angle += 1; // rotation speed
      if (rotateRef.current) {
        rotateRef.current.style.transform = `rotateY(${angle}deg) rotateX(${angle / 2}deg)`; // true 3D rotation
      }
      animationFrameId = requestAnimationFrame(rotate);
    }
    rotate();

    return () => {
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-64 md:h-80 lg:h-96 bg-[url('./src/images/Aboutbanner.jpg')] bg-center bg-cover flex flex-col justify-center items-center text-white"
      style={{ perspective: "1000px" }} // strong 3D perspective
    >
      {/* Shapes */}
      <div
        ref={(el) => (shapesRef.current[0] = { el, factorX: 0.4, factorY: 0.2 })}
        className="absolute rounded-full w-48 h-48 bg-yellow-900 opacity-20 left-10 top-10 pointer-events-none transition-transform duration-300"
      ></div>

      <div
        ref={(el) => (shapesRef.current[1] = { el, factorX: -0.3, factorY: 0.3 })}
        className="absolute grid grid-cols-5 grid-rows-5 gap-1 w-24 h-24 left-1/3 top-20 pointer-events-none transition-transform duration-300"
      >
        {[...Array(25)].map((_, i) => (
          <span
            key={i}
            className="block w-1.5 h-1.5 rounded-full bg-yellow-700"
          />
        ))}
      </div>

      <div
        ref={(el) => (shapesRef.current[2] = { el, factorX: -0.5, factorY: -0.4 })}
        className="absolute rounded-full w-36 h-36 bg-yellow-700 opacity-10 right-16 top-1/3 pointer-events-none transition-transform duration-300"
      ></div>

      <div
        ref={(el) => (shapesRef.current[3] = { el, factorX: 0.7, factorY: -0.3 })}
        className="absolute rounded-full w-20 h-20 bg-yellow-700 opacity-20 right-24 bottom-20 pointer-events-none transition-transform duration-300"
      ></div>

      {/* Rotating AI⁺ */}
      <div
        ref={rotateRef}
        className="absolute top-12 right-12 select-none pointer-events-none"
        style={{
          fontSize: "3rem",
          fontWeight: "800",
          transformStyle: "preserve-3d",
          backfaceVisibility: "visible",
        }}
      >
        AI

      </div>


    </section>
  );
}
