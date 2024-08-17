import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Routes from "./routes/routes";
import AppHeader from "./components/appHeader";

const App = () => {
  return (
    <div className="app_div">
      <AppHeader />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
};

export default App;
