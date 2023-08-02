import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import Wrapper from "./Wrapper";

import pe1 from "../assets/sec-2-p-e-1.png";
import pe2 from "../assets/sec-2-p-e-2.png";
import Flag from '../assets/Flag.jpg'
import Div from "./Div";

const AboutMe = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [100, 0], { clamp: false });
    const y2 = useTransform(scrollY, [0, 500], [0, -200], { clamp: false });
    return (
        <div
            id="about"
            className="w-full py-[50px] md:py-[100px] bg-white text-black relative overflow-hidden"
        >
            {/* BACKGROUND ELEMENTS START */}
            <span className="sec-2-bg-gradient" />
            <motion.img className="sec-2-p-e-1" style={{ y: y1 }} src={pe1} />
            <motion.img className="sec-2-p-e-2" style={{ y: y2 }} src={pe2} />
            {/* BACKGROUND ELEMENTS END */}

            <Wrapper>
                {/* HEADING START */}
                <Div className="text-[40px] md:text-[90px] 2xl:text-[120px] leading-[52px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase mb-[25px] md:mb-[40px] 2xl:mb-[60px] flex flex-col relative">
                    <span>A Fronted Developer</span>
                    <span className="flex items-center gap-2">
                        <span>Based</span>
                        <img
                            src={Flag}
                            alt=""
                            className="w-[70px] md:w-[150px] 2xl:w-[190px] block mt-1 md:mt-2"
                        />
                        <span>In Pakistan</span>
                    </span>
                </Div>
                {/* HEADING END */}

                {/* PARAGRAPH START */}
                <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative">
                Welcome to a world where captivating design meets flawless functionality – I am your Frontend Developer extraordinaire, ready to turn your digital dreams into awe-inspiring realities. 🎨✨
                </Div>
                {/* PARAGRAPH END */}

                {/* PARAGRAPH START */}
                <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative">
                Watch as your website comes to life with fluid animations that dance and delight, user interactions that feel intuitive and gratifying, and responsiveness that adapts effortlessly to any device – big or small. 🌐💻📱
                </Div>
                {/* PARAGRAPH END */}

                {/* PARAGRAPH START */}
                <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] relative">
                So, if you're ready to embark on a magical journey into the realm of remarkable web experiences, join forces with me, and let's create frontend marvels that leave a lasting impression and keep your audience enchanted for all eternity.
                </Div>
                {/* PARAGRAPH END */}
            </Wrapper>
        </div>
    );
};

export default AboutMe;
