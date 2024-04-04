import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Navbar } from "./component/Navbar"
import { Home } from "./component/Home"


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' component={Home } />
          {/* <Route path='/singlepage/:id' component={SinglePage} exact /> */}
        </Routes>        
      </Router>
    </>
  )
}

export default App
