import React from "react";
import { ReactComponent as Rstudiosvg } from "./svgs/rstudio.svg";
import { ReactComponent as Figmasvg } from "./svgs/figma.svg";
import { ReactComponent as Vscodesvg } from "./svgs/vscode.svg";
import { ReactComponent as Bgrightsvg } from "./svgs/bg_tool_right.svg";
import { ReactComponent as Bgleftsvg } from "./svgs/bg_tool_left.svg";

const Tools = () =>{
  return (
    <section className="relative w-full border-8"
      style={{
      overflow:"hidden"
    }}>
      
      <Bgleftsvg style={{
        position: "absolute",
        left:"-100",
        top: "70%",
        transform: "translate(0,-50%)",
        height:"100%",
        zIndex: "-1"
      }} />
      <Bgrightsvg style={{
        position: "absolute",
        right:"-400",
        top: "50%",
        transform: "translate(0,-50%)",
        height:"100%",
        zIndex: "-1"
      }}/>
      <div className="container py-4 mx-auto flex flex-col">
        
        <span className="text-3xl font-bold text-center block mx-auto my-6">
                Tools
            </span>
        
        <div className="w-4/5 mx-auto flex flex-col  items-center justify-between p-6 md:flex-row ">

          
          <div className="item-tool">
            <div className="icon-item-tool"><Rstudiosvg/></div>
            <p>RStudio</p>
          </div>
          
          <div className="item-tool"
          >
            <div className="icon-item-tool"><Figmasvg/></div>
            <p>Figma</p>
          </div>
          
          <div className="item-tool">
          <div className="icon-item-tool"><Vscodesvg/></div>
            <p>VS code</p>
          </div>
        </div>
      </div>
      
    </section>
  ); 
  
};

export default Tools;
