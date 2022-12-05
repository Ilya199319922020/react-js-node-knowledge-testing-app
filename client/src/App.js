import { Route, Routes, Navigate } from 'react-router-dom';
import Registration from './components/Registration';
import Test from './components/Test';
import './App.css';
import Header from './components/Header/Header';
import TableComponent from './components/ReportComponents/TableComponent';

function App() {
  return (
    <Routes >
      <Route path='/' element={<Navigate replace to="/registration" />} />
      <Route path='/' element={<Header />}>
        <Route path='/registration' element={<Registration />} />
        <Route path='/testing' element={<Test />} />
        <Route path='/report' element={<TableComponent />} />
      </Route>
    </Routes>
  );
}

export default App;
