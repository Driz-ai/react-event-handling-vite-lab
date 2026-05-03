// import { useState } from 'react'
// import '../App.css'
// import PasswordInput from './PasswordInput'
// import SubmitButton from './SubmitButton'

// function App() {

//   return (
//     <div>
//       <PasswordInput/>
//       <SubmitButton/>
//     </div>
//   )
// }

// export default App


import PasswordInput from "./PasswordInput";
import SubmitButton from "./SubmitButton";

/**
 * App Component
 * -------------
 * Combines PasswordInput and SubmitButton
 */
function App() {
  return (
    <div>
      <h1>Password Tracker</h1>
      <PasswordInput />
      <SubmitButton />
    </div>
  );
}

export default App;
