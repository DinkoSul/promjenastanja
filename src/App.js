import "./App.css";

import StateFull from "./Components/StateFull";
import Zadatak from "./Components/Zadatak";
import MyCheckbox from "./Components/checkbox";
import Counter from "./Components/counter";
import Counterr from "./Components/counterr";
import EffectHook from "./Components/effectHook";
import Eventi from "./Components/eventi";
import Form from "./Components/forma";
import KlasPromjenaState from "./Components/klasPromjenaState";
import UnosTeksta from "./Components/unosTeksta";

function App() {
  return (
    <div className="App">
      {/* <Eventi />
      <KlasPromjenaState />
      <hr></hr>
      <Counter />
      <hr></hr>
      <UnosTeksta />
      <hr></hr>
      <MyCheckbox />
      <hr></hr>
      <Form />
      <hr></hr>
      <Counterr />
      <hr></hr>
      <StateFull />
      <hr />
       <EffectHook />*/}
      <Zadatak />
    </div>
  );
}

export default App;
