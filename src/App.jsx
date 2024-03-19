import "./styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Price from "./Components/Price/Price";
import Overview from "./Components/Overview/Overview";
import About from "./Components/About/About";
import Tokenomics from "./Components/Tokenomics/Tokenomics";
import Team from "./Components/Team/Team";
import Sentiment from "./Components/Sentiment/Sentiment";
import GetStarted from "./Components/GetStarted/GetStarted";
import Trending from "./Components/Trending/Trending";
import YouMayAlsoLike from "./Components/YouMayAlsoLike/YouMayAlsoLike";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      <div className="main__container">
        <Price />
        <BrowserRouter>
          <Overview />
        </BrowserRouter>
        <Sentiment />
        <About />
        <Tokenomics />
        <Team />
      </div>
      <YouMayAlsoLike />
      <div className="left__container">
        <GetStarted />
        <Trending />
      </div>
    </>
  );
}

export default App;
