
import './App.css';
import ApiFetch from './components/ApiFetch';
import Header from './components/Header';
//import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Header/>
    <ApiFetch/>
    </div>
  );
}

export default App;
