- FUNCTIONALITIES
-Create CV template with the data taken from the CV input.
-Transform the input page into an actual CV to be downloaded
-You can edit each field with buttons on the CV downloadable version

-  COMPONENTS
 App.js
    ProfilePicture.js
    GeneralInfo.js
    Education.js
    WorkExperience.js
    Languages.js
    SubmitButton.js

- REMINDERS
-The easiest way is to build a version that takes your data model and renders the UI but has no interactivity. To build a static version of your app that renders your data model, you’ll want to build components that reuse other components and pass data using props. props are a way of passing data from parent to child. If you’re familiar with the concept of state, don’t use state at all to build this static version.


- STEPS
<!-- -Make static version -->
<!-- -Make header -->

{
- Plan how to handle props and state within the App
    :https://reactjs.org/docs/thinking-in-react.html
    :https://reactjs.org/docs/faq-state.html#what-is-the-difference-between-state-and-props

   - Hold state in App and the functions to modify it (setState) and pass those functions to setState as
      props to each component, then use those functions and pass them to the onChange property, share the name of the input with the value
        : save state as objects for each section?
        : on each input? each form?
        : pass the state directly as props as well?
}

-Implement HTML creation on button press(education)

- Be sure to include an edit and submit button for each section or for the whole CV, your preference.

-The submit button should submit your form and display the value of your input fields in HTML elements.

- The edit button should add back (display) the input fields, with the previously displayed information as values. In those input fields, you should be able to edit and resubmit the content.

- QUESTIONS
-State will be held in App.js?
-Wrap each component in a form or just one?
-Last row one component rendering 2 components or 2 components in App?
-To swap views, conditional rendering on the App component?
-State is already updated on each change, so button just has to get the state and render an HTML ?
-Education and Work in one component with different props?
