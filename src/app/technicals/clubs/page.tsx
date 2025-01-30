"use client"; //important for framer motion to work
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import Image from "next/image";
import heroImage from "../../../../public/technicalclubs.png";
// import clubArr from "./clubData";
import Header from "./header";
import cae from "../../../../public/assests/clubs/logo/cae.png";
import cfa from "../../../../public/assests/clubs/logo/CFA Club Logo.jpg";
import concreate from "../../../../public/assests/clubs/logo/concreate logo (new).jpg";
import electr from "../../../../public/assests/clubs/logo/Copy of electronics club (18).png";
import cyn from "../../../../public/assests/clubs/logo/Cynaptics club 20230325_104746.jpg";
import gdsc from "../../../../public/assests/clubs/logo/GDSC-IITI-Logo.png";
import ivdc from "../../../../public/assests/clubs/logo/IVDC Club 20230426_231624.jpg";
import meta from "../../../../public/assests/clubs/logo/MetaCryst Logo1.png";
import pclub from "../../../../public/assests/clubs/logo/Pclub.png";
import quantum from "../../../../public/assests/clubs/logo/quantum computing.jpg";
import robo from "../../../../public/assests/clubs/logo/ROBOTICS CLUB_.jpg";
import snt from "../../../../public/assests/clubs/logo/Science and technology council 23-24 20230515_112204 (1) (1).jpg";
import astro from "../../../../public/assests/clubs/logo/The_Astronomy_Club.jpg";
import aeromodelling from "../../../../public/assests/clubs/logo/Aeromodelling .jpg";
import webgym from "../../../../public/assests/clubs/logo/Web_Team_Logo.png";

import HeadsPage from "../clubHeads/page";

import { before } from "node:test";

