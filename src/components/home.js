import React from "react";
import "./../App.scss";

const Home = () => {
  return (
    <div className="flex h-7">
      <div className="flex-1 bg-secondary ">
        {/* <img src="" alt="" /> */}
        <span className="text-bold text-size-heading">Nantita Chomsiri</span>
        <p className="text-normal text-size-subheading">UX/UI designer</p>
      </div>
      <div className="flex-3"></div>
    </div>
  );
};

export default Home;
