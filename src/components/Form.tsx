import { useState } from "react"
import { Input } from "./Input"

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
        <Input name="firstName" placeholder="First Name" type="text" onUserChange={handleUserInfo} value={userInfo.firstName} />
        <Input name="lastName" placeholder="Last Name" type="text" onUserChange={handleUserInfo} value={userInfo.lastName} />
        <Input name="emailAddress" placeholder="Email Address" type="email" onUserChange={handleUserInfo} value={userInfo.emailAddress} />
        <Input name="password" placeholder="Password" type="password" onUserChange={handleUserInfo} value={userInfo.password} />

        <button type="submit"></button>
      </form>
    </div>
  )
}