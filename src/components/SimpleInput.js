import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim() == "") {
      setEnteredNameIsValid(false);
      setEnteredNameTouched(true);
      return;
    }
    setEnteredNameIsValid(true);
    console.log(enteredName);
    setEnteredName("");
  };
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameInputChangeHandler}
        ></input>
        {nameInputIsInvalid && (
          <p className="error-text">Name must be not empty</p>
        )}
      </div>
      <div className="form-controls">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
