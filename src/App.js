import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import CardListContainer from "./components/CardListContainer";
import itemList from './data/data.js';

function App() {
  return (
    <div>
      <Navbar />
      
      <Routes>
        <Route path="/your" element={<CardListContainer itemList={itemList}/>}>
        </Route>
        <Route path="/"  element={<CardListContainer itemList={itemList}/>}>
        </Route>
        <Route path="/blocked"  element={<CardListContainer itemList={itemList}/>}>
        </Route>
      </Routes>
      

    </div>
  );
}

export default App;
