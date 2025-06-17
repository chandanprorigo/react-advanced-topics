import { hasMinLength, isEmail, isEqualsToOtherValue, isNotEmpty } from "../../util/validation";

export default function SignupFormAction() {
  function signupAction(formData) {
      const enteredData = Object.fromEntries(formData);
      console.log('Form submitted with data:', enteredData);

      let error = [];
      if(!isEmail(enteredData.email)) {
        error.push('Please enter a valid email address.');
      }
      if(!isNotEmpty(enteredData.password || !hasMinLength(enteredData.password, 6))) {
        error.push('Password must be at least 6 characters long.');
      }
      if(!isEqualsToOtherValue(enteredData.password, enteredData['confirm-password'])) {
        error.push('Passwords do not match.');
      }
      if(!isNotEmpty(enteredData['first-name']) || !isNotEmpty(enteredData['last-name'])) {
        error.push('First name and last name are required.');
      }
      if(!isNotEmpty(enteredData.role)) {
        error.push('Please select your role.');
      }
      if(!enteredData.terms) {
        error.push('You must agree to the terms and conditions.');
      }
      if(enteredData.acquisition.length === 0) {
        error.push('Please select at least one option for how you found us.');
      }
  }
  return (
    <form action={signupAction}>
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get you started 🚀</p>

      <div className="control">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" />
      </div>

      <div className="control-row">
        <div className="control">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" />
        </div>

        <div className="control">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            name="confirm-password"
          />
        </div>
      </div>

      <hr />

      <div className="control-row">
        <div className="control">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" name="first-name" />
        </div>

        <div className="control">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" name="last-name" />
        </div>
      </div>

      <div className="control">
        <label htmlFor="phone">What best describes your role?</label>
        <select id="role" name="role">
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="employee">Employee</option>
          <option value="founder">Founder</option>
          <option value="other">Other</option>
        </select>
      </div>

      <fieldset>
        <legend>How did you find us?</legend>
        <div className="control">
          <input
            type="checkbox"
            id="google"
            name="acquisition"
            value="google"
          />
          <label htmlFor="google">Google</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="friend"
            name="acquisition"
            value="friend"
          />
          <label htmlFor="friend">Referred by friend</label>
        </div>

        <div className="control">
          <input type="checkbox" id="other" name="acquisition" value="other" />
          <label htmlFor="other">Other</label>
        </div>
      </fieldset>

      <div className="control">
        <label htmlFor="terms-and-conditions">
          <input type="checkbox" id="terms-and-conditions" name="terms" />I
          agree to the terms and conditions
        </label>
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button className="button">Sign up</button>
      </p>
    </form>
  );
}
