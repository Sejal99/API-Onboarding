import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Signup from './components/SignUp';
import Signin from './components/Signin';
import Page from './components/Page';
import Navbar from './components/Navbar';
import Info from './components/info';
import Num from './components/Num';
import In from './components/in';
import Logic from './components/logic';

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
          <Route path={"/info"} element={<Info />} />
          <Route path={"/num"} element={<Num />} />
          <Route path={"/in"} element={<In />} />
          <Route path={"/"} element={<Logic />} />
          </Routes>
        

        </BrowserRouter>
      
        </div>
    );
}

export default App;