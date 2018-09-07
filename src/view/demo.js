import React from 'react';
import ReactDOM from 'react-dom';

import store from '../store.js'
import { Provider,connect } from 'react-redux'










class Page3redux extends React.Component {
  render() {
    // const { value, onIncreaseClick } = this.props
    const value = this.props.value 
    //value是计的数，实际上store.state通过props来进行传递到组件
    const onIncreaseClick = this.props.onIncreaseClick
    //onIncreaseClick，这个方法也是通过props传入进来，这个函数执行1次，那么这个value值+1
    const newList = this.props.newList
    const onAddnewList = this.props.onAddnewList
    console.log(this.props)
    return (
      
      <div>
        <span>{value}</span>
        {/* <span>{this.props.value}</span> */}
        <button onClick={onIncreaseClick}>Increase</button>
        <button onClick={onAddnewList}>添加新闻</button>
        <h1>下面是新闻列表</h1>

        {
            newList.map((item,index)=>{
                return (
                    <div key={index}>
                        <h2>{item.title}</h2>
                        <p>{item.content}</p>
                    </div>
                )
            })
        }

        
      </div>
    )
  }
}







//reducer函数，这个函数最终决定state如何更改内容，而且每一次如果要更新试图，那么state都要全新的1个对象







//将状态绑定到props的方法
function mapStateToProps(state) {
  return {
    value: state.count,
    newList: state.newsList
  }
}

//将触发更改状态的方法绑定到props


function mapDispatchToProps(dispatch) {
  return {
    // onIncreaseClick: () => dispatch(increaseAction)
      onIncreaseClick:function(){
        dispatch({type:'increase'})
      },
      onAddnewList:function(){
          dispatch({
              type: 'addNews'
          })
      }
  }
}

//connect方法给Counter组件的props传入state以及更改state的方法

const Page3final = connect(
  mapStateToProps,
  mapDispatchToProps
)(Page3redux)


export default Page3final

// ReactDOM.render(<Basic />, document.getElementById('root'));

