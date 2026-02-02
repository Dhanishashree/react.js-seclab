import React,{useEffect,useState} from 'react'

function App() {
  const[user,setUser]=useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>response.json())
    .then((data)=>setUser(data))
  },[])
  return (
    <div className='container'>
       <h2 className='title'>UserDetails</h2>
      <div className='user-list'> 
        {user.map((Details)=>(
           <div key={Details.id}>
             <p>Name:{Details.name}</p>
             <p>User Email:{Details.email}</p>
            </div>
          ))}
        
      </div>

    </div>
  )
}

export default App