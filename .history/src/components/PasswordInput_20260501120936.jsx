// Code PasswordInput Component Here

// function PasswordInput (){
//     return(
//         <>
//           <input type="text" name/>
//         </>
//     )
// }

// export default PasswordInput;




import { useState } from "react";

/**
 * PasswordInput Component
 * ------------------------
 * Purpose:
 * - Renders a password field
 * - Tracks user typing via state
 * - Logs every input change for security monitoring
 *
 * Connected to:
 * - App.jsx (parent container)
 */
function PasswordInput() {
  const [password, setPassword] = useState("");

  // Event handler for input changes
  function handleChange(event) {
    console.log("Entering password...");
    setPassword(event.target.value);
  }

  return (
    <div>
      <label>Password: </label>
      <input
        type="password"
        value={password}
        onChange={handleChange}
      />
    </div>
  );
}

export default PasswordInput;