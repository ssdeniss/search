import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Search from './components/pages/Search/Search';
import Data from "./redux/Data"
import Header from './components/Header/Header';

import './styles/Styles.scss';

function App() {
  return (
    <div className="App">
      <Data />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
