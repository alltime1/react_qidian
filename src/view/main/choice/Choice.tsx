import React from 'react';
import TabList from "../../../compontent/tabList/TabList"
import Boy from "./boy/Boy"
function Choice() {
  const tabList:string[]=["男生","女生","胶囊","漫画","听书"]
   return (
   <div className="all">
     <TabList tabList={tabList}>
       <Boy></Boy>
       <div>
         wr
       </div>
       
     </TabList>
   </div>
   )
}

export default Choice;
