import React from 'react'
import Hero from '../Components/Hero'

import AboutSection from '../Components/AboutSec'
import Testimonials from '../Components/Testimonials'

function Home() {
  return (
    <>
 <div className="relative w-full min-h-screen overflow-hidden">
    
      <div className="absolute inset-0 -z-10">
     
        <svg
          className="w-full h-full animate-wave opacity-60"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#a2c3ff"
            d="M0,160L80,149.3C160,139,320,117,480,122.7C640,128,800,160,960,165.3C1120,171,1280,149,1360,138.7L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          />
        </svg>
       
        <svg
          className="w-full h-full animate-wave opacity-40"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#6366f1"
            d="M0,96L80,122.7C160,149,320,203,480,213.3C640,224,800,192,960,170.7C1120,149,1280,139,1360,133.3L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          />
        </svg>
      
        <svg
          className="w-full h-full animate-wave opacity-20"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#c2e1fad3"
            d="M0,64L80,90.7C160,117,320,171,480,186.7C640,203,800,181,960,176C1120,171,1280,181,1360,186.7L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          />
        </svg>
      </div>


<Hero/>
<AboutSection/>
<Testimonials/>
</div>  

</>

  )
}

export default Home