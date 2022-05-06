import React from 'react'
import stockPic from '../images/stock-pic.jpg'

class ProfilePicture extends React.Component {
  render() {
    return <img className="stock--pic" src={stockPic} alt="stock-pic" />
  }
}

export default ProfilePicture
