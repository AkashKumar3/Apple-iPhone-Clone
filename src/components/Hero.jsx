import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo,smallHeroVideo } from "../utils";
import { useState } from "react";
import { useEffect } from "react";

const Hero = () => {

  useGSAP(()=>{
    gsap.to('#brandName', {
      opacity:1,
      delay:1.5,
      y:5
    }),
    gsap.to("#cta", {
      opacity:1,
      delay:2,
      y:-50
    })
  },[]);

  const [videoSrc, setvideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)
  const handleVideoSet = () => {
    if (window.innerWidth < 760) {
      setvideoSrc(smallHeroVideo);
    }else{
      setvideoSrc(heroVideo)
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleVideoSet);
    return () => {
      window.removeEventListener('resize', handleVideoSet);
    }
  },[])
  
  return (
    <section className="bg-black w-full nav-height relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="brandName" className="hero-title">iPhone 16 pro </p>
        <div className="md:w-10/12 w-9/12">
          <video className="pointer-events-none" 
          autoPlay muted playsInline={true} key={videoSrc} >
            <source src={videoSrc} type="video/mp4"/>
          </video>
        </div>
      </div>

      <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
        <a href="#highlights" className="btn">Buy</a>
          <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  )
}

export default Hero