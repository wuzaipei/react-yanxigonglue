
import React, { Component } from 'react'
import bg1 from '../asset/img/img1.webp'

export default class StartScene extends Component {
    constructor(props) {
        super()
        this.state = {
            isShow:true
        }
    }
  render() {
      
    return (
      <div className='StartScene'>
        {this.state.isShow ? <img src={bg1} /> : null}
        <button></button>
      </div>
    )
  }
  componentDidMount() {
      setTimeout(()=>{
        this.setState({
            isShow:false
        })
      },1500)
  }
}
