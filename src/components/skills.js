import React from 'react';
import { ReactComponent as Skillsvg } from "./svgs/skill.svg";

const Skills = () => {
    return (
        <section>
          <Skillsvg/>
            <div className="">
        <span>Skills</span>
        <div className="">
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
