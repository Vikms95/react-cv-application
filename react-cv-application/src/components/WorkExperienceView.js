import React from 'react'

class WorkExperienceView extends React.Component {

    formatValues(){
         return this.props.values.map(value =>{
             return <div 
                        key={value.place} 
                        className={`work--element ${this.props.isEditorMode ? "editor" : "preview"}`}
                        name="work"
                    >
                        <button
                            onClick = {
                                (this.props.isEditorMode)
                                    ? this.props.handleFieldEdit
                                    : this.props.toggleMode
                            }
                            className='edit--button'>
                        {this.props.isEditorMode ? 'Edit' : 'Back to edit'}
                        </button>

                        {(this.props.isEditorMode) && 
                        <button
                            onClick={(event) => this.props.handleDelete(value.id, event)}
                            className='delete--button'>
                                Delete
                        </button>}

                        <h2 className='place--view'>{value.place}</h2>
                        <h4 className='company--view'>{value.company}</h4>

                        { (value.observations) && <div className='observations--view'>{value.observations}</div> }
                        
                    </div>
         })
    }
    
    render() {
        return (
            <section className='work--view'>
                {this.formatValues()}
            </section>
      )}
}
  export default WorkExperienceView
  