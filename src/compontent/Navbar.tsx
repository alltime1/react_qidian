import React from 'react';
import { useState } from 'react';
interface propsBar {
  icon: string,
  name: string,
  [key:string]:string,
}
interface propsAll {
  barItem: propsBar[],
  changeBar:Function
}
function Navbar(props: propsAll) {
  const [currentIndex, setcurrentIndex] = useState(0)
  function chooseNav(i: number) {
    setcurrentIndex(i)
    props.changeBar(i)
  }
  return (
    <div style={{
      position:"absolute",
      left:0,
      bottom:0,
      width:"100%",
      background:"#fff",
      zIndex:100
    }}>
      <ul style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "0.1rem .4rem"
      }}>
        {props.barItem.map((element: propsBar, i: number) => {
          return (
            <li key={i}
              onClick={() => { chooseNav(i) }}
              style={
                {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"

                }}>
              <img 
              style={{
                color: currentIndex == i ? "red" : "#000"
              }} 
              src={
                element["icon"+ (currentIndex == i ? "_choose":"")]
              
              }
                
                />
              <div style={{
                marginTop: ".1rem",
                color: currentIndex == i ? "red" : "#000"
              }}>
                {element.name}
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default Navbar;
