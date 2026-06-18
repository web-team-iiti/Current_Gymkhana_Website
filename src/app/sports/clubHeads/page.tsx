"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import Image from "next/image";
// import heroImage from "../../../../public/assests/sports/image (1).jpg";
// import clubArr from "./clubData";
import testImg from "../../../../public/assests/clubHeads/img.png";
import insta_icon from "../../../../public/assests/clubHeads/social_logo/ig_black.webp";
import li_icon from "../../../../public/assests/clubHeads/social_logo/li_blackLogo.png";
import site_icon from "../../../../public/assests/clubHeads/social_logo/site.webp";

import Header from "./header";
import badminton from "../../../../public/assests/sports_head/Parv Khandelwal_club head_badminton club.png";
import chess from "../../../../public/assests/sports_head/Shriram_ClubHead_ChessClub.jpg";
import cricket from "../../../../public/assests/sports_head/SanyamBabel_ClubHead_Cricket.jpg";
import football from "../../../../public/assests/sports_head/Aniket Baskey_Club Head_Football.jpg";
import squash from "../../../../public/assests/sports_head/Paholpreat Kaur club head squash.jpg";
import tt from "../../../../public/assests/sports_head/Aarush_club head_tabletennis.webp";
import Athletics from "../../../../public/assests/sports_head/Ayush Raj_Club Head_Athletics Club.jpg";
import aquatics from "../../../../public/assests/sports_head/Harshavardhan Pawar_Club Head_Aquatics Club.jpg";
import basketball from "../../../../public/assests/sports_head/Swarit_Clubhead_Basketball.jpg";
import volleyball from "../../../../public/assests/sports_head/Pramod_ClubHead_Volleyball.jpg";
import hockey from "../../../../public/assests/sports_head/sethumadhav_clubhead_hockey.png";
import cycling from "../../../../public/assests/sports_head/Krushna_Club-head_Cycling.jpg";
import Lawn from "../../../../public/assests/sports_head/Kavin Krishnan S_Club Head_Tennis  Club - Kavin Krishnan S.jpg";
import weightlifting from "../../../../public/assests/sports_head/gaurav.jpeg";
import yoga from "../../../../public/assests/sports_head/yoga.jpeg";


import nologo from "../../../../public/assests/sports/nologo.png"
// import test, { before } from "node:test";

