import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<DetailPage />} path="/:id" />
      </Routes>
    </>
  );
}

export default App;
