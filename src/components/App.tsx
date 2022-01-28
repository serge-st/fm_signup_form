import { Form } from "./Form";

export const App: React.FC = () => {
  return (
    <div className="App">
      <div className="PromoText">
        <h1>Learn to code by<br />watching others</h1>
        <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
      </div>
      <Form />
    </div>
  )
}