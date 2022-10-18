import "./App.css";
import NavigationBar from "./Components/NavigatonBar";

import Productlist,{Footr} from './Components/Productlis'
function App() {

  return (
    <div className="App">
      <NavigationBar/>
      <section className="info">
        <img src="https://codetheweb.blog/assets/img/icon2.png" />
        <h1>
          Learn HTML &mdash;{" "}
          <a href="https://codetheweb.blog/" target="_blank">
            Code The Web
          </a>
        </h1>
      </section>
     <Productlist/>
     <Footr/>
    </div>
  );
}

export default App;
