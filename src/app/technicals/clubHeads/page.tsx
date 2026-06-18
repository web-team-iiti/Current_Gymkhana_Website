"use client"; //important for framer motion to work

import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import Image from "next/image";
// import heroImage from "../../../../public/assests/clubHeads/hero.png";
import Header from "./header";
import testImg from "../../../../public/assests/clubHeads/img.png";
import insta_icon from "../../../../public/assests/clubHeads/social_logo/ig_black.webp";
import li_icon from "../../../../public/assests/clubHeads/social_logo/li_blackLogo.png";
import cae from "../../../../public/assests/clubHeads/photos/CAE.jpg";
import dhruv from "../../../../public/assests/clubHeads/photos/dhruv.png";
import cfa_fin from "../../../../public/assests/clubHeads/photos/cfafin.jpg";
import cfa_overall from "../../../../public/assests/clubHeads/photos/VidushiRajhans_President_CFA.jpeg";
import concreate from "../../../../public/assests/clubHeads/photos/Yug Prabhat_Head_Concreate.png";
// import cyn from "../../../../public/assests/clubHeads/photos/Cynaptics.webp";
import ivdc from "../../../../public/assests/clubHeads/photos/Tirth Vinodrai Gohil_President_IVDC.png";
import gdsc from "../../../../public/assests/clubHeads/photos/S_Varshith_Reddy_GDG_co-Head.jpeg";
import pclub_cs from "../../../../public/assests/clubHeads/photos/Akarsh_Raj_President_Cybersecurity_ProgrammingClub.jpg";
import pclub_sw from "../../../../public/assests/clubHeads/photos/Kartikey Raghav_President_Software Division_Programming_Club.jpg";
import robo from "../../../../public/assests/clubHeads/photos/Ananya Shubhangi Sinha_President_Robotics Club.jpeg";
import elec from "../../../../public/assests/clubHeads/photos/DhananjayDhumal_President_ElectronicsClub.jpg";
import astro from "../../../../public/assests/clubHeads/photos/ShreyAggarwal_Head_Astronomy.jpg";
import aero from "../../../../public/assests/clubHeads/photos/chakrapani_head_aeromodelling.jpg";
import Quantum from "../../../../public/assests/clubHeads/photos/Hemal_President_QC.jpg"; 
import Biocrats from "../../../../public/assests/clubHeads/photos/AyushiRawat_ClubHead_BioCrats.jpeg";
import infinitrix from "../../../../public/assests/clubHeads/photos/Ayinala Sri Nikesh_Head_Infinitrix.jpeg";
import metacryst from "../../../../public/assests/clubHeads/photos/AntroVictor_Head_MetacrystClub.jpg";
import pclub_cp from "../../../../public/assests/clubHeads/photos/Hrishabh Mittal_President CP Division_Programming Club.jpeg";
import cynaptics from "../../../../public/assests/clubHeads/photos/YashBhamare_ClubHead_Cynaptics.jpg";
import nologo from "../../../../public/assests/sports/nologo.png"

