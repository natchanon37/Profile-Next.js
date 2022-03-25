import React from "react";
import { Element } from "react-scroll";
import Image from "next/image";
import me from "../assets/me.png";
import { Box, Container, useColorModeValue } from "@chakra-ui/react";
import Section from "../components/section";

const about = () => {
  const title = `text-4xl md:text-5xl font-extrabold font-Teko  text-transparent dark:bg-clip-text bg-gradient-to-r dark:from-indigo-300 dark:via-purple-700 dark:to-pink-600  bg-clip-text bg-gradient-to-r from-gray-800 via-grey-700 to-gray-500 font-semibold`;
  return (
    <Element i="about" name="about">
      <Section delay={1.2}>
        <div className="flex flex-col w-auto   items-center overflow-hidden justify-center  h-screen dark:bg-[#181818] ">
          <div className="flex items-center justify-center my-8 border-2 rounded-full dark:border-2 dark:border-slate-200">
            <Image
              src={me}
              className="flex rounded-full m"
              width={200}
              height={200}
            ></Image>
          </div>

          <div className="text-justify w-60 md:w-96 md:px-0">
            <Container className="text-lg font-SerifPro indent-3">
              My name is Natchanon Wanthong, I&apos;m a Software Developer for
              Windows applications, IoT system and Image processing based in
              Tokyo.
            </Container>
            <Container className="text-lg font-SerifPro indent-3">
              In my free time I&apos;m a self-taught frond-end and design
              Responsive website
            </Container>
          </div>
        </div>
      </Section>
    </Element>
  );
};

export default about;
