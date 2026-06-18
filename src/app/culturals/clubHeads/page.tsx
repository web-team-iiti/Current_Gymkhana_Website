"use client"; //important for framer motion to work

import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import Image from "next/image";
// import heroImage from "../../../../public/assests/clubHeads/hero.png";
// import clubArr from "./clubData";
import Header from "./header";
import testImg from "../../../../public/assests/clubHeads/img.png";
import insta_icon from "../../../../public/assests/clubHeads/social_logo/ig_black.webp";
import li_icon from "../../../../public/assests/clubHeads/social_logo/li_blackLogo.png";
import site_icon from "../../../../public/assests/clubHeads/social_logo/site.webp";

import aaina from "../../../../public/assests/cult_clubs_heads/mapansh.jpeg";
import dance from "../../../../public/assests/cult_clubs_heads/payam.jpg";
import avana from "../../../../public/assests/cult_clubs_heads/mohnish.jpeg";
import cinephiles from "../../../../public/assests/cult_clubs_heads/harsh.jpg";
import debsoc from "../../../../public/assests/cult_clubs_heads/sanskriti.jpg";
import ebsb from "../../../../public/assests/cult_clubs_heads/yalavarthi.jpg";
import game from "../../../../public/assests/cult_clubs_heads/rubal.jpg";
import kalakriti from "../../../../public/assests/cult_clubs_heads/shruti.jpg";
import music from "../../../../public/assests/cult_clubs_heads/rohan.jpg";
import mystic from "../../../../public/assests/cult_clubs_heads/yashmodi.jpeg";
import srijan from "../../../../public/assests/cult_clubs_heads/ashish.jpg";
import vlr from "../../../../public/assests/cult_clubs_heads/hemant.jpeg";
import prakriti from "../../../../public/assests/cult_clubs_heads/vikas.png";
import quiz from "../../../../public/assests/cult_clubs_heads/ayush.png";
import bga from "../../../../public/assests/cult_clubs_heads/saurabh.jpeg";
import nologo from "../../../../public/assests/sports/nologo.png"
import literary from "../../../../public/assests/cult_clubs_heads/aradhya.jpg";

