
 import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'
import Hello from './Hello.jsx'
import Bye from './Bye.jsx'
import Arrays from './Arrays.jsx'
import Object from './Object.jsx'
import ArrofObj from './ArrofObj.jsx'
function App() {
  return (
    <>
     <Hello />
     <h4>Welcome to the App Component</h4>
     <img src={reactLogo} alt="React Logo" width="200px" />
     <Bye />
     <Arrays />
     <Object />
      <ArrofObj />
    
    </>
  )
}


export default App
