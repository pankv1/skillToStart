import "./App.scss";
import Footer from "./Components/Footer/Footer";

import Header from "./Components/Header/Header";
import MainPage from "./Pages/MainPage/MainPage";

function App() {
  return (
    <>
      <Header />
      <div className="content">
        <MainPage />
        <Footer />
      </div>
    </>
  );
}

export default App;
