/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable class-methods-use-this */
import React, { useState } from 'react';
import './styles/App.css';
import uniqid from 'uniqid';
import html2pdf from 'html2pdf.js';
import $ from 'jquery';
import AlertBox from './components/AlertBox';
import Header from './components/Header';
import EditModeView from './components/EditModeView';
import PreviewModeView from './components/PreviewModeView';
import profilePhoto from './images/profile-photo.png';

function App() {
  // Separate setState into different functions, put them in their respective Components?
  const [isEditorMode, setIsEditorMode] = useState(true);

  const [general, setGeneral] = useState(
    { name: 'John Doe', email: 'lorem@ipsu.com', phone: '123321123321' },
  );
  const [education, setEducation] = useState(
    {
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
  );
  const [work, setWork] = useState(
    {
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
  );
  const [languages, setLanguages] = useState(
    {
      id: uniqid(),
      language: '',
      proficiency: '' || 'Elementary',
      languagesArray: [
        // {id:'32329992', language:"English", proficiency: "Native"},
        // {id:'320923', language:"Spanish", proficiency: "Native"},
        // {id:'903239', language:"Russian", proficiency: "Professional"},
      ],
    },
  );

  const capitalizeFirstLetter = (string) => string[0].toUppercase() + string.slice(1).toLowerCase();

  const handleChange = (event) => {
    const { value, id } = event.target;
    let { name } = event.target;
    name = capitalizeFirstLetter(name);
    [`'set'${name}`]((prevState) => ({
      [name]: {
        ...prevState[name],
        [id]: value,
      },
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const clickedField = event.target.className;
    const arrayToEdit = [`${`${clickedField}Array`}`];

    if (formIsValid(clickedField)) {
      [`'set'${clickedField}`]((prevState) => {
        const newArray = getArrayToAdd(prevState, clickedField, arrayToEdit);
        const emptyObject = getEmptyObjectToAdd(prevState, clickedField);

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
  };

  /**
     * -Invoked when edit button is clicked on edit mode-
     * Take values from clicked element and return them to state
     * to be modified in handleSubmit
     */
  const handleFieldEdit = (id, event) => {
    // Pass the id to the button element to remember
    // between functions the id that has to be modified
    const clickedField = event.target.parentElement.getAttribute('name');
    document.querySelector(`button.${clickedField}`).setAttribute('id-to-edit', id);

    setState((prevState) => {
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
  };

  /**
     * Will be invoked when delete button on edit mode is
     * clicked.
     * Will be passed to EditViewMode > EducationView | WorkExperienceView
     */
  const handleDelete = (id, event) => {
    const clickedField = event.target.parentElement.getAttribute('name');
    const arrayToEdit = [`${`${clickedField}Array`}`];

    setState((prevState) => ({
      [clickedField]: {
        ...prevState[clickedField],
        [arrayToEdit]:
            // Filter the element that received the delete click event
            prevState[clickedField][arrayToEdit].filter((key) => key.id !== id),
      },
    }));
  };

  const removeAlertBox = () => {
    document.querySelector('.alert--box').classList.remove('active');
  };

  const handleSubmitPreview = () => {
    if (isRequiredFieldsValid()) {
      if (isAnyOptionalFieldEmpty()) {
        revealAlertBox();
        return;
      }
      toggleMode();
    } else {
      revealAlertBox();
      setTimeout(removeAlertBox, 2000);
    }
  };

  const isKeyInState = (index) => index !== -1;

  /**
     * It takes the values of the corresponding key of state so
     * we can return a new object for later use with a pure approach
     */
  const getArrayToAdd = (state, clickedField, arrayToEdit) => {
    const fieldToEdit = state[clickedField];
    const objectToAdd = { ...fieldToEdit };
    const newArray = fieldToEdit[arrayToEdit];
    const indexToReplace = fieldToEdit[arrayToEdit].findIndex(
      (key) => key.id === fieldToEdit.id,
    );

    if (isKeyInState(indexToReplace)) {
      // Button id attribute is removed so the button
      // knows it needs to change its textContent value
      document.querySelector(`button.${clickedField}`).removeAttribute('id-to-edit');

      newArray.splice(indexToReplace, 1, objectToAdd);
      return newArray;
    }
    newArray.filter((key) => key.id !== fieldToEdit.id);
    return [...newArray, objectToAdd];
  };

  /**
     * Takes the clickedField and returns an empty object
     * with the key names, a new id and the rest of the values
     * as empty
     */
  const getEmptyObjectToAdd = (state, clickedField) => {
    const emptyObject = { ...state[clickedField] };
    for (const value in emptyObject) {
      emptyObject[value] = '';
    }
    emptyObject.id = uniqid();
    return emptyObject;
  };

  const reportInvalidInput = (element) => {
    element.setCustomValidity('This field is required');
    element.reportValidity();
    element.classList.add('invalid--input');
  };

  /**
     * Resets styling of inputs when the submit button is clicked
     */
  const resetFormsStyling = () => {
    const inputElements = Array.from(document.getElementsByTagName('input'));
    inputElements.forEach((element) => element.classList.remove('invalid--input'));
  };

  const formIsValid = (name) => {
    const formToValidate = document.getElementById(`${name}`);
    const inputsToValidate = Array.from(formToValidate.getElementsByTagName('input'));
    resetFormsStyling();

    for (let i = 0; i < inputsToValidate.length; i += 1) {
      inputsToValidate[i].setCustomValidity('');
      if (inputsToValidate[i].value === '') {
        reportInvalidInput(inputsToValidate[i]);
        return false;
      }
    }
    return true;
  };

  const toggleMode = () => {
    setIsEditorMode((prevIsEditorMode) => (!prevIsEditorMode.isEditorMode));
    removeAlertBox();
  };

  const revealAlertBox = () => {
    document.querySelector('.alert--box').classList.add('active');
  };

  const isRequiredFieldsValid = () => {
    const { name, email, phone } = general;
    return name.length > 0 && email.length > 0 && phone.length > 0;
  };

  const isAnyOptionalFieldEmpty = () => (
    education.educationArray.length === 0
        || work.workArray.length === 0
        || languages.languagesArray.length === 0
  );

  const isAnyItemInField = (values) => values.length > 0;

  const scrollTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const createPDF = () => {
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
  };

  const printCV = () => {
    const pageBackup = $('#root').html();
    const printContent = $('.cv--container').clone();
    $('#root').empty().html(printContent);
    window.print();
    $('#root').html(pageBackup);
  };

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
            inputValues={[general, education, work, languages]}
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
            inputValues={[general, education, work, languages]}
            isEditorMode={isEditorMode}
            isAnyItemInField={isAnyItemInField}
          />
        )}
    </section>
  );
}

export default App;
