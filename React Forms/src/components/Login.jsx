import { useState } from "react";
import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength} from "../util/validation";

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredFormValues, setEnteredFormValues] = useState({
    email: '',
    password: ''
  });

  const [didEdit, setDitEdit] = useState({
    email: false,
    password: false
  });

  // function handleEmailChange(event) {
  //   setEnteredEmail(event.target.value);
  // }
  // function handlePasswordChange(event) {
  //   setEnteredPassword(event.target.value);
  // }
  function handleFormChange(identifier,value) {
    setEnteredFormValues({
      ...enteredFormValues,
      [identifier]: value
    });
    setDitEdit({
      ...didEdit,
      [identifier]: false
    });
  }

  //   function handleFormChange2(event) {
  //   setEnteredFormValues({
  //     ...enteredFormValues,
  //     [event.target.name]: event.target.value
  //   });
  // }

  function handleSubmit(event) {
    event.preventDefault();
    // console.log("Email:", enteredEmail);
    // console.log("Password:", enteredPassword);
    const fd = new FormData(event.target);
    const formData = Object.fromEntries(fd.entries());
    if (formData['email'] === "" || formData['password'] === "") {
      alert("Email and password required.");
      return;
    }
    console.log("Form Data:", formData);
    // Reset form values
    setEnteredFormValues({
      email: '',
      password: ''
    });
    setDitEdit({
      email: false,
      password: false
    });
    // You can add further logic here, like sending the data to a server
    event.target.reset(); // Reset the form fields
  }

  const emailIsValid =
    !isEmail(enteredFormValues.email) &&
    isNotEmpty(enteredFormValues.email) &&
    didEdit.email;
  const passwordIsValid =
    didEdit.password && !hasMinLength(enteredFormValues.password, 6);

  function handleInputBlur(identifier, event) {
    setDitEdit({
      ...didEdit,
      [identifier]: true
    });
  }


  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={(event) => handleInputBlur("email", event.target.value)}
          onChange={(event) => handleFormChange("email", event.target.value)}
          value={enteredFormValues.email}
          error={emailIsValid ? "Please enter a valid email address." : ""}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={(event) => handleInputBlur("password", event.target.value)}
          onChange={(event) => handleFormChange("password", event.target.value)}
          value={enteredFormValues.password}
          error={passwordIsValid ? "Password must be at least 6 characters long." : ""}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
