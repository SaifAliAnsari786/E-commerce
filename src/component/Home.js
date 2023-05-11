// import './App.css';
import ApiProducts from './ApiProducts';
// import Button from './component/Button';
import Header from './Header'
import Navbar from './Navbar'
import Products from './Products';

function Home() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Products/>
      <ApiProducts/>
    </div>
  );
}

export default Home;