import "./App.css";
import Header from "./components/Header/Header";
import Question from "./components/Question/Question";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Shop></Shop>
      <Question></Question>
      <p className="footer">
        Coded by <span> Md. Masum Billah</span>
      </p>
    </div>
  );
}

export default App;
