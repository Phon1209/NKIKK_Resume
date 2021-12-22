import React from "react";
import { ReactComponent as Rstudiosvg } from "./svgs/rstudio.svg";
import { ReactComponent as Figmasvg } from "./svgs/figma.svg";
import { ReactComponent as Vscodesvg } from "./svgs/vscode.svg";
import { ReactComponent as Bgsvg } from "./svgs/bg_tool.svg";
import { ReactComponent as Bgleftsvg } from "./svgs/bg_tool_left.svg";

const Tools = () =>{
  return (
    <section className="relative ">
      
      <Bgleftsvg style={{
        position: "absolute",
        left:"20%",
        top: "50%",
        transform: "translate(-50%,-50%)",
        height:"30em",
        zIndex: "-1"
      }}/>
      <div className="p-6">
        
        <span className="text-3xl font-bold text-center block mx-auto my-6">
                Tools
            </span>
        
        <div className="flex flex-row items-center justify-between">

          
          <div className="flex flex-1 flex-col items-center">
            <Rstudiosvg/>
            <p>RStudio</p>
          </div>
          
          <div className="flex flex-1 flex-col items-center">
            <Figmasvg/>
            <p>Figma</p>
          </div>
          
          <div className="flex flex-1 flex-col items-center">
            <Vscodesvg/>
            <p>VS code</p>
          </div>
        </div>
      </div>
      
    </section>
  ); 
  
};

export default Tools;
