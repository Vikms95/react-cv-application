-   FUNCTIONALITIES
    -Create CV template with the data taken from the CV input.
    -Transform the input page into an actual CV to be downloaded
    -You can edit each field with buttons on the CV downloadable version

-   COMPONENTS
    App.js
    ProfilePicture.js
    GeneralInfo.js
    Education.js
    WorkExperience.js
    Languages.js
    SubmitButton.js

-   REMINDERS
    -The easiest way is to build a version that takes your data model and renders the UI but has no interactivity. To build a static version of your app that renders your data model, you’ll want to build components that reuse other components and pass data using props. props are a way of passing data from parent to child. If you’re familiar with the concept of state, don’t use state at all to build this static version.

-   STEPS
    <!-- -Make static version -->
    <!-- -Make header -->

{

<!-- - Plan how to handle props and state within the App
*:https://reactjs.org/docs/thinking-in-react.html
:https://reactjs.org/docs/faq-state.html#what-is-the-difference-between-state-and-props -->

<!-- - Hold state in App and the functions to modify it (setState) and pass those functions to setState as
props to each component, then use those functions and pass them to the onChange property, share the name of the input with the value -->

\*<!-- : save state as nested objects for each section? > test changing name with nested objects (works) -->

<!-- : on each input? each form? each input (works) -->
<!-- : pass the state directly as props as well to have controlled components? -->

<!-- - Add the values within the state array's with submit but -->
<!-- : button submit the created form within the object array -->
<!-- : button converts current object values to string
*? tie input value to state value so it gets erased by itself? -->
<!-- : add JS validation constraints to not allow empty inputs
:check JS constraints lessons and docs
:copied the library form validation, adjust?
:use the passed 'name' variable to locate the form which required validity instead of the inputs? -->

<!-- -Implement HTML creation on button press
*:they will be new components that will show up ONLY when the arrays from
the state length are over 0 (state.array.length > 0 && component)
:they will get passed the state values as props to be able to display them
below the form fields
:include the functionality in the handleSubmit function (split both the object part and the display part in two functions)
:problem with grid, change className upon grid creation? -->

<!-- -Fix grid issues with creating new elements inbetween the default grid elements(they all grow to fit the 1fr specification) -->

<!-- -The submit button should submit your form and display the value of your input fields
(which do not need to be referenced, since all is already updated in our state) in HTML elements with its respective titles.
- Be sure to include an edit button for the HTML version for each section or for the whole CV, your preference. -->
<!-- : one component for edit mode and the other for preview mode -->
<!-- : use ternary statement to know which component should be displayed,
editMode ? then display the edit mode -->
<!-- :previewMode needs to get the state passed as props -->

<!-- :. create GeneralInfoView for the preview mode -->
<!-- :. pass in the selected profile picture -->
<!-- :. create element which will ask if you want to proceed with the CV preview even though not all fields have content
    :set up an absolute div with display none on App  -->
<!-- :. create element pop-up to alert of required fields to be filled -->
<!-- :. implement handleSubmitPreview which will- -->
<!-- :check how many education/work/languages fields are empty to -->
<!-- see if swapping to preview mode makes sense, ask the user, if it says yes, change the value to false -->
<!-- :check if the three main inputs are filled, if not, trigger constraints validations and return from the function -->
<!-- {: style preview mode a little bit} -->
<!-- : every element will have a button that will appear on hover to bring you back to edit mode -->
<!-- :edit button also appears in edit mode
        :isEditMode not being passed as a prop? -->
<!-- :work experience inputs not getting erased when button is clicked?
    :state is getting updated
    :input value property was spelled wrong xd -->
<!-- :implement delete button -->
<!-- :.at the header of preview mode, 3 buttons will be needed: another button to go back to editing, download as pdf, print -->
<!-- : change *isEditorMode* whenever the edit button is clicked or if any edit button is clicked on the preview mode(just goes back to editor mode,
no fancy editing mode on preview mode)  -->

<!-- - Remove button per field element     -->

<!-- - The edit button should add back (display) the input fields, with the previously displayed information as values. In those input fields, you should be able to edit and resubmit the content(use the already created inputs and lay down the values from current state) -->

<!-- - Find a way to insert the newly edited property to the previous index(splice?) -->

<!-- -Languages inputs get state of proficiency -->

-TODO   Implement profile photo change
:You can activate the input element by clicking its <label>, so it is better to visually hide the input and style the label like a button, so the user will know to interact with it if they want to upload files.
:https://javascript.plainenglish.io/how-to-add-an-image-preview-when-an-image-file-is-selected-in-the-file-input-62609ac92a4f
<!-- - Make specific part of the page downloadable as PDF
    :https://stackoverflow.com/questions/17293135/download-a-div-in-a-html-page-as-pdf-using-javascript -->

<!-- - Make specific part of the page printable
    :https://stackoverflow.com/questions/12997123/print-specific-part-of-webpage -->

-TODO Major refactoring

<!-- : pending handleFieldEdit to avoid if statement -->

: check for improvements on component structure (merge education and work?)
: check for improvements on component readability

<!-- -   Adjust css alignment -->

-   QUESTIONS
    <!-- -State will be held in App.js? -->
    <!-- -Wrap each component in a form or just one? -->
    <!-- -Last row one component rendering 2 components or 2 components in App? -->
    <!-- -To swap views, conditional rendering on the App component? -->
    <!-- -State is already updated on each change, so button just has to get the state and render an HTML ? -->
    <!-- -Education and Work in one component with different props? -->
    <!-- -Reassign props to another variable name without changing its value to make components in the jsx cleaner? -->
