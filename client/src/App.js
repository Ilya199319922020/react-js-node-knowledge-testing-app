import { Route, Routes, Navigate } from 'react-router-dom';
import Registration from './components/Registration';
import Test from './components/Test';
import './App.css';

function App() {
  return (
    <Routes >
      <Route path='/' element={<Navigate replace to="/registration" />} />
      <Route path='/registration' element={<Registration />} />
      <Route path='/testing' element={<Test />} />
    </Routes>
  );
}

export default App;
