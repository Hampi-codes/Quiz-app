import { Route, Routes } from "react-router-dom";
import Home from "../components/home";
import Quiz from "../components/quiz";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<Quiz />} />
    </Routes>
  );
};

export default AppRoutes;
