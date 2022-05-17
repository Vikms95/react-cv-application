/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable class-methods-use-this */
import React from 'react';
import './styles/App.css';
import uniqid from 'uniqid';
import html2pdf from 'html2pdf.js';
import $ from 'jquery';
import AlertBox from './components/AlertBox';
import Header from './components/Header';
import EditModeView from './components/EditModeView';
import PreviewModeView from './components/PreviewModeView';
import profilePhoto from './images/profile-photo.png';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isEditorMode: true,
      profilePhoto,
      general: {
        name: 'John Doe',
        email: 'lorem@ipsu.com',
        phone: '123321123321',
      },

      education: {
        id: uniqid(),
        title: '',
        university: '',
        observations: '',
        educationArray: [
        //   {
        //     id: '32',
        //     title: 'Bachellors in Computer Science',
        //     university: 'Massachussets Institute of Technology ',
        //     observations: 'Lorem Ipsum is simply dummy text ofnic typesetting',
        //   },
        //   {
        //     id: '33',
        //     title: 'Grade in Tourism',
        //     university: 'CETA - Escola de Turisme',
        //     observations: 'Lorem Ipsum is sim',
        //   },
        //   {
        //     title: 'Highscool Diploma',
        //     university: 'Carrasco i Formiguera',
        //     observations: 'sdfflkdmspfdpsf',
        //   },
        ],
      },

      work: {
        id: uniqid(),
        place: '',
        company: '',
        observations: '',
        workArray: [
        //   {
        //     id: '3232132',
        //     place: 'Backend developer',
        //     company: 'Spotify',
        //     observations: 'Lorem, and lem Ipsum',
        //   },
        //   {
        //     id: '33242342',
        //     place: 'Hotel Recepcionist',
        //     company: 'H10 Diagonal',
        //     observations: 'Lor unchanged.',
        //   },
        //   {
        //     place: 'Hotel Recepcionist',
        //     company: 'Duquesa de Cardona',
        //     observations: 'Lorem Ipsum  Lorem Ipsum',
        //   },
        ],
      },

      languages: {
        id: uniqid(),
        language: '',
        proficiency: '' || 'Elementary',
        languagesArray: [
          // {id:'32329992', language:"English", proficiency: "Native"},
          // {id:'320923', language:"Spanish", proficiency: "Native"},
          // {id:'903239', language:"Russian", proficiency: "Professional"},
        ],
      },
    };

    this.toggleMode = this.toggleMode.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitPreview = this.handleSubmitPreview.bind(this);
    this.isRequiredFieldsValid = this.isRequiredFieldsValid.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleFieldEdit = this.handleFieldEdit.bind(this);
    this.reportInvalidInput = this.reportInvalidInput.bind(this);
  }

  handleChange(event) {
    const { value, id, name } = event.target;

    this.setState((prevState) => ({
      [name]: {
        ...prevState[name],
        [id]: value,
      },
    }));
  }

  handleSubmit(event) {
    event.preventDefault();
    const clickedField = event.target.className;
    const arrayToEdit = [`${`${clickedField}Array`}`];

    if (this.formIsValid(clickedField)) {
      this.setState((prevState) => {
        const newArray = this.getArrayToAdd(prevState, clickedField, arrayToEdit);
        const emptyObject = this.getEmptyObjectToAdd(prevState, clickedField);

        return {
          [clickedField]: {
            // An empty object is passed in state
            // to empty the inputs when submitted
            ...emptyObject,
            [arrayToEdit]: newArray,
          },
        };
      });
    }
  }

  /**
     * -Invoked when edit button is clicked on edit mode-
     * Take values from clicked element and return them to state
     * to be modified in handleSubmit
     */
  handleFieldEdit(id, event) {
    // Pass the id to the button element to remember
    // between functions the id that has to be modified
    const clickedField = event.target.parentElement.getAttribute('name');
    document.querySelector(`button.${clickedField}`).setAttribute('id-to-edit', id);

    this.setState((prevState) => {
      const arrayName = [`${`${clickedField}Array`}`];
      const arrayToEdit = prevState[clickedField][`${`${clickedField}Array`}`];
      const keyToEdit = arrayToEdit.find((key) => key.id === id);
      return {
        [clickedField]: {
          // Assign the element of the key to modify to state
          ...keyToEdit,
          // Replace the previous state array with
          // the array of the key to be modified
          [arrayName]: arrayToEdit,
        },
      };
    });
  }

  /**
     * Will be invoked when delete button on edit mode is
     * clicked.
     * Will be passed to EditViewMode > EducationView | WorkExperienceView
     */
  handleDelete(id, event) {
    const clickedField = event.target.parentElement.getAttribute('name');
    const arrayToEdit = [`${`${clickedField}Array`}`];

    this.setState((prevState) => ({
      [clickedField]: {
        ...prevState[clickedField],
        [arrayToEdit]:
            // Filter the element that received the delete click event
            prevState[clickedField][arrayToEdit].filter((key) => key.id !== id),
      },
    }));
  }

  handleSubmitPreview() {
    if (this.isRequiredFieldsValid()) {
      if (this.isAnyOptionalFieldEmpty()) {
        this.revealAlertBox();
        return;
      }
      this.toggleMode();
    } else {
      this.revealAlertBox();
      setTimeout(this.removeAlertBox, 2000);
    }
  }

  /**
     * It takes the values of the corresponding key of state so
     * we can return a new object for later use with a pure approach
     */
  getArrayToAdd(state, clickedField, arrayToEdit) {
    const fieldToEdit = state[clickedField];
    const objectToAdd = { ...fieldToEdit };
    const newArray = fieldToEdit[arrayToEdit];
    const indexToReplace = fieldToEdit[arrayToEdit].findIndex(
      (key) => key.id === fieldToEdit.id,
    );

    if (this.isKeyInState(indexToReplace)) {
      // Button id attribute is removed so the button
      // knows it needs to change its textContent value
      document.querySelector(`button.${clickedField}`).removeAttribute('id-to-edit');

      newArray.splice(indexToReplace, 1, objectToAdd);
      return newArray;
    }
    newArray.filter((key) => key.id !== fieldToEdit.id);
    return [...newArray, objectToAdd];
  }

  /**
     * Takes the clickedField and returns an empty object
     * with the key names, a new id and the rest of the values
     * as empty
     */
  getEmptyObjectToAdd(state, clickedField) {
    const emptyObject = { ...state[clickedField] };
    for (const value in emptyObject) {
      emptyObject[value] = '';
    }
    emptyObject.id = uniqid();
    return emptyObject;
  }

  formIsValid(name) {
    const formToValidate = document.getElementById(`${name}`);
    const inputsToValidate = Array.from(formToValidate.getElementsByTagName('input'));
    this.resetFormsStyling();

    for (let i = 0; i < inputsToValidate.length; i += 1) {
      inputsToValidate[i].setCustomValidity('');
      if (inputsToValidate[i].value === '') {
        this.reportInvalidInput(inputsToValidate[i]);
        return false;
      }
    }
    return true;
  }

  reportInvalidInput(element) {
    element.setCustomValidity('This field is required');
    element.reportValidity();
    element.classList.add('invalid--input');
  }

  /**
     * Resets styling of inputs when the submit button is clicked
     */
  resetFormsStyling() {
    const inputElements = Array.from(document.getElementsByTagName('input'));
    inputElements.forEach((element) => element.classList.remove('invalid--input'));
  }

  isKeyInState(index) {
    return index !== -1;
  }

  toggleMode() {
    this.setState((prevState) => ({ isEditorMode: !prevState.isEditorMode }));
    this.removeAlertBox();
  }

  removeAlertBox() {
    document.querySelector('.alert--box').classList.remove('active');
  }

  revealAlertBox() {
    document.querySelector('.alert--box').classList.add('active');
  }

  isRequiredFieldsValid() {
    const { general } = this.state;
    const { name, email, phone } = general;
    return name.length > 0 && email.length > 0 && phone.length > 0;
  }

  isAnyOptionalFieldEmpty() {
    const { education, work, languages } = this.state;
    return (
      education.educationArray.length === 0
        || work.workArray.length === 0
        || languages.languagesArray.length === 0
    );
  }

  isAnyItemInField(values) {
    return values.length > 0;
  }

  scrollTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  createPDF() {
    const cvElement = document.querySelector('.cv--container');
    html2pdf()
      .set({
        filename: 'resume.pdf',
        image: {
          type: 'jpeg',
          quality: 0.98,
        },
        html2canvas: {
          scale: 3,
          letterRendering: true,
        },
        jsPDF: {
          unit: 'in',
          format: 'a4',
          orientation: 'portrait',
        },
      })
      .from(cvElement)
      .save()
      .catch((err) => console.log(err));
  }

  printCV() {
    const pageBackup = $('#root').html();
    const printContent = $('.cv--container').clone();
    $('#root').empty().html(printContent);
    window.print();
    $('#root').html(pageBackup);
  }

  render() {
    const
      {
        isEditorMode,
      } = this.state;

    const
      {
        toggleMode,
        removeAlertBox,
        createPDF,
        printCV,
        handleChange,
        handleSubmit,
        handleDelete,
        handleFieldEdit,
        handleSubmitPreview,
        isRequiredFieldsValid,
        isAnyItemInField,
        scrollTop,
      } = this;

    return (
      <section className="general--container">
        <AlertBox
          toggleMode={toggleMode}
          removeAlertBox={removeAlertBox}
          isRequiredFieldsValid={isRequiredFieldsValid}
        />
        <button type="button" onClick={scrollTop} id="scroll--up--button">
          Scroll up
        </button>

        <Header
          printCV={printCV}
          createPDF={createPDF}
          toggleMode={toggleMode}
          isEditorMode={isEditorMode}
        />

        {isEditorMode
          ? (
            <EditModeView
              inputValues={this.state}
              profilePhoto={profilePhoto}
              isEditorMode={isEditorMode}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              handleDelete={handleDelete}
              handleFieldEdit={handleFieldEdit}
              isAnyItemInField={isAnyItemInField}
              handleSubmitPreview={handleSubmitPreview}
            />
          )
          : (
            <PreviewModeView
              toggleMode={toggleMode}
              profilePhoto={profilePhoto}
              inputValues={this.state}
              isEditorMode={isEditorMode}
              isAnyItemInField={isAnyItemInField}
            />
          )}
      </section>
    );
  }
}

export default App;
