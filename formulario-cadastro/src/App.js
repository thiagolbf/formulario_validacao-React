import "./App.css";
import { Switch, Route } from "react-router-dom";
import Form from "./components/Form";
import Registred from "./components/Registred";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Form} />

        <Route exact path="/sucess/:name" component={Registred} />
      </Switch>
    </div>
  );
}

export default App;
