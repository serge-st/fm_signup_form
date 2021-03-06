import { useState } from "react"
import { Input } from "../Input/Input"
import { UserInfoEnum } from "../user-data/user-info.enum";
import { userBlankData, UserInfo } from "../user-data/user-info.dto"
import "./Form.scss";
interface FormProps {
  changeAppState: (userInfo: UserInfo) => void;
}

// eslint-disable-next-line no-useless-escape
export const emailCondition = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// 10 char long, 1 digit, 1 lower and 1 upper case
export const passwordCondition = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{10,}$/;

export const Form: React.FC<FormProps> = ({ changeAppState }) => {
  const [userInfo, setUserInfo] = useState<UserInfo>(userBlankData);
  const [errors, setErrors] = useState<(keyof UserInfo)[]>([]);

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
    if (Object.values(userInfo).includes("")) {
      const emptyFields = (Object.entries(userInfo) as [keyof UserInfo, string][]).filter(el => el[1] === "" ).map(el => el[0])
      setErrors(emptyFields)
    } else if (!emailCondition.test(userInfo.emailAddress)) {
      console.log("weak emial/")
      setErrors([...errors, "emailAddress"]);
    } else if (!passwordCondition.test(userInfo.password)) {
      console.log("weak /password")
      setErrors([...errors, "password"]);
    } else {
      setErrors([]);
      changeAppState(userInfo);
    }
  }

  return (
    <div className="FormContainer">
      <div className="TryFreePanel">
        <div><strong>Try it free 7 days</strong> then $20/mo. thereafter</div>
      </div>
      <form>
        {
          (Object.entries(userInfo) as [keyof UserInfo, string][])
            .map(([key, value], index) => {
              return (
                <Input
                  key={index}
                  name={key}
                  isError={errors.includes(key)}
                  placeholder={UserInfoEnum[key as keyof typeof UserInfoEnum]}
                  type={key === "password" ? "password" : "text"}
                  onUserChange={handleUserInfo} value={value}
                />
              )
            }
          )
        }

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