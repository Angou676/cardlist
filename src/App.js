import CartList from "./components/CartList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Details from './components/Details'

function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path='/' exact element={<CartList/>} />
          <Route path='/details' exact element={<Details/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
