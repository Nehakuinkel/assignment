import Routing from "./Routing";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import { Toaster } from "react-hot-toast";
import Navbarleft from "./components/shared/Navbarleft";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navbarleft />
        <Routing />
        <Footer />
      </BrowserRouter>
      <Toaster position="top" />
    </div>
  );
}

export default App;
