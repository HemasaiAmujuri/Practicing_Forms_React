
import Loginpage from './pages/Login'
import { BrowserRouter, Route, Routes  }  from 'react-router-dom';
import SignUp from './pages/Signup'


function App(){
    return(
      <div>
        <BrowserRouter>
         <Routes >
            <Route path="/" element ={<Loginpage />}></Route> 
            <Route path="/signUp" element ={<SignUp />}></Route> 
            <Route path="/login" element ={ <Loginpage />}></Route>
         </Routes >
        </BrowserRouter>
      </div>
    );
}


export default App;