import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateComponent';
import Sidebar from './components/Sidebar'; // Import Sidebar
import Faculty from './components/Faculty';
import Main from './components/Main'
import Notfound from './components/Notfound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* Navigation bar */}
        <Nav />

        {/* Main Layout: Sidebar on Top */}
        <div className="main-layout">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content Area */}
          <div className="content-area">
            <Routes>
              <Route element={<PrivateComponent />}>
                <Route path="/" element={<Main />} />
                <Route path="/add" element={<AddProduct />} />
                <Route path="/update/:id" element={<UpdateProduct />} />
                <Route path="/logout" element={<h1>Logout Component</h1>} />
                <Route path="/profile" element={<h1>Profile Component</h1>} />
                <Route path='/notfound' element={<Notfound />}></Route>

                <Route path="/products" element={<ProductList />}></Route>
              </Route>

              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path='/faculty' element={<Faculty />}></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
