import './App.css';
import {Routes, Route,} from 'react-router-dom'
import { useSelector } from 'react-redux';
import {TourList} from './pages/tourList/TourList';
import {AboutPage} from './pages/aboutPage/AboutPage';
import {ProfilePage} from './pages/profilePage/ProfilePage';
import {NotFoundPage} from './pages/notFoundPage/NotFoundPage'
import { Counter } from './features/counter/Counter';
import Header from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

function App() {
  const style = {
    day: {
        color: "black",
        backgroundColor: "white",
    },
    night: {
        color: "white",
        backgroundColor: "black",
    }
}

const currentMode = useSelector((state) => state.mode.current)

const currentStyle = currentMode === "day" ? style.day : style.night

  return (
  <div style={currentStyle}>
  <Header/>
    <Routes>
      <Route path='/' element={<TourList/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/profile' element={<ProfilePage/>} />
      <Route path='*'element={<NotFoundPage/>}/>
      <Route path='/counter' element={<Counter/>}/>
    </Routes>
  <Footer/>
  </div>
  )
}

export default App;