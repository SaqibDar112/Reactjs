import './App.css'
import Login from './components/Login';
import Profile from './components/Profile';
import UserContextProvider from './context/UserContextProvider';
function App() {

  return (
    <UserContextProvider> {/*Just a global variable which all the downside components have access of this variable*/}
    <h1>Learning React</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App;