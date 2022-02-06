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

  const errorCondition = (): boolean => {
    if (isError && !isFocused && value.length === 0) {
      return true
    }
    return false
  }

  return (
    <div
      style={errorCondition() ? {marginBottom: ".3em"} : undefined}
      className={errorCondition() ? "errorExclamation" : ""}
    >
      <input
        className={errorCondition() ? "errorInput" : ""}
        name={name}
        placeholder={placeholder}
        type={type}
        onChange={onUserChange}
        value={value}
        onFocus={handleFocus}
        onBlur={handleFocus}
      />
      {errorCondition() && <p className="errorMessage" >{UserInfoEnum[name as keyof typeof UserInfoEnum]} cannot be empty</p>}
    </div>
  )
}