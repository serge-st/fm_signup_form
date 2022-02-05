import { useState } from "react"
import { Input } from "../Input/Input"
import { UserInfoEnum } from "../user-data/user-info.enum";
import { userBlankData, UserInfo } from "../user-data/user-info.dto"
import "./Form.scss";
interface FormProps {
  changeAppState: (userInfo: UserInfo) => void;
}

export const Form: React.FC<FormProps> = ({ changeAppState }) => {
  const [userInfo, setUserInfo] = useState<UserInfo>(userBlankData);

  const handleUserInfo = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    setUserInfo(prevUserInfo => {
      return {
        ...prevUserInfo,
        [name]: value
      }
    })
  }

  const handleFormSubmit = () => {
    changeAppState(userInfo);
  }

  return (
    <div className="FormContainer">
      <div className="TryFreePanel">
        <div><strong>Try it free 7 days</strong> then $20/mo. thereafter</div>
      </div>
      <form>
        {Object.entries(userInfo).map(([key, value], index) => {
          return <Input key={index} name={key} placeholder={UserInfoEnum[key as keyof typeof UserInfoEnum]} type={key === "password" ? "password" : "text"} onUserChange={handleUserInfo} value={value} />
        })}

        <button type="button" onClick={handleFormSubmit} >CLAIM YOUR FREE TRIAL</button>

        <div className="TermsServices">
          <div>
            <p>By clicking the button, you are agreeing to our <a href="https://google.com" rel="noreferrer" target="_blank">Terns and Services</a></p>
          </div>
        </div>
      </form>
    </div>
  )
}