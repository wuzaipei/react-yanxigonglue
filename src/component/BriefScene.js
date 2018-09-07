
import React, { Component } from 'react'
import bg1 from '../asset/img/img1.webp'

export default class StartScene extends Component {
    constructor(props) {
        super()
        this.state = {
            isShow:true,
            text:'最近《延禧攻略》正在热播，很多人都已经看见过了。除了精美服饰、华丽的宫殿，里面从多美丽又富有个性的缤妃们应该给我们留下深刻的印象，想知道最近剧情请关照微信公众号《延禧攻略》。',
            showText:'',
            textIndex:0,
            setFn:null,
          },
          this.nextPage = this.nextPage.bind(this)
    }
  render() {
      
    return (
      <div className='BriefScene'>
        <p>{this.state.showText}</p>
        <button onClick={this.nextPage}>开始</button>
      </div>
    )
  }
  componentDidMount() {
      this.state.setFn = setInterval(()=>{
        if (this.state.textIndex < this.state.text.length){
          var showText = this.state.showText+this.state.text[this.state.textIndex]
          var testIndex = this.state.textIndex+1
          this.setState({
            showText:showText,
            textIndex:testIndex
          })
        }else{
          clearInterval(this.state.setFn)
        }
        
      },100)
  }
  nextPage(){
    // console.log(this.props.mySwiper)
    this.props.mySwiper.slideNext()  /**页面的跳转，跳转下一页进行测试 */
  }
}
