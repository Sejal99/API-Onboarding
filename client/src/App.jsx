import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Signup from './components/SignUp';
import Signin from './components/Signin';
import Page from './components/Page';
import Navbar from './components/Navbar';

function App() {
    return (
      <div style={{
        width:"100vw",
        height:"100vh",
        backgroundColor:"#eeeeee"
      }}>
        <BrowserRouter>

        <Navbar/>
          <Routes>
          <Route path={"/signup"} element={<Signup />} />
          <Route path={"/signin"} element={<Signin />} />
          <Route path={"/page"} element={<Page />} />
        
          </Routes>
        

        </BrowserRouter>
      
        </div>
    );
}

export default App;