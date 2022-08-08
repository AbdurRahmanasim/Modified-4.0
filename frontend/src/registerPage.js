import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import "./registerPage.css"
import axios from 'axios';


function RegisterPage() {

  const navigate = useNavigate()



const [email , setEmail] = useState("")
const [userName , setUsername]= useState("")
// const [toggle , setToggle]= useState(true)
// const [allData , setAlldata] = useState([])
const [message , setMessage] = useState()




const registerData = {
  userName ,
  email ,
  quizScore : 0 ,
}

const register = (e) =>{

  e.preventDefault();

  // console.log(userName)

// setToggle(!toggle)





axios.post("https://quiz-by-ar.herokuapp.com/register", registerData)

.then((res) => {

    // console.log(res.data.message)
    setMessage(res.data.message)
  setUsername("");
  setEmail("");

  setTimeout(()=>{

 setMessage("")

  }, 5000);

  if(res.data.message === "User Successfully Registered."){

    localStorage.setItem("QuizRegisteration" , JSON.stringify(registerData))
    localStorage.removeItem('refer')
    
  navigate("/quiz")

}

   

})

.catch( (err)=> {
    console.log(err)
    
})




}





  return (
  
<>



<section className="section">
       <div className="box">
       <div className="form">
           <h2>
            QUIZ FORM
           </h2>
           <form onSubmit={register}>
               <div className="inputbx">
                   <input type="text" value={userName} onChange={(e)=>setUsername(e.target.value)} placeholder="UserName" />
                  
               </div>
               <div className="inputbx">
                   <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
              
               </div>
               <div className="inputbx">
               <h4>{message}</h4>

               </div>
              
               <div className="inputbx">
                   <input type="submit" onClick={register} value="START" />
               </div>
           </form>
      
       </div>
       </div>
   </section>



</>


  )
}

export default RegisterPage ;