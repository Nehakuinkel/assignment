import Routing from "./Routing";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import { Toaster } from "react-hot-toast";
import Navbarleft from "./components/shared/Navbarleft";
import { useState } from "react";

function App() {
  const [searchData, setSearchData] = useState("");
  return (
    <div className="App">
        <BrowserRouter>
          <Header searchData={searchData} setSearchData={setSearchData}/>
          <Navbarleft />
          <Routing searchData={searchData} setSearchData={setSearchData}/>
          <Footer />
        </BrowserRouter>
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
