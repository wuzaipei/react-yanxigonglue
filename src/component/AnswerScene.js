
import React, { Component } from 'react'

import store from '../store.js'
import {Provider,connect } from 'react-redux'

import bg1 from '../asset/img/img1.webp'

class StartScene extends Component {
    constructor(props) {
        super()
        this.state = {
            isShow:true,
            showText:'',
            textIndex:0,
            setFn:null,
          },
          this.nextPage = this.nextPage.bind(this)
    }
  render() {
      
    return (
      <div className='AnswerScene'>
        <p>{this.props.content.title}</p>
        <button onClick={()=>{this.nextPage(0)}}>{this.props.content.answer[0].content}</button>
        <button onClick={()=>{this.nextPage(1)}}>{this.props.content.answer[1].content}</button>
        <button onClick={()=>{this.nextPage(2)}}>{this.props.content.answer[2].content}</button>
      </div>
    )
  }
  componentDidMount() {
      // console.log(this.props.content.title)
  }
  nextPage(index){
    // console.log(this.props.mySwiper)
    
    var score = this.props.content.answer[index].score
    this.props.onAddScore(score)
    this.props.mySwiper.slideNext()  /**页面的跳转，跳转下一页进行测试 */
    console.log(this)
  }
}

//将状态绑定到props的方法
function mapStateToProps(state) {
    return {
      score: state.score,
    //   newList: state.newsList
    }
  }
  
  //将触发更改状态的方法绑定到props
  
  
  function mapDispatchToProps(dispatch) {
    return {
      // onIncreaseClick: () => dispatch(increaseAction)
        onAddScore:function(score){
          dispatch({
            type:'addscore',
            currentScore:score
        })

        },
        
    }
  }
  
  //connect方法给Counter组件的props传入state以及更改state的方法
  
StartScene = connect(
    mapStateToProps,
    mapDispatchToProps
  )(StartScene)
  
  export default StartScene