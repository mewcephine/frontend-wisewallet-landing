import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';

const navLinkStyle = 'p-2 font-bold uppercase hover:underline';

function App() {
  return (
    <div className='min-h-screen bg-mono-light'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
