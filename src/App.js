import Routing from "./Routing";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import { Toaster } from "react-hot-toast";

//import Main from "./components/shared/Main";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header />
          <Routing />
          <Toaster position="top-right"/>
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
