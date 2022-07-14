import './App.css';
import {Routes,Route, BrowserRouter} from 'react-router-dom';
import Nav from "./components/Nav";
import ProductList from "./pages/ProductList";
import Login from './pages/Login';
import DetailRedirect from './route/DetailRedirect'
import { useState ,useEffect} from 'react';
function App() {
  const [auth,setAuth] = useState(false);
  useEffect(()=>{
    console.log('로그인인증값',auth)
  },[auth])
  return (
    <div className="App">
     <BrowserRouter>
          <Nav auth={auth} setAuth={setAuth} />
          <Routes>
            <Route path='/' element={<ProductList />} />
            <Route path='/login' element={<Login setAuth={setAuth} />} />
            <Route 
              path='/productList/:id' 
              element={<DetailRedirect auth={auth} />} 
             />
       
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;