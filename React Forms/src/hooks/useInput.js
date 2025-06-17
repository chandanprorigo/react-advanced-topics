import { useState } from "react";

export function  useInput(defaultValue, ValidationFn) {
    const [enteredValue, setEnteredValue] = useState(defaultValue);
    const [didEdit, setDidEdit] = useState(false);

    const isValid = ValidationFn ? ValidationFn(enteredValue) : true;

    function handleInputChange(event) {
        setEnteredValue(event.target.value);
        setDidEdit(true);
      }

      function handleInputBlur() {
        setDidEdit(true);
      }

      function markAsTouched() {
        setDidEdit(true);
      }

    return {
        value: enteredValue,
        handleInputChange,
        handleInputBlur,
        markAsTouched,
        hasError: didEdit && !isValid,
    };
}