export default function Hero() {
  const clubArr = [
    {
      club_name: "Athletics Club",
      head: "Ayush Raj",
      post: "Head",
      img: Athletics,
      club_insta: "https://www.instagram.com/ayushraj93jh?igsh=MXBhaTd6NDh0bzUzcQ==",
    },
    {
      club_name: "Aquatics Club",
      head: "Harshavardhan Pawar",
      post: "Head",
      img: aquatics,
      club_insta: "https://www.instagram.com/aquaticsclub.iiti/",
      website: "http://people.iiti.ac.in/~sports/aquatics/aquatics.php",
    },
    {
      club_name: "Badminton Club",
      head: "Parv Khandelwal",
      post: "Head",
      img: badminton,
      club_insta: "https://www.instagram.com/parv_khandelwal2006?igsh=MjF0c3hvYmhkOHVl&utm_source=qr",
      club_lin: "#",
      website: "http://people.iiti.ac.in/~sports/",
    },
    {
      club_name: "Basketball Club",
      head: "Swarit Porwal",
      post: "Head",
      img: basketball,
      club_insta: "https://www.instagram.com/_swarit_7?igsh=YXg1YnphZTA2enM1",
      club_lin: "#",
      website: "https://people.iiti.ac.in/~sports/basketball/basketball.php",
    },
    {
      club_name: "Chess Club",
      head: "Shriram Naik",
      post: "Head",
      img: chess,
      club_insta: "https://www.instagram.com/theberserkers_iiti/",
      club_lin: "#",
      website: "http://people.iiti.ac.in/~sports/",
    },
    {
      club_name: "Cricket Club",
      head: "Sanyam Babel",
      post: "Head",
      img: cricket,
      club_insta: "https://www.instagram.com/cricket_iiti/",
      club_lin: "#",
      website: "http://people.iiti.ac.in/~sports/",
    },
    {
      club_name: "Football Club",
      head: "Aniket Baskey",
      post: "Head",
      img: football,
      club_insta: "https://www.instagram.com/s_h_i_l_0_h?utm_source=qr",
      club_lin: "#",
      website: "http://people.iiti.ac.in/~sports/",
    },
    {
      club_name: "Squash Club",
      head: "Paholpreat Kaur",
      post: "Head",
      img: squash,
      website: "http://people.iiti.ac.in/~sports/",
      club_insta: "https://www.instagram.com/squash_club_iiti_/",
    },
    {
      club_name: "Tennis Club",
      head: "Kavin Krishnan S",
      post: "Head",
      img: Lawn,
      club_insta: "https://www.instagram.com/tennis_iiti/",
      club_lin: "#",
      website: "",
    },
    {
      club_name: "Table Tennis Club",
      head: "Aarush Bindod",
      post: "Head",
      img: tt,
      club_insta: "https://www.instagram.com/not_aaaarushh?igsh=aGo1aTFxdnQ3MmFy",
      club_lin: "#",
      website: "http://people.iiti.ac.in/~sports/",
    },
    {
      club_name: "Volleyball Club",
      head: "Pramod",
      post: "Head",
      img: volleyball,
      club_insta: "https://www.instagram.com/volleyball.iiti/?hl=en",
      club_lin: "#",
      website: "http://people.iiti.ac.in/~sports/volleyball/volleyball.php",
    },
    {
      club_name: "Yoga and Fitness Club",
      head: "Savan Gorasiya",
      post: "Head",
      img: yoga,
    },
    {
      club_name: "Cycling Club",
      head: "Krushna Satish More",
      post: "Head",
      img: cycling,
      club_insta: "https://drive.google.com/u/8/open?usp=forms_web&id=1nayfzKRzgUWURVb_BtUTlOZalbG6yOus",
    },
    {
      club_name: "Hockey Club",
      head: "SetuMadhav",
      post: "Head",
      img: hockey,
      club_insta: "https://www.instagram.com/sethumadhav_19?igsh=eWZ4bG1kNGtwNTll",
    },
    {
      club_name: "Weightlifting Club",
      head: "Gaurav Tiwari",
      post: "Head",
      img: weightlifting,
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
        className="bg-gradient-to-r pb-[10vh] from-pink-100 from-10% via-blue-100 via-30% to-purple-100 to-90%"
      >
        <ScrollReveal>
         
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
               
                <motion.div
                  className="flex flex-col items-center pb-5 cursor-pointer "
                  whileHover={{ scale: 1.05, filter: "brightness(1.2)" }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    whileTap={{ scale: 0.9, filter: "brightness(0.85)" }}
                    className="img-cont lg:w-60 lg:h-60 md:w-40 md:h-40 sm:w-30 sm:h-40 md:flex-auto flex items-center justify-center lg:mb-5 md:m-2 xs:w-40 xs:h-40 cursor-pointer hover:shadow-xl xxs:h-40 "
                  >
                    <Image
                      className=" lg:w-[25vw] sm:w-[20vw] xxs:h-[30vw] sm:mt-3 lg:mt-2 sm:pb-7 md:pb-0 border-2 border-indigo-500 md:mt-5 md:h-[90%] shadow-2xl"
                      src={item.img.src}
                      alt={item.head}
                      width={200}
                      height={200}
                      unoptimized 
                    />
                  </motion.div>
                  <div className="heading-cont lg:w-60 lg:h-12 sm:w-40 sm:h-10 md:w-50 md:h-10 xxs:w-[50vw] sm:mt-1 mt-[-2vw] items-center justify-center ">
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
                   
                  </div>
                  
                </motion.div>
              </ScrollReveal>
            </div>
          ))}
        </div>
       
      </div>
    </>
  );
}
