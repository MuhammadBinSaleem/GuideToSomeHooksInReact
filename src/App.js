
import './App.css';
import UseCustomHooks from './UseCustomHooks';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseReducer from './UseReducer';
import UseRef from './UseRef';
import UsingCustomHooks from './UsingCustomHooks';
import Error404 from './Error404';
function App() {


  return (
    <>
  
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div>
          <h1>Main Page</h1>
        </div>}/>
          <Route path="/customhooks" element={<UsingCustomHooks />}/>
          <Route path="/useref" element={<UseRef />} />
          <Route path="/usereducer" element={<UseReducer />} />
          <Route path="*" element={<Error404/>}/>
      </Routes>
    </BrowserRouter>
  
    </>
  );
}

export default App;
