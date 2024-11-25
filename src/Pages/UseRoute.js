import React, {useState,useEffect } from 'react'
import UserContext from './Context/UserContext'
import {Outlet} from 'react-router-dom'
import Firebase from '../Firebase'
const UseRoute = () => {
  const[state,setstate]=useState([])
  useEffect(()=>{
    Firebase.child("Blogs").on("value",function(snap){
if(snap.val()){
    // let array=[]
    // Object.keys(snap.val()[user]).map((user)=>{
    //     Object.keys(snap.val()[user]).map((key)=>{
    //         const object= snap.val()[user][key]
    //         object.User=user

    //         array.push(object);
    //     })
    // })
    // array.sort((a,b)=>b.Date-a.Date)
    // array.slice(o,5)
    // console.log(array)
    // setstate(array);
    console.log(snap.val())
}
else return setstate([])
    })
  },[])
  return (
<UserContext.Provider value={{"fetchalldata":state}}>
    <Outlet/>
</UserContext.Provider>    
)
}

export default UseRoute