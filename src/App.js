import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./pages/detailCandidates";
import ListCandidates from "./pages/listCandidates";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListCandidates />}></Route>
          <Route path=":id" element={<Detail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
