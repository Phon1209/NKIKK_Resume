import React from 'react';
import { ReactComponent as Skillsvg } from "./svgs/skill.svg";

const Skills = () => {
    return (
        <section className='flex flex-col md:flex-row'>
        <Skillsvg/>
         <div className="py-4">
              <span className="text-3xl font-bold">Skills</span>
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
