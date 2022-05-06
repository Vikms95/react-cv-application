import React from 'react'
import './styles/App.css'
import GeneralInfo from './components/GeneralInfo'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <GeneralInfo />
      </div>
    )
  }
}

export default App
