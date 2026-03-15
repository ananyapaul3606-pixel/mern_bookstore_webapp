import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateBook from './component/createbook';
import Allbooks from './component/allbooks';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<CreateBook/>}/>
        <Route exact path="/viewbooks" element={<Allbooks/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
