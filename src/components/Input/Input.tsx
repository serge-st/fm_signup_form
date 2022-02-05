import { useState, useRef } from "react"
import "./Input.scss"

interface InputProps {
  placeholder: string;
  name: string;
  value: string;
  type: string;
  onUserChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({ name, placeholder, type, onUserChange, value }) => {
  // TODO don't forget to change default state to false
  const [isError, setIsError] = useState(true);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  }

  const handleBlur = () => {
    setIsFocused(false);
  }

  return (
    <input className={isError && !isFocused ? "error" : ""} name={name} placeholder={placeholder} type={type} onChange={onUserChange} value={value} onFocus={handleFocus} onBlur={handleBlur} />
  )
}