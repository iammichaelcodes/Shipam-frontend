
import {Fragment} from 'react';
import './App.css';
import {Home} from './views/index';
import { Header } from './components/index';
import { BrowserRouter  as Router,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Fragment>
     
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
          
      </Router>
    </Fragment>
     
  );
}

export default App;
