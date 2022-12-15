
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './Screens/Home/Home';
import NavBar from './Components/NavBar';
import Other from './Screens/Other/Other';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path="/" element={<NavBar />}>
          <Route index  path='/' element={<Home />} />
          <Route path='/Other' element={<Other />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