export default function Hero() {
  const clubArr = [
    {
      club_name: "Aeromodelling",
      head: "B. Venkata Chakrapani",
      post: "Head",
      img: aero,
      club_insta: "https://www.instagram.com/chakri_leader?igsh=MXE5anQyZmJzZXBrMQ%3D%3D&utm_source=qr",
      club_lin: "https://www.linkedin.com/in/chakrapani-burra-086878352?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
      website: "",
    },
    {
      club_name: "Astronomy",
      head: "Shrey Aggarwal",
      post: "Head",
      img: astro,
      club_insta:  "https://www.instagram.com/shrey_aggarwal021?igsh=M2QwNTQxcmdmdG44",
      club_lin: "https://www.linkedin.com/in/shrey-aggarwal-92154732a",
      website: "",
    },
    // {
    //   club_name: "Rocketry Club",
    //   head: "No Head Assigned",
    //   img: nologo,
    //   post: "President",
    //   club_insta: "https://www.instagram.com/caeclub_iiti/",
    //   club_lin: "https://www.linkedin.com/company/cae-club-iit-indore/",
    //   website: "",
    // },
    {
      club_name: "CFA",
      head: "Vidushi Rajhans",
      post: "Head",
      img: cfa_overall,
      club_insta: "https://instagram.com/vidushirajhans",
      club_lin: "https://www.linkedin.com/in/vidushi-rajhans-334843322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      website: "",
    },
    {
      club_name: "Concreate Club",
      head: "Yug Prabhat",
      post: "Head",
      img: concreate,
      club_insta: "https://www.instagram.com/yug_0919?igsh=cm5pamxiMzEyNmFi",
      club_lin: "http://www.linkedin.com/in/yug-prabhat-a3a78831a",
      website: "",
    },
    {
      club_name: "Electronics Club",
      head: "Dhananjay Dhumal",
      post: "President",
      club_insta: "https://www.instagram.com/itsdhananjaydhumal/",
      club_lin: "https://www.linkedin.com/in/dhananjay-dhumal-71921731a/",
      website: "",
      img: elec,
    },
    {
      club_name: "Cynaptics",
      head: "Yash Bhamare",
      post: "President",
      img: cynaptics,
      club_insta: "https://www.instagram.com/cynapticsclubiiti/",
      club_lin: "https://www.linkedin.com/in/yash-bhamare-887a2a330?originalSubdomain=in",
      website: "https://cynaptics.vercel.app/",
    },
    {
      club_name: "GDSC",
      head: "S Varshith Reddy",
      post: "Head",
      img: gdsc,
      club_insta: "https://www.instagram.com/varshith_8121?igsh=MWp1OWhraTZpZTdiZA==",
      club_lin: "https://www.linkedin.com/in/s-varshith-reddy",
      website: "",
    },
    {
      club_name: "Infinitrix - The Math Club",
      head: "Ayinala Sri Nikesh",
      post: "President",
      club_insta: "https://www.instagram.com/srinikesh_31/?hl=en",
      img: infinitrix,
      club_lin: "https://www.linkedin.com/in/ayinala-sri-nikesh-752635311//",
      website: "",
    },
    {
      club_name: "IVDC",
      head: "Tirth Vinodrai Gohil",
      post: "President",
      club_insta: "https://www.instagram.com/_tirthgohil",
      img: ivdc,
      club_lin: "https://www.linkedin.com/in/tirth-gohil-9b4980339/",
      website: "",
    },
    {
      club_name: "Metacryst",
      head: "Antro Victor Santhyas P",
      post: "Head",
      img: metacryst,
      club_insta:"https://www.instagram.com/antrovictor?igsh=MWJmZWRhenI1M2Rvdg==",
      club_lin: "https://www.linkedin.com/in/antro-victor-santhyas-p-22b44335b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      website: "http://metacryst.iiti.ac.in/",
    },
    {
      club_name: "Pclub",
      head: "Akarsh Raj",
      img: pclub_cs,
      post: "President, Cybersecurity Division",
      club_insta: "https://www.instagram.com/akarsh_200428?igsh=OTVoM3gwNHU2ZjRt",
      club_lin: "https://www.linkedin.com/in/akarsh-raj-a74a4931a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      website: "http://progclub.iiti.ac.in/",
    },
    {
      club_name: "Pclub",
      head: "Hrishabh Mittal",
      post: "President, CP Division",
      img: pclub_cp,
      club_insta: "https://www.instagram.com/hrishabh_mittal",
      club_lin: "https://www.linkedin.com/in/hrishabh-mittal",
      website: "http://progclub.iiti.ac.in/",
    },
    {
      club_name: "Pclub",
      head: "Kartikey Raghav",
      post: "President, Software Division",
      img: pclub_sw,
      club_insta: "https://www.instagram.com/k_raghav_",
      club_lin: "https://www.linkedin.com/in/k-raghav-",
      website: "http://progclub.iiti.ac.in/",
    },
    {
      club_name: "Quantum Computing",
      head: "V Hemal",
      img: Quantum,
      post:"President",
      club_insta: "https://www.instagram.com/hemal_2510/",
      club_lin: "https://www.linkedin.com/in/hemal-vinod/",
      website: "",
    },
    {
      club_name: "Robotics",
      head: "Ananya Shubhangi Sinha",
      post: "President",
      img: robo,
      club_insta: "https://www.instagram.com/ananyassinha?igsh=c2FyNnZwYWF6cnl1",
      club_lin: "https://www.linkedin.com/in/ananya-sinha-1721ba327?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      website: "",
    },
    {
      club_name: "Biocrats Club",
      head: "Ayushi Rawat",
      post: "Club Head",
      img: Biocrats,
      club_insta: "https://www.instagram.com/ayushirawat._",
      club_lin: "http://www.linkedin.com/in/ayushi-rawat-aa8002263",
      website: "",
    },
  ];
  return (
    <>
    <div className="sm:hidden block h-[50vw] bg-gradient-to-r from-pink-100 from-10% via-blue-100 via-30% to-purple-100 to-90%">

    </div>
      <div
        id="hero-bg"
        style={{
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          scrollBehavior: "smooth",
        }}
        className="overflow-x-hidden relative h-[0vh] "
      >
        {/* <Image
          src={heroImage}
          alt="Hero Background"
          className="w-full border-2 border-black  h-auto absolute z-[-1] bg-blend-darken blur-sm scale-1.2"
          layout="fill"
        /> */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ y: "-100vh", opacity: 0, scale: 1.5 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 10,
          }}
        >
          <Header item={"Technical Council"} />
        </motion.div>
      </div>

      <div
        id="main-container"
        className="bg-gradient-to-r pb-[10vh] max-sm:pb-24 from-pink-100 from-10% via-blue-100 via-30% to-purple-100 to-90%"
      >
        <ScrollReveal>
          {/* <hr className="w-[15vw] pb-10 border-b-2 border-t-0 border-blue-500" />
          <hr className="w-[50vw] ml-[85vw] border-b-2 border-t-0 border-blue-500" /> */}

          <div className="flex items-center justify-center">
            <motion.h1
              className="text-white font-bold sm:mt-10 mt-5 sm:mb-0 mb-[-15vw] text-md uppercase sm:p-4 rounded-md text-center bg-gradient-to-r xs:text-base md:text-xl md:w-[21vw] sm:h-[10.25vh] md:h-[8.25vh]  from-indigo-600 to-sky-400 p-3 font-poppins"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.2,
                duration: 1,
              }}
              id="techClub"
            >
              Club Heads
            </motion.h1>
          </div>
        </ScrollReveal>

        <div
          id="council"
          className="flex mt-30 flex-wrap place-content-center gap-0.5   "
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
              `}
              key={index}
            >
              <ScrollReveal>
                {/* <div className="flex justify-end px-4 pt-4">
              <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                  <span className="sr-only">Open dropdown</span>
                  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                      <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                  </svg>
              </button>
        
              <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                  <ul className="py-2" aria-labelledby="dropdownButton">
                  <li>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                  </li>
                  <li>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
                  </li>
                  <li>
                      <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                  </li>
                  </ul>
              </div>
              </div> */}
                <motion.div
                  className="flex flex-col items-center pb-10 cursor-pointer "
                  whileHover={{ scale: 1.05, filter: "brightness(1.2)" }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    whileTap={{ scale: 0.9, filter: "brightness(0.85)" }}
                    className="img-cont lg:w-60 lg:h-60 md:w-40 md:h-40 sm:w-30 sm:h-40 md:flex-auto flex items-center justify-center lg:mb-5 md:m-2 xs:w-40 xs:h-40 cursor-pointer hover:shadow-xl xxs:h-40 "
                  >
                    <Image
                      className=" lg:w-[25vw] sm:w-[20vw] xxs:h-[30vw] sm:mt-1 lg:mt-1 sm:pb-2 md:pb-0 border-2 border-indigo-500 md:mt-1 md:h-[90%] shadow-2xl"
                      src={item.img.src}
                      alt={item.head}
                      width={200}
                      height={200}
                      unoptimized // "unoptimized" -- very CRUCIAL
                    />
                  </motion.div>
                  <div className="heading-cont lg:w-60 lg:h-12 sm:w-40 sm:h-8 md:w-50 md:h-10 xxs:w-[50vw] sm:mt-1 mt-[-2vw] items-center justify-center ">
                    <h4 className="mb-1 lg:text-lg md:text-md text-xs lg:font-medium text-center dark:text-white pt-0.5 sm:mt-1 text-white ">
                      <span className="rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 sm:px-2 ">
                        {item.head}
                      </span>
                    </h4>
                    <div>
                      <h3 className="my-0.5 lg:text-md text-sm md:text-md lg:font-small text-center text-gray-800 underline underline-offset-0.5">
                        {item.post}
                      </h3>
                      <h2 className={`my-0.5 lg:text-md md:text-md lg:font-small text-center ${item.club_name.length>18?'sm:text-sm text-xs px-5  ':'text-sm'} text-gray-800`}>
                        {item.club_name}
                      </h2>
                    </div>
                    <div className="flex items-center justify-center pt-2 gap-3 ">
                      <a href={item.club_lin} target="_blank">
                        <Image
                          src={li_icon}
                          unoptimized
                          alt="Li. Icon"
                          width={25}
                        />
                      </a>

                      <a href={item.club_insta} target="_blank">
                        <Image
                          src={insta_icon}
                          unoptimized
                          alt="Insta Icon"
                          width={24}
                        />
                      </a>
                    </div>
                  </div>
                  <div className="w-50 h-12 mb-10 mt-1 flex items-center justify-center cursor-pointer  ">
                    {/* <motion.button
                      className="px-4 py-2 text-sm font-medium text-center text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 rounded-lg cursor-pointer md:block lg:block xl:block scroll-smooth sm:hidden"
                      whileTap={{ filter: "brightness(1.2)" }}
                    >
                      {item.post}
                    </motion.button> */}
                  </div>
                </motion.div>
              </ScrollReveal>
            </div>
          ))}
        </div>
        {/* <div className="h-[5vh] relative"></div> */}
      </div>
    </>
  );
}