export default function Hero() {
  const clubArr = [
    {
      club_name: "AAINA",
      head: "Mapansh Phogat", // AAINA (Dramatics Club)
      post: "Head",
      img: aaina,
      club_insta: "https://www.instagram.com/dramaticsclubiiti/",
      club_lin: "https://www.linkedin.com/in/aaina-iit-indore-832082273/",
      website: "",
    },
    {
      club_name: "Avana",
      head: "Mohnish Raj", // Avana Club
      post: "Head",
      img: avana,
      club_insta: "https://www.instagram.com/avana_iiti/",
      club_lin: "https://in.linkedin.com/in/mohnish-raj-77b9aa230",
      website: "",
    },
    {
      club_name: "Cinephiles",
      head: "Harsh Pathak", // Cinephiles (Film making Club)
      post: "Head",
      img: cinephiles,
      club_insta: "https://www.instagram.com/cinephiles_iiti/",
      club_lin: "https://www.linkedin.com/in/harsh-pathak-12b1a7318?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      website: "",
    },
    {
      club_name: "Kaizen Dance Crew",
      head: "Sai venkat", // Kaizen Dance Crew (Dance club)
      post: "Head",
      img: dance,
      club_insta: "https://www.instagram.com/d_alphazcrew/",
      club_lin: "https://www.linkedin.com/in/sai-venkata-krishna-payam-676966335?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app#",
      website: "",
    },
    {
      club_name: "Debsoc",
      head: "Sanskriti Jain", // DebSoc
      post: "Head",
      img: debsoc,
      club_insta: "https://www.instagram.com/debsociiti/",
      club_lin: "https://www.linkedin.com/in/sanskriti-jain-000588319/",
      website: "",
    },
    {
      club_name: "EBSB",
      head: "Yalavarthi Udayasri", // EBSB Club
      post: "Head",
      img: ebsb,
      club_insta: "https://www.instagram.com/ebsbclub_iiti/",
      club_lin: "https://www.linkedin.com/company/ek-bharat-shreshtha-bharat-iit-indore/",
      website: "",
    },
    {
      club_name: "Gaming Club",
      head: "Rubal Dhoke", // Gaming Club
      post: "Head",
      img: game,
      club_insta: "https://www.instagram.com/gamingclubiiti/",
      club_lin: "https://www.linkedin.com/in/rubal-dhoke-978a64312/",
      website: "",
    },
    {
      club_name: "Kalakriti",
      head: "Shruti Turare", // Kalakriti Club
      post: "Head",
      img: kalakriti,
      club_insta: "https://www.instagram.com/kalakriti_iiti/",
      club_lin: "https://www.linkedin.com/in/shruti-turare-a5184a286/",
      website: "",
    },
    {
      club_name: "Music Club",
      head: "Rohan Jain", // Music Club (choose one, see note below)
      post: "Head",
      img: music,
      club_insta: "https://www.instagram.com/themusicclub.iiti/",
      club_lin: "https://www.linkedin.com/in/rohan-jain-61804b320?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      website: "",
    },
    {
      club_name: "Mystic Hues",
      head: "Yash Modi", // Mystic Hues
      post: "Head",
      img: mystic,
      club_insta: "https://www.instagram.com/mystichues?igsh-N2RxeWU4dmcyb3L/3",
      club_lin: "https://www.linkedin.com/in/yash-modi-6b8644332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      website: "",
    },
    {
      club_name: "Prakriti Club",
      head: "Vikas", // Prakriti Club
      post: "Head",
      img: prakriti,
      club_insta: "https://www.instagram.com/prakriti.iiti/",
      club_lin: "https://www.linkedin.com/in/vikas-b76876325?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      website: "",
    },
    {
      club_name: "Srijan Club",
      head: "Aashish Sharma", // Srijan Club
      post: "Head",
      img: srijan,
      club_insta: "https://www.instagram.com/srijan_iit_indore/",
      club_lin: "https://www.linkedin.com/in/aashish-sharma-2a0b56379",
    },
    {
      club_name: "VLR",
      head: "Hemant Santosh Yadav", // VLR Club
      post: "Head",
      img: vlr,
      club_insta: "https://www.instagram.com/vlr_iiti/",
      club_lin: "https://www.linkedin.com/in/hemant-yadav-a86497327/",
    },
    {
      club_name: "Literary Club",
      head: "Aaradhya Sharma", // The literary club
      post: "Head",
      img: literary,
      club_insta: "https://www.instagram.com/thelitclub.iiti/",
      club_lin: "https://www.linkedin.com/in/aars10?utm_source=share_via&utm_content=profile&utm_medium=member_android#",
    },
    {
      club_name: "Quiz Club",
      head: "Aayush Sharma",
      post: "Head",
      img: quiz,
      club_insta: "#",
      club_lin: "https://in.linkedin.com/in/aayush-sharma-88b1b3321",
    },
    {
      club_name: "BGA Club ",
      head: "Saurabh Yadav",
      post: "Head",
      img: bga,
      club_insta: "#",
      club_lin: "#",
    },
  ];
  // const clubArr = [
  //   {
  //     club_name: "AAINA",
  //     head: "Mapansh Phogat", // AAINA (Dramatics Club)
  //     post: "Head",
  //     img: aaina,
  //     club_insta: "https://www.instagram.com/dramaticsclubiiti/",
  //     club_lin: "https://www.linkedin.com/in/aaina-iit-indore-832082273/",
  //     website: "",
  //   },
  //   {
  //     club_name: "Avana",
  //     head: "Samarth", // Avana Club
  //     post: "Head",
  //     img: avana,
  //     club_insta: "https://www.instagram.com/avana_iiti/",
  //     club_lin: "https://www.linkedin.com/company/avana-iit-indore/",
  //     website: "",
  //   },
  //   {
  //     club_name: "Cinephiles",
  //     head: "Harsh Pathak", // Cinephiles (Film making Club)
  //     post: "Head",
  //     img: cinephiles,
  //     club_insta: "https://www.instagram.com/cinephiles_iiti/",
  //     club_lin: "#",
  //     website: "",
  //   },
  //   {
  //     club_name: "Kaizen Dance Crew",
  //     head: "Sai venkat", // Kaizen Dance Crew (Dance club)
  //     post: "Head",
  //     img: dance,
  //     club_insta: "https://www.instagram.com/d_alphazcrew/",
  //     club_lin: "#",
  //     website: "",
  //   },
  //   {
  //     club_name: "Debsoc",
  //     head: "Sanskriti Jain", // DebSoc
  //     post: "Head",
  //     img: debsoc,
  //     club_insta: "https://www.instagram.com/debsociiti/",
  //     club_lin: "https://www.linkedin.com/company/the-debating-society-iit-indore/",
  //     website: "",
  //   },
  //   {
  //     club_name: "EBSB",
  //     head: "Yalavarthi Udayasri", // EBSB Club
  //     post: "Head",
  //     img: ebsb,
  //     club_insta: "https://www.instagram.com/ebsbclub_iiti/",
  //     club_lin: "https://www.linkedin.com/company/ek-bharat-shreshtha-bharat-iit-indore/",
  //     website: "",
  //   },
  //   {
  //     club_name: "Gaming Club",
  //     head: "Rubal Dhoke", // Gaming Club
  //     post: "Head",
  //     img: game,
  //     club_insta: "https://www.instagram.com/gamingclubiiti/",
  //     club_lin: "https://www.linkedin.com/company/esports-and-gaming-club-iit-indore",
  //     website: "",
  //   },
  //   {
  //     club_name: "Kalakriti",
  //     head: "Vedavarshith Chunduru", // Kalakriti Club
  //     post: "Head",
  //     img: kalakriti,
  //     club_insta: "https://www.instagram.com/kalakriti_iiti/",
  //     club_lin: "https://www.linkedin.com/company/kalakriti-iit-indore/",
  //     website: "",
  //   },
  //   {
  //     club_name: "Music Club",
  //     head: "Rohan Jain", // Music Club (choose one, see note below)
  //     post: "Head",
  //     img: music,
  //     club_insta: "https://www.instagram.com/themusicclub.iiti/",
  //     club_lin: "https://www.linkedin.com/company/music-club-iit-indore/",
  //     website: "",
  //   },
  //   {
  //     club_name: "Mystic Hues",
  //     head: "Yash Modi", // Mystic Hues
  //     post: "Head",
  //     img: mystic,
  //     club_insta: "https://www.instagram.com/mystichues?igsh-N2RxeWU4dmcyb3L/3",
  //     club_lin: "https://www.linkedin.com/company/mystic-hues/",
  //     website: "",
  //   },
  //   {
  //     club_name: "Prakriti Club",
  //     head: "Vikas", // Prakriti Club
  //     post: "Head",
  //     img: prakriti,
  //     club_insta: "https://www.instagram.com/prakriti.iiti/",
  //     club_lin: "https://www.linkedin.com/company/prakriti-wildlife-club-iiti/",
  //     website: "",
  //   },
  //   {
  //     club_name: "Srijan Club",
  //     head: "Aashish Sharma", // Srijan Club
  //     post: "Head",
  //     img: srijan,
  //     club_insta: "https://www.instagram.com/srijan_iit_indore/",
  //     club_lin: "https://www.linkedin.com/company/srijan-hindi-sahitya-samiti/",
  //   },
  //   {
  //     club_name: "VLR",
  //     head: "Hemant Santosh Yadav", // VLR Club
  //     post: "Head",
  //     img: vlr,
  //     club_insta: "https://www.instagram.com/vlr_iiti/",
  //     club_lin: "https://www.linkedin.com/company/animators-iiti/",
  //   },
  //   {
  //     club_name: "Literary Club",
  //     head: "Aaradhya Sharma", // The literary club
  //     post: "Head",
  //     img: literary,
  //     club_insta: "https://www.instagram.com/thelitclub.iiti/",
  //     club_lin: "#",
  //   },
  //   {
  //     club_name: "Quiz Club",
  //     head: "Aayush Sharma", 
  //     post: "Head",
  //     img: quiz,
  //     club_insta: "#",
  //     club_lin: "#",
  //   },
  //   {
  //     club_name: "BGA Club ",
  //     head: "Saurabh Yadav", 
  //     post: "Head",
  //     img: bga,
  //     club_insta: "#",
  //     club_lin: "#",
  //   },
  // ];
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
          <Header item={"Cultural Clubs"} />
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
                      className=" lg:w-[25vw] sm:w-[20vw] xxs:h-[30vw] sm:mt-3 lg:mt-2 sm:pb-5 md:pb-0 border-2 border-indigo-500 md:mt-5 md:h-[90%] shadow-2xl"
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
                      <h2 className={`my-0.5 lg:text-md md:text-md lg:font-small text-center ${item.club_name.length > 18 ? 'sm:text-sm text-xs px-5  ' : 'text-sm'} text-gray-800`}>
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
                  <div className="w-40 h-12 mb-10 mt-1 flex items-center justify-center cursor-pointer  ">
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
