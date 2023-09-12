import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Employee from "./components/Employee/Employee";
import VerticalScrollCalendar from "./components/VerticalScrollCalendar";
import Dropdown from "./components/Dropdown";

function App() {
  return (
    <div style={{margin:'30px'}} >
      {/* <VerticalScrollCalendar/> */}
      <Dropdown/>
      {/* <Router>
        <Routes>
          <Route path='/' exact element={<Register/>} />
          <Route path='/employee' exact element={<Employee/>} />
        </Routes>
      </Router> */}

    </div>
  );
}

export default App;
