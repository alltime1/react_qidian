import React from 'react';
import {useState,useEffect} from 'react';
import './App.css';
import Navbar from './compontent/Navbar';
import BookShelf from "./view/main/bookShelf/BookShelf"
import Choice from './view/main/choice/Choice';

// var element = 

function App() {
  const [element, setelement] = useState(<BookShelf></BookShelf>)
    function changeBar(i:number){
  //     console.log(i);
      
    switch (i) {
      case 0:
        
        // element=<BookShelf></BookShelf>
        setelement(<BookShelf></BookShelf>)
        break; case 1:
        // element=<Choice></Choice>
        setelement(<Choice></Choice>)
        break;
        // case 2:
        //   element=<Main></Main>
        //   break;
        //   case 3:
        //     element=<Main></Main>
        //     break;
    
      default:
        break;
    }
  }
  const barItem = [
    {
      icon: require("./static/image/bookStack.svg").default,
      icon_choose:require("./static/image/bookStack2.svg").default,
      name:"书架",
    },
    {
      icon: require("./static/image/choose.svg").default,
      icon_choose:require("./static/image/choose2.svg").default,
      name:"精选",
    },
    {
      icon:require("./static/image/find.svg").default,
      icon_choose:require("./static/image/find2.svg").default,
      name:"发现",
    },
    {
      icon:require("./static/image/mine.svg").default,
      icon_choose:require("./static/image/mine2.svg").default,
      name:"我",
    },
  ]
  return (
    <div className="App">

       <Navbar changeBar={changeBar} barItem={barItem}></Navbar>
       {element}
    </div>
  );
}

export default App;
