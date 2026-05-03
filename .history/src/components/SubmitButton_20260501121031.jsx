// Code SubmitButton Component Here

// function SubmitButton (){
//     return(
//         <></>
//     )
// }

// export default SubmitButton;


/**
 * SubmitButton Component
 * ----------------------
 * Purpose:
 * - Renders a submit button
 * - Tracks mouse movement over button
 *
 * Connected to:
 * - App.jsx (parent container)
 */
function SubmitButton() {

  function handleEnter() {
    console.log("Mouse Entering");
  }

  function handleLeave() {
    console.log("Mouse Exiting");
  }

  return (
    <button
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      Submit Password
    </button>
  );
}

export default SubmitButton;