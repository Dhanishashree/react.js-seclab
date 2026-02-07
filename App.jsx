import React, { useState } from "react"

function Tab(){
  const [activeTab,setactiveTab]=useState('Home')
  return(
    <div style={Style.Container}>
      <h1>Tab Component</h1>
      <div style={Style.tabContainer}>
        <button style={activeTab === "Home" ? Style.activeBtn:Style.btn}></button>
         <button onClick = {()=>setactiveTab('Home')}>Home</button>
         <button style={activeTab === "About" ? Style.activeBtn:Style.btn}></button>
         <button onClick = {()=>setactiveTab('About')}>About</button>
         <button style={activeTab === "Contact" ? Style.activeBtn:Style.btn}></button>
         <button onClick = {()=>setactiveTab('Contact')}>Contact</button>

      </div>
      <div style={Style.contentBox}>
         {activeTab === "Home" && (<p>This is home page</p>)}
         
         {activeTab === "About" && (<p>This is About us page</p>)}

         {activeTab === "Contact" && (<p>This is Contact us page</p>)}

      </div>
    </div>
  )
}
const Style={
  Container:{
     minHeight:"100vh",
     padding:"20px",
     background:"lightgrey"
  },
  tabContainer:{
    marginBottom:"20px"
  },
  btn:{
    padding:"10 px",
    margin:"5px",
    cursor:"pointer",
    background:"#ddd",
    border:"1px solid #aaa",
    borderRadius:"5px"
  },
  activeBtn:{
    padding:"10px",
    margin:"5px",
    cursor:"pointer",
    background:"#4caf50",
    color:"white",
    border:"1px solid #3a8e4",
    borderRadius:"5px"
  },
  contentBox:{
    padding:"20px",
    border:"1px solid #ccc",
    width:"300px",
    margin:"0 auto",
    borderRadius:"5px",
    background:"#white"
  },
};
export default Tab