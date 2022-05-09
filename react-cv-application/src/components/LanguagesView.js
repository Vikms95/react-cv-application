import React from 'react'

class LanguagesView extends React.Component {

    formatValues(){
         return this.props.values.map(value =>{
             return <section key={value.language} className="languages--element">
                        <h4 className='language--view'>{value.language}</h4>
                        <div>{value.proficiency}</div>
                        { (value.observations) && <div>{value.observations}</div> }
                    </section>
         })

    }
    
    render() {
        return (
            <div  className="languages--view">
                {this.formatValues()}
            </div>
      )}
}
export default LanguagesView
  