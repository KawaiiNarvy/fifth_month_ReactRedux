import './App.css';
import {Routes, Route,} from 'react-router-dom'

import {TourList} from './pages/tourList/TourList';
import {AboutPage} from './pages/aboutPage/AboutPage';
import {ProfilePage} from './pages/profilePage/ProfilePage';
import {NotFoundPage} from './pages/notFoundPage/NotFoundPage'

function App() {
  
  return (
  <>
    <Routes>
      <Route path='/' element={<TourList/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/profile' element={<ProfilePage/>} />
      <Route path='*'element={<NotFoundPage/>}/>
    </Routes>
  </>
  )
}

export default App;