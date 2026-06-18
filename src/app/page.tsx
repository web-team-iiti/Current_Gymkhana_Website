"use client";

import { Button } from "@nextui-org/react";
import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import "./globals.css";
import Council from "./council/council";
const CouncilHead = dynamic(() => import('../components/Councilhead'),{
  ssr :false,
  loading :()=> <p className="text-center text-2xl font-bold">Loading...</p>

})
const ClubsHomePage = dynamic(() => import("@/components/ClubsHomePage"),{
  ssr :false,
  loading :()=> <p className="text-center text-2xl font-bold">Loading...</p>

})

import About from "@/components/about";


export default function Home() {
 
  function LearnMore() {
    window.location.assign("https://www.iiti.ac.in/");
  }
  return (
    <>
    
    <div className=" w-full top-0 h-screen bg-[url('/Hero.jpg')] -z-10 bg-cover bg-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="absolute top-8 left-6 z-20 invisible lg:visible"
      >
        <Image
          className="bg-contain"
          src="/main_logo.png"
          width={220}
          height={220}
          alt="Gymkhana main Logo"
        />
      </motion.div>
     
      <div className="flex flex-col bg-opacity-0 items-center justify-center w-full h-full px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="relative z-30 w-fit max-w-[95%] md:max-w-[90%] mx-auto bg-black/10 backdrop-blur-sm p-6 md:p-10 rounded-3xl text-center flex flex-col items-center"
        >
          <div className="flex flex-wrap justify-center items-center gap-x-4 lg:gap-x-6 w-full">
            <p className="text-7xl 2xl:text-8xl min-[1800px]:text-9xl font-extrabold text-amber-400 max-sm:text-5xl">
              {`Student's`}
            </p>
            <p className="text-7xl 2xl:text-8xl min-[1800px]:text-9xl font-extrabold text-white max-sm:text-5xl">
              Gymkhana
            </p>
          </div>
          <p className="text-6xl lg:text-7xl mt-4 lg:mt-6 font-bold text-white w-full max-sm:text-5xl text-center">IIT Indore</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <Button
            className="w-36 bg-amber-400 h-12 mt-40 text-md bg-opacity-90 text-white mx-auto hover:scale-105 transition-transform"
            radius="full" 
            onClick={LearnMore}
          >
            Know more
          </Button>
        </motion.div>
      </div>
      </div>
     
      <Council />
      <CouncilHead />
      <About/>
      
     <ClubsHomePage />
     

      
      
      
    </>
  );
}