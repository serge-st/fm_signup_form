import { useState } from "react";
import { UserInfo } from "./User/user-info.dto"
import { Form } from "./Form";

export const App: React.FC = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo>({
    firstName: "",
    lastName: "",
    emailAddress: "",
    password: "",
  });

  const changeAppState = (formData: UserInfo) => {
    setIsFormSubmitted(!isFormSubmitted);
    setUserInfo(formData);
  }

  const displayUserInfoExample = (): string => {
    console.log(JSON.stringify(userInfo, null, 2))
    return JSON.stringify(userInfo, null, 2);
  }

  return (
    <div className="App">
      <div className="PromoText">
        <h1>Learn to code by<br />watching others</h1>
        <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
      </div>
      {isFormSubmitted ? <div>Data sent to your backend:<br /><pre>{`\n ${displayUserInfoExample()}`}</pre></div> : <Form changeAppState={changeAppState} />}
    </div>
  )
}