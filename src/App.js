import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register";

function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path='/' exact element={<Register/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
