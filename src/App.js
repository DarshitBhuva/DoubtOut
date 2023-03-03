
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Editor from './components/Editor/Editor';
import Homepage from './components/Homepage/Homepage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Questions from './components/Questions/Questions';
import Content from './components/Questions/Content';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Profile from './components/Profile/Profile';
import UserQuestionContent from './components/Profile/Content';
import Admin from './components/Admin/user';
<<<<<<< HEAD
import Chart from './components/charts/Chart';
import MyQuestions from './components/MyQuestions/MyQuestions';
import MyAnswers from './components/MyAnswers/MyAnswers';
=======
import Tags from './components/Tags/Tags';
>>>>>>> ec32a564b7ac227563763f5b1fc4b46ec487270f

function App() {
  return (
    <div>
     <BrowserRouter>
      <Navbar />
      <Routes>

        <Route path = "/" element = {<Homepage/>}/>
     
        <Route path = "/editor" element = {<Editor/>}/>
        <Route path = "/login" element = {<Login/>}/>
        <Route path = "/register" element = {<Register/>}/>
        <Route path="/questions" element = {<Questions />}></Route>
        <Route path="/question/:type" element = {<Content />}></Route>
        <Route path="/answer/:type" element = {<UserQuestionContent />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/admin' element={<Admin />}></Route>
<<<<<<< HEAD
        <Route path='/chart' element={<Chart />}></Route>
        <Route path='/myquestions' element={<MyQuestions />}></Route>
        <Route path='/myanswers' element={<MyAnswers />}></Route>
        
=======
        <Route path = "/tags" element = {<Tags/>}></Route>
>>>>>>> ec32a564b7ac227563763f5b1fc4b46ec487270f
      </Routes>
      {/* <Footer /> */}
     </BrowserRouter>
    </div>
  );
}

export default App;
