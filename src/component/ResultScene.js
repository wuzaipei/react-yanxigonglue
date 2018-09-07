
import React, { Component } from 'react'

import store from '../store.js'
import {Provider,connect } from 'react-redux'

import bg1 from '../asset/img/img1.webp'

class StartScene extends Component {
    constructor(props) {
        super()
        this.state = {
            resultList:[
                {
                  id:0,
                  name:'魏璎珞',
                  imgUrl: '//tenc3.rabbitpre.com/ecbbdf45-8b3a-4bb1-bc4d-9d24377aa6c9?x-oss-process=image/resize,w_220,h_170,limit_0/format,webp',
                  keyWords:['正直坚强','聪慧灵敏'],
                  describe: '你像《延禧攻略》里的哪位妃子？你是一个不太会外露情绪的人，他人很少能看见你气急败坏的一面。你总是以客观理智的观点来看待自己和他人，和身边的人保持着合理的关系。你并不是一个会让人随便捏的软柿子，你内心透彻，有着腹黑的一面，但同时心存善良与正义。不仅如此，你还是一个重视承诺的人，不管对自己还是对别人都是，没有把握就不应该轻易对别人做出承诺。'
  
                },
                {
                  id: 1,
                  name: '富察皇后',
                  imgUrl: '//ali2.rabbitpre.com/7b0ab6e1-6449-4884-9a12-426340dce39b?x-oss-process=image/resize,w_220,h_170,limit_0/format,webp',
                  keyWords: ['正直坚强', '聪慧灵敏'],
                  describe: '你像《延禧攻略》里的哪位妃子？你是一个不太会外露情绪的人，他人很少能看见你气急败坏的一面。你总是以客观理智的观点来看待自己和他人，和身边的人保持着合理的关系。你并不是一个会让人随便捏的软柿子，你内心透彻，有着腹黑的一面，但同时心存善良与正义。不仅如此，你还是一个重视承诺的人，不管对自己还是对别人都是，没有把握就不应该轻易对别人做出承诺。'
                },
                {
                  id: 2,
                  name: '纯妃',
                  imgUrl: '//ali2.rabbitpre.com/7b0ab6e1-6449-4884-9a12-426340dce39b?x-oss-process=image/resize,w_220,h_170,limit_0/format,webp',
                  keyWords: ['正直坚强', '聪慧灵敏'],
                  describe: '你像《延禧攻略》里的哪位妃子？你是一个不太会外露情绪的人，他人很少能看见你气急败坏的一面。你总是以客观理智的观点来看待自己和他人，和身边的人保持着合理的关系。你并不是一个会让人随便捏的软柿子，你内心透彻，有着腹黑的一面，但同时心存善良与正义。不仅如此，你还是一个重视承诺的人，不管对自己还是对别人都是，没有把握就不应该轻易对别人做出承诺。'
                },
                {
                  id: 3,
                  name: '贤妃',
                  imgUrl: '//ali2.rabbitpre.com/7b0ab6e1-6449-4884-9a12-426340dce39b?x-oss-process=image/resize,w_220,h_170,limit_0/format,webp',
                  keyWords: ['正直坚强', '聪慧灵敏'],
                  describe: '你像《延禧攻略》里的哪位妃子？你是一个不太会外露情绪的人，他人很少能看见你气急败坏的一面。你总是以客观理智的观点来看待自己和他人，和身边的人保持着合理的关系。你并不是一个会让人随便捏的软柿子，你内心透彻，有着腹黑的一面，但同时心存善良与正义。不仅如此，你还是一个重视承诺的人，不管对自己还是对别人都是，没有把握就不应该轻易对别人做出承诺。'
                },
                {
                  id: 4,
                  name: '高贵妃',
                  imgUrl: '//ali2.rabbitpre.com/7b0ab6e1-6449-4884-9a12-426340dce39b?x-oss-process=image/resize,w_220,h_170,limit_0/format,webp',
                  keyWords: ['正直坚强', '聪慧灵敏'],
                  describe: '你像《延禧攻略》里的哪位妃子？你是一个不太会外露情绪的人，他人很少能看见你气急败坏的一面。你总是以客观理智的观点来看待自己和他人，和身边的人保持着合理的关系。你并不是一个会让人随便捏的软柿子，你内心透彻，有着腹黑的一面，但同时心存善良与正义。不仅如此，你还是一个重视承诺的人，不管对自己还是对别人都是，没有把握就不应该轻易对别人做出承诺。'
                },
                {
                  id: 5,
                  name: '皇帝',
                  imgUrl: '//ali2.rabbitpre.com/7b0ab6e1-6449-4884-9a12-426340dce39b?x-oss-process=image/resize,w_220,h_170,limit_0/format,webp',
                  keyWords: ['正直坚强', '聪慧灵敏'],
                  describe: '你像《延禧攻略》里的哪位妃子？你是一个不太会外露情绪的人，他人很少能看见你气急败坏的一面。你总是以客观理智的观点来看待自己和他人，和身边的人保持着合理的关系。你并不是一个会让人随便捏的软柿子，你内心透彻，有着腹黑的一面，但同时心存善良与正义。不仅如此，你还是一个重视承诺的人，不管对自己还是对别人都是，没有把握就不应该轻易对别人做出承诺。'
                }
              ]
          },
          this.nextPage = this.nextPage.bind(this)
    }
  render() {
    switch(this.props.score){
        case 0:
            var index = 0;
            break;
        case 5:
            var index = 1;
            break;
        case 10:
            var index = 2;
            break;
        case 15:
            var index = 3;
            break;
        case 20:
            var index = 4;
            break;
        case 25:
            var index = 5;
            break;

    }
    var result = this.state.resultList[index]
    return (
      <div className='ResultScene'>
        <h3>你喜欢延禧攻略里面的那个角色？</h3>
        <h4>{result.name}</h4>
        <h4>{result.keyWords.map((item,index)=>{return <span key={index}>{item}</span>})}</h4>
        <img src={result.imgUrl}/>
        <p>{result.describe}</p>
      </div>
    )
  }
  componentDidMount() {
    //   console.log(this.props.content.title)
  }
  nextPage(index){
    // console.log(this.props.mySwiper)
    
    var score = this.props.content.answer[index].score
    
    this.props.onAddScore(score)
    this.props.mySwiper.slideNext()  /**页面的跳转，跳转下一页进行测试 */
    
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