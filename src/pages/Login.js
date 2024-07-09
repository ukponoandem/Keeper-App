import React from "react";
import ReactDOM from "react-dom"; // Import ReactDOM for rendering
import "../styles/login.css"
function Login() {
  function handleSubmit(event) {
     event.preventDefault();
    console.log('login submit');
    
    const formData = new FormData(event.target);
    const queryString = new URLSearchParams(formData).toString();
    const submitUrl = 'https://example.com/submit?firstname=&lastname=&email=&country=australia' + queryString;
    
    // Redirect current tab to the submission URL
    window.location.href = submitUrl;
  }



  return(
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

        <label htmlFor="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="email..."/>

        <label htmlFor="country">Country</label>
        <select id="country" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
          <option value="Nigeria">Nigeria</option>
          <option value="Egypt">Egypt</option>
          <option value="China">China</option>
          <option value="Camaron">Camaron</option>
          <option value="Amerecan">Amerecan</option>
        </select>
      
        <input type="submit" value="Submit"/>
      </form>
    </div>
  );
}

export default Login;
