import { useState } from "react"
import { Input } from "./Input"
import { UserInfo } from "./user-info.enum";

export const Form: React.FC = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    password: "",
  });

  const handleUserInfo = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    setUserInfo(prevUserInfo => {
      return {
        ...prevUserInfo,
        [name]: value
      }
    })
  }

  return (
    <div className="FormContainer">
      <button className="TryFreeButton"><strong>Try it free 7 days</strong> then<br />$20/mo. thereafter</button>
      <form>
        {Object.entries(userInfo).map(([key, value], index) => {
          return <Input key={index} name={key} placeholder={UserInfo[key as keyof typeof UserInfo]} type={key === "password" ? "password" : "text"} onUserChange={handleUserInfo} value={value} />
        })}

        <button type="submit"></button>
      </form>
    </div>
  )
}