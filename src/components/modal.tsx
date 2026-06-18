"use client";
import React from "react";
import Image from "next/image";
import { Carousel, IconButton } from "@material-tailwind/react";

interface ModalProps {
  event: {
    name: string;
    gallery: string[];
  };
  imageIndex: number;
  onClose: () => void;
  onNextImage: () => void;
  onPrevImage: () => void;
}

const ModalComponent: React.FC<ModalProps> = ({
  event,
  imageIndex,
  onClose,
  onNextImage,
  onPrevImage,
}) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-black/80 backdrop-blur-md pt-16 sm:pt-8">
      <div className="h-[80vh] w-[95vw] lg:w-[85vw] lg:h-[80vh] xl:w-[75vw] xl:h-[85vh] mx-4 min-h-[300px] min-w-[300px]">
        <div className="bg-[#0f1115]/80 backdrop-blur-2xl h-full w-full px-2 sm:px-6 pb-6 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-white/10 flex flex-col">
          <div className="flex flex-row justify-between items-center py-4 px-2">
            <span className="text-2xl sm:text-3xl font-extrabold text-amber-400 tracking-wide drop-shadow-md">{event.name}</span>
            <button
              className="flex items-center justify-center h-10 w-10 bg-white/10 hover:bg-red-500 transition-colors duration-300 rounded-full text-xl text-white font-bold"
              onClick={onClose}
            >
              &#10005;
            </button>
          </div>
          <div className="relative flex-1 overflow-hidden rounded-2xl bg-black/60 border border-white/5">
            <Carousel
              placeholder={''}
              className="h-full w-full"
              prevArrow={({ handlePrev }) => (
                <IconButton
                  placeholder={''}
                  variant="text"
                  onClick={onPrevImage}
                  className="!absolute top-2/4 left-2 sm:left-4 -translate-y-2/4 bg-black/50 hover:bg-amber-500 rounded-full text-white transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                  </svg>
                </IconButton>
              )}
              nextArrow={({ handleNext }) => (
                <IconButton
                  placeholder={''}
                  variant="text"                 
                  onClick={onNextImage}
                  className="!absolute top-2/4 !right-2 sm:!right-4 -translate-y-2/4 bg-black/50 hover:bg-amber-500 rounded-full text-white transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </IconButton>
              )}
            >
              <Image
                src={event.gallery[imageIndex]}
                alt={event.name}
                width={1600}
                height={1600}
                className="mx-auto h-full w-full object-contain"
              />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
