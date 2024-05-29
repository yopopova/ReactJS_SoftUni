import { Routes, Route } from 'react-router-dom'
import Header from "./components/header/Header";
import Home from "./components/home/Home";

function App() {
  return (
    <div id="box">
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
