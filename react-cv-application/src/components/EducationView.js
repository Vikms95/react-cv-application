import React from 'react'

class EducationView extends React.Component {

    formatValues(){
         return this.props.values.map(value =>{
             return <div key={value.title} className="education--element">
                        <h2 className='title--view'>{value.title}</h2>
                        <h4 className='university--view'>{value.university}</h4>
                        { (value.observations) && <div className='observations--view'>{value.observations}</div> }
                    </div>
         })
    }
    
    render() {
        return (
            <section className="education--view">
                {this.formatValues()}
            </section>
      )}
}
  export default EducationView
  