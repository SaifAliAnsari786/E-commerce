import './App.css';
import Home from './component/Home';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import NewRout from './component/NewRoute';
import ProductsListing from './component/ProductsListing';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/data/:id" element={<NewRout />} />
      <Route path="/product" element={<ProductsListing />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;
