import React from "react";
import "./../output.css";
import Nkikk from "./../assets/images/nkikk.png";


const Bio = () => {
  return (
    <section className="flex flex-col md:flex-row p-4 items-center mx-auto w-full"
      style={{
        alignItem: "center",
        justifyContent: "center"
    }}>
      <div className="m-8 p-2">
        <span className="text-5xl font-bold">Hi, I'm Nantita Kik!</span>
        <p className="text-xl py-3">
          I'm UI/UX designer based in Thailand. I’m focusing on creating user-friendly interface through design.
        </p>
      </div>
      <img src={Nkikk} alt="" className="w-1/2" />
    </section>
  );
};

export default Bio;
