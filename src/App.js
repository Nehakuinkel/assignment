import Routing from "./Routing";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
//import Main from "./components/shared/Main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routing/>
      <Footer/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
