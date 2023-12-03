import { MyFooter } from "./components/Footer/MyFooter";
import { Main } from "./components/Main/Main";
import { Welcome } from "./components/Header/Welcome/Welcome";

function App() {
  return (
    <div className="App">
      <Welcome />
      <Main />
      <MyFooter />
    </div>
  );
}

export default App;
