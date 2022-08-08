import React from 'react'
import { Routes ,Route, BrowserRouter } from 'react-router-dom'
import RegisterPage from "./registerPage.js"
import Quiz from "./quiz.js"  


function App() {
  return (
    <>

<BrowserRouter>

<Routes>


<Route exact path='/' element={<RegisterPage/>} />
<Route path='/quiz' element={<Quiz/>} />








</Routes>

</BrowserRouter>

    </>
  );
}

export default App;
