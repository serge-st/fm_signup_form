import { useState } from "react";
import { emailCondition, passwordCondition } from "../Form/Form";
import { UserInfoEnum } from "../user-data/user-info.enum";
import "./Input.scss";

interface InputProps {
  placeholder: string;
  name: string;
  value: string;
  type: string;
  onUserChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isError: boolean;
}

export const Input: React.FC<InputProps> = ({ name, placeholder, type, onUserChange, value, isError }) => { 
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(!isFocused);
  }

  const isEmptyError = (): boolean => {
    if (isError && !isFocused && value.length === 0) {
      return true;
    }
    return false;
  }

  const isInvalEmailError = (): boolean => {
    if (name !== "emailAddress") {
      return false;
    } else if (isError && !isFocused && value.length > 0 && !emailCondition.test(value)) {
      return true;
    }
    return false
  }

  const isInvalPasswordError = (): boolean => {
    if (name !== "password") {
      return false;
    } else if (isError && !isFocused && value.length > 0 && !passwordCondition.test(value)) {
      return true;
    }
    return false;
  }


  return (
    <div
      style={isEmptyError() || isInvalEmailError() || isInvalPasswordError() ? {marginBottom: ".3em"} : undefined}
      className={isEmptyError() || isInvalEmailError() || isInvalPasswordError() ? "errorExclamation" : ""}
    >
      <input
        className={isEmptyError() || isInvalEmailError() || isInvalPasswordError() ? "errorInput" : ""}
        name={name}
        placeholder={placeholder}
        type={type}
        onChange={onUserChange}
        value={value}
        onFocus={handleFocus}
        onBlur={handleFocus}
      />
      {isEmptyError()  && <p className="errorMessage" >{UserInfoEnum[name as keyof typeof UserInfoEnum]} cannot be empty</p>}
      {isInvalEmailError()  && <p className="errorMessage" >Please enter a valid email</p>}
      {isInvalPasswordError()  && <p className="errorMessage" >Password should be 10 char long and contain 1 digit and lower and upper case chars</p>}
    </div>
  )
}