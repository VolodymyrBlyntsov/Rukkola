import './App.scss';
import Header from './components/Header/Header';
import JobsList from './components/Jobs/JobsList';
import JobDetails from './components/JobDetails/JobDetails';
import { Routes, Route, Navigate } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header />  
      <Routes>
        <Route path='/' element={ <Navigate to='/jobs' /> } />
        <Route path='/jobs' element={ <JobsList /> } />
        <Route path='/jobs/:position' element={ <JobDetails /> } />
      </Routes>
    </div>
  );
}

export default App;
