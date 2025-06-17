import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength} from "../util/validation";
import { useInput } from "../hooks/useInput";
import { useState } from "react";

export default function Login_useState() {
    const { 
        value: emailValue,
        handleInputChange: handleEmailChange,
        handleInputBlur: handleEmailBlur,
        markAsTouched: markEmailTouched,
        hasError: emailHasError
    } =  useInput('', (value) => isNotEmpty(value) && isEmail(value));

    const { 
        value: passwordValue,
        handleInputChange: handlePasswordChange,
        handleInputBlur: handlePasswordBlur,
        markAsTouched: markPasswordTouched,
        hasError: passwordHasError
    } =  useInput('', (value) => isNotEmpty(value) && hasMinLength(value, 6));


    function handleSubmit(event) {
      event.preventDefault();
      markEmailTouched();
      markPasswordTouched();

      const emailIsValid = isNotEmpty(emailValue) && isEmail(emailValue);
      const passwordIsValid =
        isNotEmpty(passwordValue) && hasMinLength(passwordValue, 6);

      if (!emailIsValid || !passwordIsValid) {
        alert("Please fix the errors before submitting.");
        return;
      }

      const fd = new FormData(event.target);
      const formData = Object.fromEntries(fd.entries());
      console.log("Form Data:", formData);
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
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={emailValue}
          error={emailHasError ? "Please enter a valid email address." : ""}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
          value={passwordValue}
          error={passwordHasError ? "Password must be at least 6 characters long." : ""}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
