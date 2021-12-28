import React from 'react';
import { ReactComponent as Skillsvg } from "./svgs/skill.svg";

const Skills = () => {
    return (
        <section id="skill" className='flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-5xl mx-auto my-6 py-4'>
        <Skillsvg/>
         <div className="p-10">
              <span className="text-3xl font-bold text-center block mx-auto my-6">Skills</span>
              <div className="p-5">
                <li>Designing websites</li>
                <li>Creating responsive website wireframes</li>
                <li>Designing app wireframes</li>
                <li>Writing code with HTML, CSS, Python, R, C, C++</li>
              </div>
        </div>
        </section>
    );
};

export default Skills;
