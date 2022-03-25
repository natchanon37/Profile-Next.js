import React from "react";
import { Element } from "react-scroll";
import Section from "../components/section";

const skill = () => {
  const title = `text-xl md:text-2xl font-extrabold font-Teko  text-transparent dark:bg-clip-text bg-gradient-to-r dark:from-indigo-300 dark:via-purple-700 dark:to-pink-600  bg-clip-text bg-gradient-to-r from-gray-800 via-grey-700 to-gray-500 font-semibold `;
  return (
    <Element i="skill" name="skill">
      <Section delay={1.8}>
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="flex flex-col items-center justify-center mx-8 h-1/2">
            <div className={`${title} `}>Experienced</div>
            <ul className="mb-10 font-serif text-lg list-disc">
              <li> Portfolio website using Next.js, Tailwind</li>
              <li> Portfolio website using React, styled-components</li>
              <li>
                Opensea clone website using Next.js, Thirdweb, Sanity, Tailwind
              </li>
              <li>
                {" "}
                Automated deploy React Apps using GitHub Actions and Firebase
              </li>
              <li>
                {" "}
                Designed and builded GUI for WPF applications using C# and XAML
              </li>
              <li> WPF applications GUI Automated test using Appium</li>
              <li> Chat application using C</li>
            </ul>
            <div className={`${title} `}>Skills</div>
            <ul className="font-serif text-lg list-disc">
              <li> Japanese, Thai, English speaking </li>
              <li> Co-op working</li>
              <li>Fast learning</li>
              <li> Multiculture work</li>
            </ul>
          </div>
        </div>
      </Section>
    </Element>
  );
};

export default skill;
