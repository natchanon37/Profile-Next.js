import React from "react";
import { Element } from "react-scroll";
import Section from "../components/section";

const home = () => {
  const title = `text-4xl md:text-5xl font-extrabold font-Teko  text-transparent dark:bg-clip-text bg-gradient-to-r dark:from-indigo-300 dark:via-purple-700 dark:to-pink-600  bg-clip-text bg-gradient-to-r from-gray-800 via-grey-700 to-gray-500 font-semibold`;
  const description = `text-[#ebebeb] container-[400px] text-4xl mt-[0.8rem] mb-[2.5rem] `;
  return (
    <Element i="index" name="index">
      <Section>
        <div className="flex items-center  justify-center h-screen dark:bg-[#181818] pt-32 ">
          <div className="relative flex-col items-center justify-center space-y-4 ">
            <div className={`${title} `}>
              Hello I&rsquo;m Non <br />
              Software engineer
              <br /> Front End Developer <br /> Based in Japan!
            </div>
          </div>
        </div>
      </Section>
    </Element>
  );
};

export default home;
