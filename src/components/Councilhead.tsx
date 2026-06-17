"use client";

import Image from "next/image";

const secretaries = [
  {
    name: "Moksha Tyagi",
    role: "PRESIDENT \nSTUDENT`S GYMKHANA",
    image: "/President.jpeg",
    alt: "President Student`s Gymkhana",
    linkedin:
      "https://www.linkedin.com/in/moksha-tyagi-220406330/",
    email: "president.sg@iiti.ac.in",
  },
  {
    name: "Sohil Dangi",
    role: "GENERAL SECRETARY \nCULTURALS",
    image: "/GS Cult.jpg",
    alt: "GS Cultural Affairs",
    linkedin:
      "https://www.linkedin.com/in/sohil-dangi/",
    email: "gs.culturals@iiti.ac.in",
  },
  {
    name: "Kavyansh Raj Singh",
    role: "GENERAL SECRETARY \nACADEMIC AFFAIRS UG",
    image: "/GS Acads Ug.png",
    alt: "GS Academics UG",
    linkedin:
      "https://www.linkedin.com/in/kavyanshsingh/",
    email: "gs.acad.ug@iiti.ac.in",
  },
  {
    name: "Badal singh",
    role: "GENERAL SECRETARY \nHOSTEL AFFAIRS",
    image: "/GS Hostel.png",
    alt: "GS Hostel Affairs",
    linkedin:
      "https://www.linkedin.com/in/badal-singh-b659a0319/",
    email: "gs.hostel@iiti.ac.in",
  },
  {
    name: "Yogendra Bihare",
    role: "GENERAL SECRETARY \nMESS, CAFETARIA AND ALLIED SERVICES",
    image: "/GS MAC.jpg",
    alt: "GS MAC",
    linkedin:
      "https://www.linkedin.com/in/yogendra-bihare-b91b25251/",
    email: "gs.dining@iiti.ac.in",
  },
  {
    name: "Dhruv Bhardwaj",
    role: "GENERAL SECRETARY \nSCIENCE AND TECHNOLOGY",
    image: "/GS SnT.jpeg",
    alt: "GS Science and Technology",
    linkedin:
      "https://www.linkedin.com/in/dhruv-bhardwaj-b82b0631b/",
    email: "gs.scitech@iiti.ac.in",
  },
  {
    name: "Isha Sharma",
    role: "GENERAL SECRETARY \nACADEMIC AFFAIRS PG",
    image: "/GS Acad Pg.jpeg",
    alt: "GS Academics PG",
    linkedin:
      "https://www.linkedin.com/in/isha-sharma-a92b7a1a2/",
    email: "gs.acad.pg@iiti.ac.in",
  },
  {
    name: "Vishal Shakya",
    role: "GENERAL SECRETARY \nCONSULTING, OUTREACH AND ALUMNI",
    image: "/GS COA.jpg",
    alt: "GS COA",
    linkedin:
      "https://www.linkedin.com/in/vishal-shakya-a3872628b/",
    email: "gs.coa@iiti.ac.in",
  },
  {
    name: "Lakshya Shukla",
    role: "GENERAL SECRETARY \nSPORTS AFFAIRS",
    image: "/GS Sports.jpg",
    alt: "GS Sports Affairs",
    linkedin:
      "https://www.linkedin.com/in/lakshya-shukla-853542345/",
    email: "gs.sports@iiti.ac.in",
  },
];

function SocialIcons({
  linkedin,
  email,
}: {
  linkedin: string;
  email: string;
}) {
  return (
    <div className="flex justify-center pt-2 space-x-4 align-center text-blue-900">
      <a
        rel="noopener noreferrer"
        href={linkedin}
        aria-label="Linkedin"
        className="p-2 rounded-md"
        target="_blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="currentColor"
          className="bi bi-linkedin"
          viewBox="0 0 16 16"
        >
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
        </svg>
      </a>

      <a
        rel="noopener noreferrer"
        href={`mailto:${email}`}
        aria-label="Email"
        className="p-2 rounded-md"
        target="_blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
          />
        </svg>
      </a>
    </div>
  );
}

function SecretaryCard({
  name,
  role,
  image,
  alt,
  linkedin,
  email,
}: {
  name: string;
  role: string;
  image: string;
  alt: string;
  linkedin: string;
  email: string;
}) {
  return (
    <div className="flex bg-[#abdbe3] flex-col justify-center max-w-xs p-6 my-2 shadow-md rounded-xl sm:px-12 border-4 border-blue-800 hover:border-white justify-self-center max-[469px]:w-[80%]">
      <Image
        src={image}
        alt={alt}
        width={100}
        height={100}
        className="w-44 h-44 mx-auto rounded-full aspect-square border-2 border-blue-800"
      />

      <div className="space-y-4 text-center divide-y divide-gray-700">
        <div className="my-2 space-y-1">
          <h2 className="text-xl font-semibold sm:text-2xl text-blue-900 uppercase">
            {name}
          </h2>

          <p className="px-5 text-xs sm:text-base dark:text-gray-400 whitespace-pre-line">
            {role}
          </p>
        </div>

        <SocialIcons linkedin={linkedin} email={email} />
      </div>
    </div>
  );
}

export default function CounciHeads() {
  return (
    <section className="py-12 bg-[url(/bg4.jpg)] bg-cover">
      <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-blue-200">
        Our Secretaries
      </h1>

      <div className="grid grid-cols-3 gap-2 py-6 max-[1128px]:grid-cols-3 max-[845px]:grid-cols-2 max-[469px]:grid-cols-1 justify-center w-[80%] mx-auto">
        {secretaries.map((secretary, index) => (
          <SecretaryCard key={index} {...secretary} />
        ))}
      </div>
    </section>
  );
}