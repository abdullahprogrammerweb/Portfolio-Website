import project_1 from "../assets/pro-1.jpg"
import project_2 from "../assets/pro-2.jpg"
import project_3 from "../assets/pro-3.jpg"
import project_4 from "../assets/pro-4.jpeg"
import project_5 from "../assets/pro-5.png"
import project_6 from "../assets/pro-6.png"
              

      
import React, { useState } from "react";

import { projects, filters } from "../data";
import Div from "./Div";

const Portfolio = () => {
    const [selectedTag, setSelectedTag] = useState("all");
    const [projectData, setProjectData] = useState(projects);

    const filterHandler = (tag) => {
        setSelectedTag(tag);
        let filteredProjects = [];
        if (tag === "all") {
            filteredProjects = projects;
        } else {
            filteredProjects = projects.filter((p) => p.tags.includes(tag));
        }
        setProjectData(filteredProjects);
    };

    return (
        <div id="work" className="mt-10 relative">
            {/* SECTION HEADING START */}
            <Div className="mb-10">
                <div className="flex text-center justify-center gap-2 md:gap-0 md:flex-col text-[40px] md:text-[90px] 2xl:text-[120px] leading-[40px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase text-gradient mb-2">
                    Latest Projects
                </div>
                <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-[#CCCCCC] text-center">
                My secret of success lies in offering high-quality services that enable your brand to reach its peak
                </div>
            </Div>
            {/* SECTION HEADING END */}

            {/* FILTER TAGS START */}
            <Div className="flex justify-start md:justify-center gap-[10px] mb-[50px] overflow-auto">
                {filters.map((item, index) => (
                    <div
                        key={index}
                        className={`bg-[#252525] rounded-lg py-[10px] px-[17px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] cursor-pointer whitespace-nowrap ${
                            selectedTag === item.id
                                ? "bg-[#EFB946] text-black"
                                : ""
                        }`}
                        onClick={() => filterHandler(item.id)}
                    >
                        {item.name}
                    </div>
                ))}
            </Div>
            {/* FILTER TAGS START */}

            {/* PROJECTS GRID START */}
            
                
                    
                        <Div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        <div class="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
  <img src={project_1} alt="Blog Post Image" class="w-full h-auto"/>
  <div class="p-4">
    <h2 class="text-2xl font-bold mb-2 text-gray-800">Movie App With All Functionality</h2>
    <p class="text-gray-700">Developed a responsive multi pages movie website using React.js. Integrated with an API, it focuses on dynamic programming..</p>
  </div>
  <div class="px-4 py-8 bg-gray-100 mt-5">
     <a href="https://movix-main-bice.vercel.app/" class="block w-full text-center bg-blue-500 text-white py-2 rounded-lg font-semibold">Preview</a>
   </div>   
  
                          </div>
                          <div class="bg-gray-50 rounded-lg shadow-lg overflow-hidden">

  <img src={project_2} alt="Blog Post Image" class="w-full h-auto"/>
  <div class="p-4">
    <h2 class="text-2xl font-bold mb-2 text-gray-800">Food Panda System Exposed</h2>
    <p class="text-gray-700">Demonstrated end-to-end Food Panda process, encompassing ordering, delivery, and
seamless operations and methods.</p>
  </div>
  <div class="px-4 py-8 bg-gray-100">
     <a href="https://food-panda-system-exposed.vercel.app/" class="block w-full text-center bg-blue-500 text-white py-2 rounded-lg font-semibold">Preview</a>
   </div>
</div>

<div class="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
   <img src={project_3} alt="Blog Post Image" class="w-full h-auto"/>
   <div class="p-4">
     <h2 class="text-2xl font-bold mb-2 text-gray-800">The PIAIC website (Institude Site) </h2>
     <p class="text-gray-700">Iam crafted my institute's website with captivating animations and full responsiveness across all devices. Thanks to cutting-edge Next.js 13   </p>
  </div>
   <div class="px-4 py-8 bg-gray-100 mt-9">
     <a href="https://piaic-institude-website.vercel.app/" class="block w-full text-center bg-blue-500 text-white py-2 rounded-lg font-semibold">Preview</a>
   </div>
 </div>
         
 <div class="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
  <img src={project_4} alt="Blog Post Image" class="w-full h-auto"/>
  <div class="p-4">
    <h2 class="text-2xl font-bold mb-2 text-gray-900">My Portfolio Website</h2>
    <p class="text-gray-700">I have created my resume website with captivating animations, full responsiveness for all devices, and incorporated the best UI/UX principles.</p>
  </div>
  <div class="p-4 bg-gray-100">
    <a href="https://portfolio-2023-main-ten.vercel.app/" class=" block w-full text-center bg-blue-500 text-white py-2 rounded-lg font-semibold">Preview</a>
  </div>
</div>
<div class="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
  <img src= {project_5}  alt="Blog Post Image" class="w-full h-auto"/>
  <div class="p-4">
    <h2 class="text-2xl font-bold mb-2 text-gray-900">The Dragon Game</h2>
    <p class="text-gray-700">I create this Dragon game with animation and fully repsonsive for all devices thanks you.</p>
  </div>
  <div class="p-4 mt-8 bg-gray-100">
    <a href="https://java-script-dragon-game-abdullahprogrammerweb.vercel.app/" class=" block w-full text-center bg-blue-500 text-white py-2 rounded-lg font-semibold">Preview</a>
  </div>
</div>
<div class="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
  
  <img src={project_6}  alt="Blog Post Image" class="w-full h-auto"/>
  <div class="p-4">
    <h2 class="text-2xl font-bold mb-2 text-gray-900">The Window 11 landing Page</h2>
    <p class="text-gray-700">I am create window 11 landing page website it is a simple but I am build for the fun</p>
  </div>
  <div class="p-4 bg-gray-100">
    <a href="https://storied-moonbeam-62ac5a.netlify.app/" class=" block w-full text-center bg-blue-500 text-white py-2 rounded-lg font-semibold">Preview</a>
  </div>
</div>
                      
                        
                        
                          </div>
                        </Div>

                
            
            {/* PROJECTS GRID START */}
        </div>
    );
};

export default Portfolio;