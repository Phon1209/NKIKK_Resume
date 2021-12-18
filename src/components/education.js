import React from "react";

const Education = () => {
  return (
    <section className="flex flex-row p-3 justify-between my-12">
      <div className="h-auto">
        <svg
          className="h-full"
          width="448"
          height="406"
          viewBox="0 0 448 406"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M336 305.643L224 368.643L112 305.643V239.081L80 221.303V324.357L224 405.357L368 324.357V221.303L336 239.081V305.643Z"
            fill="#354E81"
          />
          <path
            d="M224 0.977051L0 117.125V144.859L224 269.3L416 162.637V251H448V117.125L224 0.977051ZM384 143.808L352 161.585L224 232.7L96 161.585L64 143.808L41.821 131.486L224 37.0231L406.179 131.486L384 143.808Z"
            fill="#354E81"
          />
        </svg>
      </div>
      <div className="m-10 p-3 my-auto">
        <span className="text-3xl font-bold">Education</span>
        <p className="text-2xl py-4">
          Computer Engineering, Chulalongkorn University
        </p>
      </div>
    </section>
  );
};

export default Education;
