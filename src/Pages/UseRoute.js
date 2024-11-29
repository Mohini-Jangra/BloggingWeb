import React, {useState,useEffect } from 'react'
import UserContext from './Context/UserContext'
import {Outlet} from 'react-router-dom'
import Firebase from '../Firebase'
const UseRoute = () => {
  const[state,setstate]=useState([])
  const[images,setimages]=useState([])
  useEffect(()=>{
    Firebase.child("Blogs").on("value",function(snap){
if(snap.val()){
    let array=[]
    Object.keys(snap.val()[user]).map((user)=>{
        Object.keys(snap.val()[user]).map((key)=>{
            const object= snap.val()[user][key]
          const user= object.User

            array.push(object);
        })
    })
    array.sort((a,b)=>b.Date-a.Date)
   const newarray= array.slice(0,15)
    setstate(newarray);
let resultingarray=[]
newarray.map((obj)=>{
  if(obj.Images){
    resultingarray=[...resultingarray,...obj.Images]
  }
}) 
const myarray=resultingarray.slice(0,15)
setimages(myarray)
}
else { setstate([]) ,setimages([])}
    })
  },[])
  return (
<UserContext.Provider value={{"fetchlatestdata":state,'fetchlatestimages':images}}>
    <Outlet/>
</UserContext.Provider>    
)
}

export default UseRoute