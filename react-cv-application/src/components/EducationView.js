import React from 'react'

class EducationView extends React.Component {

    formatValues(){
         return this.props.values.map(value =>{
             return <div 
                        key={value.title} 
                        className={`education--element ${this.props.isEditorMode ? "editor" : "preview"}`}
                        name='education'
                        >
                        <button
                            onClick={this.props.toggleMode}
                            className='edit--button'>
                                {this.props.isEditorMode ? 'Edit' : 'Back to edit'}
                        </button>
                        {(this.props.isEditorMode) && 
                        <button
                            onClick={this.props.handleDelete}
                            className='delete--button'>
                                Delete
                        </button>}
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
  