export default function Hero() {
  const clubArr = [
    {
      "more":"https://www.instagram.com/astronomyclub_iiti/",
      "title": "Astronomy Club",
      "imageSrc": astro,
    },
    {
      "more":"https://www.instagram.com/aeroclub_iiti/",
      "title": "The Aeromodelling Club",
      "imageSrc":aeromodelling ,

    },
    {
      "more":"https://www.instagram.com/caeclub_iiti/",
      "title": "CAE",
      "imageSrc": cae,
    },
    {
      "more":"https://www.instagram.com/cfaclub_iiti/",
      "title": "CFA",
      "imageSrc": cfa,
    },
    {
      "more":"https://www.instagram.com/concreate_iiti/",
      "title": "Concreate",
      "imageSrc": concreate,
    },
    {
      "more":"https://cynaptics.vercel.app/",
      "title": "Cynaptics",
      "imageSrc": cyn,
    },
    {
      "more":"https://www.instagram.com/electronics_club_iiti/",
      "title": "Electronics Club",
      "imageSrc": electr,
    },
    {
      "more":"https://gdsc.community.dev/indian-institute-of-technology-indore-india/",
      "title": "GDSC",
      "imageSrc": gdsc,
    },
    {
      "more":"https://www.instagram.com/gymkhana_iiti/",
      "title": "Gymkhana Web Team",
      "imageSrc": webgym,
    },
    {
      "more":"https://www.instagram.com/ivdc_iiti/",
      "title": "IVDC-Intelligent Vehicle Design Club",
      "imageSrc": ivdc,
    },
    {
      "more":"http://metacryst.iiti.ac.in/",
      "title": "Metacryst",
      "imageSrc": meta,
    },
    {
      "more":"http://progclub.iiti.ac.in/",
      "title": "The Programming Club",
      "imageSrc": pclub,
    },
    {
      "more":"https://www.instagram.com/quantum_computing_iiti/",
      "title": "Quantum Computing",
      "imageSrc": quantum,
    },
   
    {
      "more":"https://www.instagram.com/roboticsclub_iitindore/",
      "title": "Robotics Club",
      "imageSrc": robo,
    },
    
   
    
    
  ];
  return (
    <>
      <div
        id="hero-bg"
        style={{
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          scrollBehavior: "smooth",
        }}
        className="overflow-x-hidden mt-[-10vh] relative h-[100vh]  "
      >
        <Image
          src={heroImage}
          alt="Hero Background"
          className="w-full h-auto absolute z-[-1] bg-blend-darken blur-sm scale-1.2 object-cover brightness-30"
          layout="fill"
        />
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ y: "-100vh", opacity: 0, scale: 1.5 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
          stiffness: 120,
          damping: 10 }}
        >
          <Header item={"Student Gymkhana"} />
          <Image
          className="relative right-[-2vw] top-[-32vh] z-100 invisible xl:visible bg-contain"
          src="/blue_dots.svg"
          width={400}
          height={400}
          alt="Random plus"
        />
        </motion.div>
      </div>

      <div
        id="main-container"
        className="bg-gradient-to-r pb-[2vh] max-sm:pb-6 from-pink-100 from-10% via-blue-100 via-30% to-purple-100 to-90% "
        //absolute bg-[radial-gradient(#65d3d4_1.4px,#cef7ff_1.2px)] [background-size:36px_36px] -- OLD BG
      >
        <ScrollReveal>
          <div className="flex items-center justify-center">
            <motion.h1
              className="text-white font-bold sm:mt-10 mt-5 sm:mb-0 mb-[-15vw] text-md uppercase sm:p-4 rounded-md text-center bg-gradient-to-r xs:text-base md:text-xl md:w-[21vw] sm:h-[10.25vh] md:h-[8.25vh]  from-indigo-600 to-sky-400 p-3 font-poppins " 
            //   
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.2,
                duration: 1,
              }}
              id="techClub"
            >
              Our Clubs 
            </motion.h1>
          </div>
        </ScrollReveal>

        <div
          id="council"
          className="flex mt-[0] xs:mt-30 flex-wrap place-content-center gap-0.5  "
        >
          {clubArr.map((item, index) => (
            <div
              className={`
              sm:w-[25vh] sm:h-[40vw] 
              md:w-[35vh] md:h-[40vw] 
              lg:w-[50vh] lg:h-[30vw] 
              lg:mx-[0vh]
              lg:my-[3vh]
              md:mx-[2vw]
              md:my-[1vw]
              bg-transparent border-black pt-20 
              xs:h-[60vw]
              xs:w-[30vh]
              xs:m-3
              xs:mb-8
              xxs:m-4
              xxs:h-[40vw]
              xxs:w-[25vw]
              xxs:mb-[20vw]
              sm:mb-6 
              scroll-smooth   
              `} //changed.........

              

              key={index}
            >


              <ScrollReveal>
              
                <div 
                // className="flex flex-col items-center pb-10 overflow-x-hidden w-full"

                className="flex flex-col items-center pb-10"

                //newwwwwwwwwwwww
                
                >
                  <motion.div
                    whileHover={{ scale: 1.1, filter: "brightness(1.2)" }}
                    transition={{ duration: 0.5 }}
                    className="img-cont lg:w-52 lg:h-40 md:w-40 md:h-40 sm:w-30 sm:h-40 md:flex-auto flex items-center justify-center lg:mb-12 lg:mt-4 md:m-2 xs:w-40 xs:h-40 cursor-pointer hover:shadow-xl xxs:h-40"
                   

                    whileTap={{ scale: 0.9, filter: "brightness(0.85)" }}
                  >
                    <Image
                      // className="lg:w-[20vw] sm:w-[18vw] xxs:[10vw] sm:mt-3 lg:mt-2 md:border-b-5 sm:pb-5 md:pb-0 border-sky-600 "
                      className=" lg:w-[100%] lg:h-[100%] sm:w-[80%] sm:h-[80%] md:w-[90%] xxs:w-[70%] xxs:h-[70%] md:mt-5 md:h-[90%] lg:mt-4 sm:mt-3 xxs:mt-10 border-sky-600"
                      // newwwww
                      src={item.imageSrc.src}
                      alt={item.title}
                      width={200}
                      height={200}
                      unoptimized // "unoptimized" -- very CRUCIAL
                    />
                    
                  </motion.div>
                  <div 
                  // className="heading-cont lg:w-60 lg:h-12 sm:w-40 sm:h-8 md:w-50 md:h-10 xxs:h-[2vw]  flex items-center justify-center w-full overflow-x-hidden "
                  className="heading-cont lg:w-60 lg:h-12 sm:w-40 sm:h-8 md:w-50 md:h-10 xxs:w-40 xxs:h-10 flex items-center justify-center "
                  
                  >
                    <h5 
                    // className="xs:mb-1 lg:text-xl xxs:text-sm md:text-md lg:font-medium text-center text-gray-900 dark:text-white"
                    className="mb-1 max-sm:mb-4 lg:text-xl xxs:text-sm md:text-md lg:font-medium text-center text-gray-900 max-sm:mt-5"
                    >
                      {item.title}
                    </h5>
                  </div>
                  <div 
                  // className="w-50 h-12 sm:mb-10 xxs:mb-20 sm:mt-1 xxs:mt-5 flex items-center justify-center cursor-pointer"
                  className="w-52 h-20 mb-10  mt-1 flex items-center justify-center cursor-pointer xl:border-b-4 border-blue-500 "
                  >
                    <motion.button
                      // className="sm:px-2 sm:py-1  sm:text-sm md:text-md md:px-4 md:py-2  scale-1.1 xs:text-sm font-medium text-center text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-r hover:to-purple-600 
                      // hover:from-pink-600 rounded-lg cursor-pointer  scroll-smooth 
                      // xxs:text-xs
                      // xxs:py-1 xxs:px-1
                      
                      // "
                      
                      className="px-4 py-2 max-sm:mb-12 scale-1.1 xxs:text-xs sm:text-sm font-medium text-center text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 rounded-lg cursor-pointer "
                      
                      whileTap={{ filter: "brightness(1.2)" }}
                    >
                      <a href={item.more} target="_blank">See more</a>
                    </motion.button>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
      <HeadsPage/>
    </>
  );
}
