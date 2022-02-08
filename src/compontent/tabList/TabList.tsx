import React from "react"
import { useState } from "react"
import styles from "./tablist.module.css"
interface propsInterface {
  tabList: Array<string>,
  children?: any
}

export default function TabList(props: propsInterface) {
  console.log(props);
  const [currentIndex, setcurrentIndex] = useState(0);
  const [OffsetLong, setOffsetLong] = useState(0);//滚动偏移量
  const domLen = document.body.clientWidth;
  const domHeight = document.body.clientHeight;
  // let startOffest  =0 ;
  const [startOffset, setstartOffset] = useState(0)//滚动开始位置
  const [svgMoveOffset, setsvgMoveOffset] = useState(0)
  const [offsetLastMinus, setoffsetLastMinus] = useState(0) //每一帧 保存 offset 距离 计算速度
  function changeBar(i:number){
    setcurrentIndex(i)
  }
  function touchStart(e:any){
    console.log(e);
    e.nativeEvent.stopPropagation()
    setstartOffset(e.changedTouches[0].clientX)
  }
  function touchMove(e:any){
    e.nativeEvent.stopPropagation()
    let time = requestAnimationFrame(()=>{ 
          //超出边界  
          if((currentIndex==0&& e.changedTouches[0].clientX-startOffset>0)||
          (currentIndex==props.tabList.length-1&& e.changedTouches[0].clientX-startOffset<0)){
            // svg动画
            let offsetLong= e.changedTouches[0].clientX - startOffset
            // e.changedTouches[0].clientX - startOffset
            setsvgMoveOffset(Math.pow(offsetLong,.8) )
            
           return
          }
      setoffsetLastMinus(e.changedTouches[0].clientX)
        setOffsetLong( offsetLastMinus-startOffset)



        cancelAnimationFrame(time)
     })
    
 }
 function touchEnd(e:any){
  e.nativeEvent.stopPropagation()
         //超出边界  ()
  if((currentIndex==0&& e.changedTouches[0].clientX-startOffset>0)||
  (currentIndex==props.tabList.length-1&& e.changedTouches[0].clientX-startOffset<0)){
    let long = svgMoveOffset;
    let time= setInterval(()=>{ //20次结束
      setsvgMoveOffset((e)=>{
        if(e<=0){
          clearInterval(time)
          return 0
        }else{
         return e- long/20
        }
        
      }
        )
     
      
    },20)
    // setTimeout(()=>{
    //   setsvgMoveOffset(svgMoveOffset - 20)
    // })
    // setTimeout(()=>{
    //   setsvgMoveOffset(svgMoveOffset - 20)
    // },12)
    // setTimeout(()=>{
    //   setsvgMoveOffset(svgMoveOffset - 20)
    // },1221)
    // setTimeout(()=>{
    //   setsvgMoveOffset(svgMoveOffset - 20)
    // },122)
  
   return
  }
  let endOffset = e.changedTouches[0].clientX
  setOffsetLong( endOffset-startOffset)
  let tenMinunsLong = endOffset - offsetLastMinus;
  if(Math.abs(tenMinunsLong)>10 ||Math.abs(OffsetLong)>domLen/2 ){
    if(OffsetLong>0){
       setOffsetLong(domLen)
    }else{
      setOffsetLong(-domLen)
    }
   
   let time = setTimeout(()=>{
     if( OffsetLong>0 ){
      setcurrentIndex(currentIndex-1)
    }else if( OffsetLong<0){
      setcurrentIndex(currentIndex+1)
    }
    setOffsetLong(0)
    clearTimeout(time)
    },200)
    // if( OffsetLong>0 || Math.abs(OffsetLong)>domLen/2 ){
    //   setcurrentIndex(currentIndex-1)
    // }else if( OffsetLong<0 || Math.abs(OffsetLong)>domLen/2 ){
    //   setcurrentIndex(currentIndex+1)
    // }
    
    // setOffsetLong(0)
  }else{
    setTimeout((e)=>{
       setOffsetLong(0)
    },100)
  }
}
  return (
    <div className="all">
      <div className={styles.all_header}>
        {props.tabList.map((e, i) => {
          return (
            <div 
            key={e}
            onClick={()=>changeBar(i)}
            style={{
              fontSize: currentIndex === i ? "22px" : "18px",
              fontWeight: currentIndex === i ? "500" : "400",
              letterSpacing: 4,
              position: "relative"
            }} >
              {e}
              <div style={{
                display: currentIndex !== i ? "none" : "block"
              }} className={styles.tabitem_choose}>
              </div>
            </div>
          )
        })}
        <img style={{
          width: ".4rem"
        }} src="http://1.116.252.29/search.png"
          title="搜索"
          alt="" />
      </div>
      <div className={styles.content}>
        <div className={styles.content_scroll}
         onTouchStart={touchStart}
         onTouchMove={touchMove}
         onTouchEnd={touchEnd}
        style={{
            transform:  'translateX(calc( '+ -100 * currentIndex+'%' + " + " + (OffsetLong+"px")+"))"
        }}>

      
        <div className={styles.boy_content}>
          {props.children && props.children[0]}
        </div>
        <div className={styles.girl_content}>
          {props.children && props.children[1]}
        </div>
      </div>  
      
      
      </div>
  
  
  <div className={styles.svg_anima}>
    <svg xmlns="http://www.w3.org/2000/svg" 
    style={{
      width:svgMoveOffset+"px",
      height:"100vh"

    }}
      version="1.1">
      <path d={`M 0,0 Q ${svgMoveOffset},${domHeight/2} 0,${domHeight} Z`} stroke-width="2" fill="#fff">

      </path>
    </svg>
  </div>
  
  
    </div>

  )
}