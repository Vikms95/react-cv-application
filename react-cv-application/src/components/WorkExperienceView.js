import React from 'react'

class WorkExperienceView extends React.Component {

    formatValues(){
         return this.props.values.map(value =>{
             return <section key={value.place} className="work--element">
                        <h2 className='place--view'>{value.place}</h2>
                        <h4 className='company--view'>{value.company}</h4>
                        { (value.observations) && <div className='observations--view'>{value.observations}</div> }
                    </section>
         })

    }
    
    render() {
        return (
            <div>
                {this.formatValues()}
            </div>
      )}
}
  export default WorkExperienceView
  