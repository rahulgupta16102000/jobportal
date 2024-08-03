// frontend/src/App.js
import   { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
 import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
// import PrivateRoute from './components/PrivateRoute';
import NavBar from './components/Navnar';
import GetJobs from './components/GetJobs';
import AdminDashboard from './components/AdminDashboard';
import IndividualPost from './components/IndividualPost';
import Footer from './components/Footer';
import Home from './components/Home';


 function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };
  const handleRegister = (userData) => {
    setUser(userData);
  };
const isAuthenticated =()=>{
     if(user)return true;
     return false;
}
const PrivateRoute = ({   isAuthenticated  , children }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};
  return (
    <BrowserRouter>
    <div  >

    <NavBar/>
    </div>
    <div style={{minHeight:'100vh',marginTop:'5rem'}}>
    <Routes>
    <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/registration" element={<RegistrationPage onRegister={handleRegister} />} />
        <Route path="/admindashboard" element={<AdminDashboard   />} />
        <Route
          path="/home"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              {/* <ListBoard /> */}
              <Home/>
              {/* <h1>Successfully login</h1> */}
            </PrivateRoute>
          }
          
        />
        <Route
          path="/jobs"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              {/* <ListBoard /> */}
              <GetJobs/>
              {/* <h1>Successfully login</h1> */}
            </PrivateRoute>
          }
          
        />
          <Route path='/jobs/:companyName/:employmentType/:id' element={<IndividualPost/>}/>
        {/* Use PrivateRoute after login */}
        {/* <PrivateRoute path="/lists" element={<ListBoard />} isAuthenticated={isAuthenticated()} /> */}

        {/* Redirect to login if not authenticated */}
        <Route
          path="/"
          element={
            
              <Navigate to="/home" />
            
          }
        />
      
    </Routes>
    </div>
<Footer/>
    </BrowserRouter>
  );
}

export default App;
