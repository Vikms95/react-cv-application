import React from 'react'

class WorkExperienceView extends React.Component {

    formatValues(){
         return this.props.values.map(value =>{
             return <section key={value.place} className="work--view">
                        <h4>{value.place}</h4>
                        <h4>{value.company}</h4>
                        { (value.observations) && <div>{value.observations}</div> }
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
  