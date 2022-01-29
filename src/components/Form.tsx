import { useState } from "react"
import { Input } from "./Input"

export const Form: React.FC = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    password: "",
  });

  // const handleUserInfo = (event: Event) => {
  //   const { name, value } = event.target as HTMLInputElement;

  //   setUserInfo(prevUserInfo => {
  //     return {
  //       ...prevUserInfo,
  //       [name]: value
  //     }
  //   })
  // }
  const handleUserInfo = () => {
    console.log("function");
  }

  return (
    <div className="FormContainer">
      <button className="TryFreeButton"><strong>Try it free 7 days</strong> then<br />$20/mo. thereafter</button>
      <form>
        <Input name="firstName" placeholder="First Name" type="text" onUserChange={handleUserInfo} />
        <Input name="lastName" placeholder="Last Name" type="text" onUserChange={handleUserInfo} />
        <Input name="emailAddress" placeholder="Email Address" type="email" onUserChange={handleUserInfo} />
        <Input name="password" placeholder="Password" type="password" onUserChange={handleUserInfo} />

        <button type="submit"></button>
      </form>
    </div>
  )
}