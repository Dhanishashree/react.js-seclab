import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
     const [greetings,setGreetings]=useState("")
     useEffect(()=>{
      let hours=new Date().getHours().toString().padStart(2,'0')
      let mins=new Date().getMinutes().toString().padStart(2,'0')
     let seconds=new Date().getSeconds().toString().padStart(2,'0')
      

      if(hours<12){
        setGreetings(`Good Morning  ${hours}:${mins}:${seconds}`)
      }
      else if(hours>=12 && hours<=17){
        setGreetings(`Good Afternoon  ${hours}:${mins}:${seconds}`)
      }
      else if(hours>=17 && hours<=19){
        setGreetings(`Good evening  ${hours}:${mins}:${seconds}`)
      }
      else {
        setGreetings(`Good Night  ${hours}:${mins}:${seconds}`)
      }
    })
  return (
   
      <div>
       <h1>{greetings}</h1>
      </div>
  ) 
  }

export default App
