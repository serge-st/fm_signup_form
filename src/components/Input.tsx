interface InputProps {
  placeholder: string;
  name: string;
  value: string;
  type: string;
  onUserChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({ name, placeholder, type, onUserChange, value }) => {

  return (
    <input name={name} placeholder={placeholder} type={type} onChange={onUserChange} value={value}/>
  )
}