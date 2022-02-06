import { useState } from "react";
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

  const emptyErrorCondition = (): boolean => {
    if (isError && !isFocused && value.length === 0) {
      return true;
    }
    return false;
  }



  return (
    <div
      style={emptyErrorCondition() ? {marginBottom: ".3em"} : undefined}
      className={emptyErrorCondition() ? "errorExclamation" : ""}
    >
      <input
        className={emptyErrorCondition() ? "errorInput" : ""}
        name={name}
        placeholder={placeholder}
        type={type}
        onChange={onUserChange}
        value={value}
        onFocus={handleFocus}
        onBlur={handleFocus}
      />
      {emptyErrorCondition() && <p className="errorMessage" >{UserInfoEnum[name as keyof typeof UserInfoEnum]} cannot be empty</p>}
      {/* {(passwordEmailErrorCondition() && name === "emailAddress") && <p className="errorMessage" >Please enter a valid email address</p>}
      {(passwordEmailErrorCondition() && name === "password") && <p className="errorMessage" >Password must contain 1 digit, 1 upper and lower case character</p>} */}
    </div>
  )
}