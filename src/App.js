
import {Fragment} from 'react';
import './App.css';
import {Home,Partners,Developer,Track, SignUp,Pricing} from './views/index';
import { Footer, Header } from './components/index';
import { BrowserRouter  as Router,Routes, Route } from 'react-router-dom';



function App() {
  return (
    <Fragment>
     
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/partner" element={<Partners />}/>
          <Route path="/dev" element={<Developer />}/>
          <Route path="/track" element={<Track />}/>
          <Route path="/pricing" element={<Pricing />}/>
          <Route path="/signup" element={<SignUp />}/>
        </Routes>
        <Footer />
      </Router>
    </Fragment>
     
  );
}

export default App;
