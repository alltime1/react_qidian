import React, { Component } from 'react'
interface propsInterface {
  imgs: string[],
  children?: React.ReactNode,
  delay?: number
}
interface StateType {
  offsetLong: number,
  imgs: string[],
  clearAnima: boolean,
}
export default class RotationMap extends Component<propsInterface, StateType> {
  aniRef: React.RefObject<HTMLDivElement>;
  domWidth: number = document.body.clientWidth;
  constructor(props: propsInterface) {
    super(props)
    this.state = {
      offsetLong: -this.domWidth,
      imgs: [],
      clearAnima: false,//按压 清除动画
    }
    this.aniRef = React.createRef()
  }

  runanima(): void {

    let timer = setTimeout(() => {
      if(this.state.clearAnima){
        clearTimeout(timer)
        return 
      }
      if (this.aniRef.current) {
        if (this.aniRef.current.style.transition == "none 0s ease 0s") {
          this.aniRef.current.style.transition = "all 0.2s ease 0s"
        }
      }
      let index = Math.floor(this.state.offsetLong / this.domWidth)
      this.setState({
        offsetLong: (index - 1) * this.domWidth
      })
      clearTimeout(timer)
    }, this.props.delay || 3000)
  }
  componentDidMount() {
    let first = this.props.imgs[0]
    let endPic = this.props.imgs[this.props.imgs.length - 1]
    let newData = [endPic, ...this.props.imgs, first]
    this.setState({
      imgs: newData
    })
    console.log(newData);

    // this.runanima()
  }
  componentDidUpdate(props: any, state: any) {
  
console.log(this.state.clearAnima);

    if (this.state.clearAnima) {
      return
    }
    if (-state.offsetLong == this.domWidth * (this.state.imgs.length - 3)) {
      let time = setTimeout(() => { //动画完成后修改
        if (this.aniRef.current) {
          this.aniRef.current.style.transition = "none";
        }
        this.setState({
          offsetLong: 0
        })
        clearTimeout(time)
      }, 200)


      return
    }
    this.runanima()
  }
  onTouchStart(e: any) {
    e.nativeEvent.stopImmediatePropagation()
    e.nativeEvent.stopPropagation()
    this.setState({
      clearAnima: true
    })
  }
  onTouchEnd(e:any){  
     e.nativeEvent.stopImmediatePropagation()
    e.nativeEvent.stopPropagation()
    this.setState({
      clearAnima: false
    })
  } 
  onTouchMove(e:any){
    e.nativeEvent.stopImmediatePropagation()
    e.nativeEvent.stopPropagation()
  }
  render() {
    return (

      <div>
        <ul style={{
          position: "relative",
          borderRadius: "10px",
          height: "200px",
          overflow: "hidden",
        }}>
          <div
            ref={this.aniRef}
            onTouchStart={this.onTouchStart.bind(this)}
            onTouchEnd={this.onTouchEnd.bind(this)}
            onTouchMove={this.onTouchMove.bind(this)}
            style={{
              display: "flex",
              position: "absolute",
              left: this.state.offsetLong,
              transition: "all .2s",
              width: this.domWidth + "px",
              
            }}>
            {
              this.state.imgs.map(e => {
                return (
                  <img style={{
                    width: "100%",
                    objectFit: "cover",
                    padding: "10px",
                    boxSizing: "border-box",
                  }} src={e} />
                )
              })
            }
          </div>

        </ul>
      </div>
    )
  }
}
