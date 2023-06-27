import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import LoginPage from "./Pages/LoginPage";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('AuthenticatedUser') ? true : false);




  // useEffect(()=>{
  //   if(localStorage.getItem('AuthenticatedUser')){
  //     setIsAuthenticated(true)
  //   }
  // },[])

  return (
    <><BrowserRouter>
      {isAuthenticated ? (
        <Routes>
          <Route path="/" element={<MainPage setIsAuthenticated={setIsAuthenticated} username={JSON.parse(localStorage.getItem('AuthenticatedUser')).username}/>} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<LoginPage setIsAuthenticated={setIsAuthenticated}/>} />
        </Routes>
      )}
    </BrowserRouter></>
  );
};

export default App;
