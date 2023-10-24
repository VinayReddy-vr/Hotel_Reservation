import {BrowserRouter,Routes,Route,HashRouter} from "react-router-dom"
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel.jsx";
import SignIn from "./pages/signIn/SignIn";

function App() {
  return (
    <HashRouter>
       <Routes>
         <Route path="/" element={<Home/>}/>
         < Route path="/hotels" element={<List/>}/>
         <Route path="hotels/:id" element={<Hotel/>}/>
         <Route path="/login" element={<SignIn/>}/>
       </Routes>
    </HashRouter>
  );
}

export default App;
