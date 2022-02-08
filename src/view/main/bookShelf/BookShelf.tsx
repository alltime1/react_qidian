import React from 'react';
import { useEffect, useState } from "react"
import styles from "./main.module.css"
import BookLink from "../../../compontent/BookLink"

function Main() {
  let searchHot = ["雪中", "超神学院", "末世", "红楼", "雪中悍刀行", "雪中"]
  const animaRef: React.RefObject<HTMLDivElement> = React.createRef()
  const [animalRun, setanimalRun] = useState(0)
  let len = -(searchHot.length - 1) * 30
  const bookShelfList = [
    {
      img: "https://bookcover.yuewen.com/qdbimg/349573/1026907532/90",
      img2:"https://bookcover.yuewen.com/qdbimg/349573/1026934532/90",
      bookName: "我将埋葬众神",
      type:"day_lead_read",

      status: "暴雨之夜，道门少女追杀而来.",
      tipNo: 85,
      bookCheck:"仙侠,神话修仙",
    },
    {
      img: "https://bookcover.yuewen.com/qdbimg/349573/1026907532/90",
      bookName: "这小说也太真实了",
      status: "晨星LL · 292章未读",
      newword: "第293章 Beta02版本！ 交易平台上的冲突,大妈的菜市场"
    },
    {
      img: "https://bookcover.yuewen.com/qdbimg/349573/1026907532/90",
      bookName: "这小说也太真实了",
      status: "晨星LL · 292章未读",
      newword: "第293章 Beta02版本！ 交易平台上的冲突,大妈的菜市场"
    },
    {
      img: "https://bookcover.yuewen.com/qdbimg/349573/1026907532/90",
      bookName: "这小说也太真实了",
      status: "晨星LL · 292章未读",
      newword: "第293章 Beta02版本！ 交易平台上的冲突,大妈的菜市场"
    },
    {
      img: "https://bookcover.yuewen.com/qdbimg/349573/1026907532/90",
      bookName: "这小说也太真实了",
      status: "晨星LL · 292章未读",
      newword: "第293章 Beta02版本！ 交易平台上的冲突,大妈的菜市场"
    },
    {
      img: "https://bookcover.yuewen.com/qdbimg/349573/1026907532/90",
      bookName: "这小说也太真实了",
      status: "晨星LL · 292章未读",
      newword: "第293章 Beta02版本！ 交易平台上的冲突,大妈的菜市场"
    },
    {
      img: "https://bookcover.yuewen.com/qdbimg/349573/1026907532/90",
      bookName: "这小说也太真实了",
      status: "晨星LL · 292章未读",
      newword: "第293章 Beta02版本！ 交易平台上的冲突,大妈的菜市场"
    },
    {
      img: "https://bookcover.yuewen.com/qdbimg/349573/1026907532/90",
      bookName: "这小说也太真实了",
      status: "晨星LL · 292章未读",
      newword: "第293章 Beta02版本！ 交易平台上的冲突,大妈的菜市场"
    },
    {
      img: "https://bookcover.yuewen.com/qdbimg/349573/1026907532/90",
      bookName: "我的治愈游戏",
      status: "我会修空调 · 593章未读",
      newword: "第581章 谁躲在他床下"
    },
    {
      img: "https://bookcover.yuewen.com/qdbimg/349573/1026937532/90",
      bookName: "这小说也太真实了",
      status: "晨星LL · 292章未读",
      newword: "第293章 Beta02版本！ 交易平台上的冲突"
    },
    {
      img: "https://bookcover.yuewen.com/qdbimg/349573/1026934532/90",
      bookName: "这小说也太真实了",
      status: "晨星LL · 292章未读",
      newword: "第293章 Beta02版本！ 交易平台上的冲突"
    },
    {
      img: "https://bookcover.yuewen.com/qdbimg/349573/1026907232/90",
      bookName: "这小说也太真实了",
      status: "晨星LL · 292章未读",
      newword: "第293章 Beta02版本！ 交易平台上的冲突"
    },
    {
      img: "https://bookcover.yuewen.com/qdbimg/349573/1012407532/90",
      bookName: "这小说也太真实了",
      status: "晨星LL · 292章未读",
      newword: "第293章 Beta02版本！ 交易平台上的冲突"
    },
  ];
  useEffect(() => {
    let time =

      requestAnimationFrame(() => {
        animaRef.current && (animaRef.current.style.top = animalRun + "px");
        if (animalRun == -30 || animalRun == -60 || animalRun == -90 || animalRun == -120 || animalRun == -150) {
          let time = setTimeout(() => {
            setanimalRun(animalRun - 1)
            clearTimeout(time)
          }, 1000)
          return
        }
        if (animalRun > len) {
          setanimalRun(animalRun - 1)
        } else {
          setanimalRun(0)
        }


        cancelAnimationFrame(time)

      })
    return () => {

    }
  }, [animalRun])
  return (
    <div style={{
      background: "#ffe4e1",
      height:"100vh",
      overflow:"hidden"
    }}>
      <header>
        <div className={styles.book_l}>
          <span>书架</span>
          <img src="http://1.116.252.29/arrow.png" alt="" />
          <div className={styles.search}>
            <div className={styles.anima} ref={animaRef}>
              {searchHot.map((ele, i) => {
                return (
                  <li style={{
                    lineHeight: "30px"
                  }} key={i}>
                    <img src="http://1.116.252.29/search.png" alt="" />
                    <span style={{
                      fontSize: "14px",
                      fontWeight: 300
                    }}>{ele}</span>
                  </li>
                )
              })}
            </div>
          </div>
          <img className={styles.history} src="http://1.116.252.29/longtime.png" alt="" />
          <img className={styles.manage} src="http://1.116.252.29/more.png" alt="" />
        </div>
      </header>

      <div className={styles.scroll_book}>


        <div className={styles.tip}>
          <div className={styles.canlender}>
            <img src="http://1.116.252.29/canlender.png" />
            <span>
              {new Date().getDate()}
            </span>
          </div>
          <p >Hi，等你好久了，欢迎来到起点读书</p>


        </div>
        <BookLink bookLinkList={bookShelfList}>
           <div className={styles.find_more}>
             查找更多精彩作品
           </div>
          
          </BookLink></div>
    </div>
  );
}

export default Main;
