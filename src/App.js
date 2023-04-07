import logo from './logo.svg';
import './App.scss';
import Header from './layouts/Header/Header';
import HomeContainer from './pages/home/HomeContainer';
import Footer from './layouts/Footer/Footer';
import { Route , Routes} from 'react-router-dom';
import AboutContainer from './pages/About/AboutContainer';
import FaqContainer from './pages/Faq/FaqContainer';



function App() {
  return (
    <div className="App">
      <Header/>
    {/* <HomeContainer/> */}
    <Routes>
      <Route path='/' element={<HomeContainer/>}/>
      <Route path='about' element={<AboutContainer/>}/>
      <Route path='faq' element={<FaqContainer/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
