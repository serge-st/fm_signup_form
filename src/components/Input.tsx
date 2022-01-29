interface InputProps {
  placeholder: string;
  name: string;
  type: string;
  // onUserChange: (e: Event) => void;
  onUserChange: () => void;
}

export const Input: React.FC<InputProps> = ({ name, placeholder, type, onUserChange }) => {

  return (
    <input name={name} placeholder={placeholder} type={type} onChange={() => onUserChange()}/>
  )
}