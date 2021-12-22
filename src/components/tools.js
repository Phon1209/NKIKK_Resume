import React from "react";
import { ReactComponent as Rstudiosvg } from "./svgs/rstudio.svg";
import { ReactComponent as Figmasvg } from "./svgs/figma.svg";
import { ReactComponent as Vscodesvg } from "./svgs/vscode.svg";
import { ReactComponent as Bgrightsvg } from "./svgs/bg_tool_right.svg";
import { ReactComponent as Bgleftsvg } from "./svgs/bg_tool_left.svg";

const Tools = () =>{
  return (
    <section className="relative w-full"
      style={{
      // height: "400px"
    }}>
      
      <Bgleftsvg style={{
        position: "absolute",
        left:"-25%",
        top: "50%",
        transform: "translate(0,-50%)",
        height:"100%",
        zIndex: "-1"
      }} />
      <Bgrightsvg style={{
        position: "absolute",
        right:"-30%",
        top: "50%",
        transform: "translate(0,-50%)",
        height:"100%",
        zIndex: "-1"
      }}/>
      <div className="p-6">
        
        <span className="text-3xl font-bold text-center block mx-auto my-6">
                Tools
            </span>
        
        <div className="flex flex-col items-center justify-between p-6 md:flex-row">

          
          <div className="flex flex-1 flex-col items-center m-5">
            <div className="flex flex-row items-center justify-items-center"
              style={{
              height: "100px"
            }}>
            <Rstudiosvg/>

            </div>
            <p>RStudio</p>
          </div>
          
          <div className="flex flex-1 flex-col items-center m-5">
            <Figmasvg/>
            <p>Figma</p>
          </div>
          
          <div className="flex flex-1 flex-col items-center m-5">
            <Vscodesvg/>
            <p>VS code</p>
          </div>
        </div>
      </div>
      
    </section>
  ); 
  
};

export default Tools;
