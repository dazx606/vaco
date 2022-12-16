
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './Screens/Home/Home';


import NavBar from './Components/NavBar/NavBar';
import Edit from './Screens/Edit/Edit';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index path='/' element={<Home />} />
          <Route path='/Edit' element={<Edit />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
