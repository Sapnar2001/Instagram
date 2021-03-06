import React,{createContext,useContext} from 'react';
import './App.css'
import NavBar from './components/Navbar'
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './components/screens/Home'
import Signin from './components/screens/Signin'
import Signup from './components/screens/Signup'
import Profile from './components/screens/Profile'
import CreatePost from './components/screens/CreatePost'
import {reducer, initialState} from './reducers/userReducer'
export const UserContext = createContext()



/*const Routing= ()=>{
  const history =useHistory()
  const{state,dispatch}= useContext(UserContext)
  useEffect(()=>{
const user = JSON.parse(localStorage.getItem("user"))
if(user)
{
  dispatch({type:"USER",payload:user})
  history.push('/')
}
else{

history.push('/signin')
}
  },[])
  */
 function App(){
  return(
  <BrowserRouter>
  <NavBar/>
  <Route exact path="/">
    <Home />
   </Route>
   <Route path="/signin">
    <Signin/>
   </Route>
   <Route path="/signup">
    <Signup />
   </Route>
   <Route path="/profile">
    <Profile />
   </Route>
   <Route path="/create">
    <CreatePost/>
   </Route>
 </BrowserRouter>
  );
 }

/*function App() {
const [state,dispatch] =useReducer(reducer, initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
   <BrowserRouter>
   <NavBar/>
<Routing />
 </BrowserRouter>
 </UserContext.Provider>
 
  );
  */

export default App;
