import Form from './Components/Form';
import Home from './Components/Home';
import Map from './Components/Map';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route index element={<Form />} />
            <Route path="Home" element={<Home />} />
            <Route path="Map" element={<Map />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
