import React from 'react'

class EducationView extends React.Component {

    formatValues(){
         return this.props.values.map(value =>{
             return <section key={value.title} className="education--view">
                        <h4>{value.title}</h4>
                        <h4>{value.university}</h4>
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
  export default EducationView
  