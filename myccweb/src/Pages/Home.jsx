import React from 'react'
import Hero from '../Components/Hero'
import { motion } from "framer-motion";
import AboutSection from '../Components/AboutSec'
import Testimonials from '../Components/Testimonials'
import PopularCourses from '../Components/PopularCourses'
// import WelcomeSection from '../Components/WelcomeSec';


function Home() {
  return (
    <>
    {/* <WelcomeSection /> */}
 
    <div className="relative w-full min-h-screen overflow-hidden">
      
      <div className="absolute inset-0 -z-10">
        
        {/* Wave 1 */}
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none"
          className="absolute w-full h-full opacity-14">
          <motion.path
            fill="#4F6FD7"
            animate={{
              d: [
                "M0,160L80,149.3C160,139,320,117,480,122.7C640,128,800,160,960,165.3C1120,171,1280,149,1360,138.7L1440,128L1440,0L0,0Z",
                "M0,140L80,170C160,200,320,240,480,220C640,200,800,120,960,110C1120,100,1280,160,1360,180L1440,200L1440,0L0,0Z",
                "M0,160L80,149.3C160,139,320,117,480,122.7C640,128,800,160,960,165.3C1120,171,1280,149,1360,138.7L1440,128L1440,0L0,0Z"
              ]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>

        {/* Wave 2 */}
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none"
          className="absolute w-full h-full opacity-10">
          <motion.path
            fill="#A7C7E7"
            animate={{
              d: [
                "M0,96L80,122.7C160,149,320,203,480,213.3C640,224,800,192,960,170.7C1120,149,1280,139,1360,133.3L1440,128L1440,0L0,0Z",
                "M0,120L80,100C160,80,320,40,480,60C640,80,800,160,960,180C1120,200,1280,160,1360,140L1440,120L1440,0L0,0Z",
                "M0,96L80,122.7C160,149,320,203,480,213.3C640,224,800,192,960,170.7C1120,149,1280,139,1360,133.3L1440,128L1440,0L0,0Z"
              ]
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>

        {/* Wave 3 */}
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none"
          className="absolute w-full h-full opacity-25">
          <motion.path
            fill="#c2e1fad3"
            animate={{
              d: [
                "M0,64L80,90.7C160,117,320,171,480,186.7C640,203,800,181,960,176C1120,171,1280,181,1360,186.7L1440,192L1440,0L0,0Z",
                "M0,80L80,60C160,40,320,20,480,40C640,60,800,140,960,160C1120,180,1280,160,1360,140L1440,120L1440,0L0,0Z",
                "M0,64L80,90.7C160,117,320,171,480,186.7C640,203,800,181,960,176C1120,171,1280,181,1360,186.7L1440,192L1440,0L0,0Z"
              ]
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>

      </div>



<Hero/>
<AboutSection/>
<Testimonials/>
<PopularCourses />

</div>  

</>

  )
}

export default Home