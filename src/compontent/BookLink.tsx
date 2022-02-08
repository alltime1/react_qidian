import React from 'react';
import { useState } from 'react';
import styles from "./BookLink.module.css"
// img: "https://bookcover.yuewen.com/qdbimg/349573/1026907532/90",
// bookName: "这小说也太真实了",
// status: "晨星LL · 292章未读",
// newword:
interface eleInterface {
  img?: string,
  bookName?: string,
  status?: string,
  newword?: string,
  img2?: string,
  tipNo?:number,
  bookCheck?:string
  type?: string
}
interface propsInterface {
  bookLinkList: eleInterface[],
  children?: any
}


function BookLink(props: propsInterface) {

  return (
    <div style={{
      background: "#fff",
      borderRadius: ".4rem .4rem 0 .4rem ",
      padding: ".5rem",
      overflowX: "hidden"

    }}>
      {
        props.bookLinkList.slice(0,1).map((ele, i) => {
          return (
            
            <li key={"bookLink" + i}
              style={{
                display: "flex",
                marginBottom: "14px",
                position: "relative",
                
              }}
            >
              <div className={styles.book_posi}>
                   <img src={ele.img} className={styles.anima_skew} alt="" />
                  <img src={ele.img2} style={{
                width: "1.3rem",
                objectFit: "contain",
                borderRadius: ".1rem",
                position:"absolute",
                zIndex: 2,
                left:0
              }} alt="" />
           
              </div>
            

              <img className={styles.more} src="http://1.116.252.29/more2.png" alt="" />
              <div className={styles.right_detail} style={{
                display: "flex",
                flexDirection: "column"
              }}>
                <p>
                  {ele.bookName}
                </p>
                <span>
                  {ele.status}
                </span>
                <span>
                  {/* {ele.tipNo} */}
                  {
                    ele.bookCheck&&ele.bookCheck.split(",").map(e=>{
                      return (
                        <span className={styles.check_type} key={e}>{e}</span>
                      )
                    })
                  }
                </span>
              </div>
            </li>
          )
        })
      }
      {props.bookLinkList.slice(1).map((ele, i) => {
        return (
          <li key={"bookLink" + i}
            style={{
              display: "flex",
              marginBottom: "14px",
              position: "relative"
            }}
          >

            {/* {
              ele.type==="day_lead_read" ? 
            
            } */}
            
            <img src={ele.img} style={{
              width: "1.6rem",
              objectFit: "contain",
              borderRadius: ".1rem"
            }} alt="" />

            <img className={styles.more} src="http://1.116.252.29/more2.png" alt="" />
            <div className={styles.right_detail} style={{
              display: "flex",
              flexDirection: "column"
            }}>
              <p>
                {ele.bookName}
              </p>
              <span>
                {ele.newword}
              </span>
              <span>
                {ele.status}
              </span>
            </div>
          </li>
        )
      })}
      {props.children}
    </div>
  );
}

export default BookLink;
