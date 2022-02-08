import React, { Component } from 'react'
import RotationMap from './../../../../compontent/rotationMpa/RotationMap';
interface classifyInterface{
  icon:string,
  name:string
}
export default class Boy extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      classify:[
        {
          icon:"",
          name:"分类"
        },
        {
          icon:"",
          name:"排行"
        },
        {
          icon:"",
          name:"三江"
        },
        {
          icon:"",
          name:"剧场"
        },
        {
          icon:"",
          name:"免费"
        },{
          icon:"",
          name:"完本"
        }
      ],
      imgs: [
        require("./IMG_20220126_113908.jpg"),
        require("./IMG_20220126_114702.jpg"),
        require("./IMG_20220126_114720.jpg"),
        require("./IMG_20220126_114736.jpg")
      ]
    }
  }
  render() {
    return (
      <div
        style={{
          marginTop: "80px"
        }}
      >
        <RotationMap imgs={this.state.imgs}>
        </RotationMap>
        <ul>
          {
            this.state.classify.map((e:classifyInterface)=>{
              return (
                <div>
                     <img src={e.icon} alt=""/>
                     <p>{e.name}</p>
                </div>
             
              )
            })
          }
        </ul>
      </div>
    )
  }
}
