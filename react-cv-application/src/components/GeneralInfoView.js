import React from 'react'

class GeneralInfoView extends React.Component {

    formatValues(){
         return Object.values(this.props).map(value =>{
             return <div key={value.name} className="general--info--element">
                        <h2 className='name--view'>{value.name}</h2>
                        <h4 className='email--view'>{value.email}</h4>
                        <div className='phone--view'>{value.phone}</div> 
                    </div>
         })
    }
    
    render() {
        return (
            <section className="general--info--view">
                {this.formatValues()}
            </section>
      )}
}
  export default GeneralInfoView
  