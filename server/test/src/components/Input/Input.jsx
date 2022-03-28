import { useState } from "react";

const Input = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <>
      <div className="contact__form__div">
        <label htmlFor={label} className="contact__form__div-tag">
          {label}
        </label>
        <input
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          onFocus={() =>
            inputProps.name === "confirmPassword" && setFocused(true)
          }
          focused={focused.toString()}
          className="contact__form__div-input"
        />
        <span>{errorMessage}</span>
      </div>
    </>
  );
};

export default Input;
