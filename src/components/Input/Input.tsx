import { useState } from "react";
import { UserInfoEnum } from "../user-data/user-info.enum";
import "./Input.scss";

interface InputProps {
  placeholder: string;
  name: string;
  value: string;
  type: string;
  onUserChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({ name, placeholder, type, onUserChange, value }) => {
  // TODO don't forget to change default state to false
  const [isError, setIsError] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  }

  const handleBlur = () => {
    setIsFocused(false);
  }

  return (
    <div style={(isError && !isFocused) ? {marginBottom: ".3em"} : undefined} className={isError && !isFocused ? "errorExclamation" : ""}>
      <input className={isError && !isFocused ? "errorInput" : ""} name={name} placeholder={placeholder} type={type} onChange={onUserChange} value={value} onFocus={handleFocus} onBlur={handleBlur} />
      {(isError && !isFocused) && <p className="errorMessage" >{UserInfoEnum[name as keyof typeof UserInfoEnum]} cannot be empty</p>}
    </div>
  )
}