import "./App.css";
import Design from "./component/design/design";
import Hero from "./component/hero/hero";
import Service from "./component/service/service";
import Team from "./component/team/team";

function App() {
  return (
    <div className="App">
      <Hero />
      <Design />
      <Team />
      <Service />
    </div>
  );
}

export default App;
